import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight mb-8 text-balance text-center md:text-left">
      {children}
    </h1>
  );
}
