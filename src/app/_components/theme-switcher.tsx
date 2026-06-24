"use client";

import styles from "./switch.module.css";
import { memo, useEffect, useState } from "react";

declare global {
  var updateDOM: () => void;
}

type ColorSchemePreference = "system" | "dark" | "light";

const STORAGE_KEY = "leon-lee-blog-theme";
const modes: ColorSchemePreference[] = ["system", "dark", "light"];

/** Injected script to set theme before React hydrates (prevents FOUC) */
const NoFOUCScript = (storageKey: string) => {
  const [SYSTEM, DARK, LIGHT] = ["system", "dark", "light"];

  const modifyTransition = () => {
    const css = document.createElement("style");
    css.textContent = "*,*:after,*:before{transition:none !important;}";
    document.head.appendChild(css);
    return () => {
      getComputedStyle(document.body);
      setTimeout(() => document.head.removeChild(css), 1);
    };
  };

  const media = matchMedia(`(prefers-color-scheme: ${DARK})`);

  window.updateDOM = () => {
    const restoreTransitions = modifyTransition();
    const stored = localStorage.getItem(storageKey) ?? SYSTEM;
    const systemMode = media.matches ? DARK : LIGHT;
    const resolved = stored === SYSTEM ? systemMode : stored;
    const root = document.documentElement;

    if (resolved === DARK) root.classList.add(DARK);
    else root.classList.remove(DARK);

    root.setAttribute("data-mode", stored);
    restoreTransitions();
  };

  window.updateDOM();
  media.addEventListener("change", window.updateDOM);
};

let updateDOM: () => void;

const ThemeToggle = () => {
  const [mode, setMode] = useState<ColorSchemePreference>(() => {
    if (typeof localStorage !== "undefined") {
      return (localStorage.getItem(STORAGE_KEY) as ColorSchemePreference) || "system";
    }
    return "system";
  });

  useEffect(() => {
    updateDOM = window.updateDOM;

    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setMode(e.newValue as ColorSchemePreference);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);
    updateDOM?.();
  }, [mode]);

  const cycleMode = () => {
    const currentIndex = modes.indexOf(mode);
    setMode(modes[(currentIndex + 1) % modes.length]);
  };

  const modeLabel = {
    system: "System",
    light: "Light",
    dark: "Dark",
  }[mode];

  return (
    <button
      onClick={cycleMode}
      className={styles.switch}
      aria-label={`Theme: ${modeLabel}. Click to change.`}
      title={`Theme: ${modeLabel}`}
      suppressHydrationWarning
    />
  );
};

const Script = memo(() => (
  <script
    dangerouslySetInnerHTML={{
      __html: `(${NoFOUCScript.toString()})('${STORAGE_KEY}')`,
    }}
  />
));

export const ThemeSwitcher = () => (
  <>
    <Script />
    <ThemeToggle />
  </>
);
