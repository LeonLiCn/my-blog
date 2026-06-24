import Container from "@/app/_components/container";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  if (preview) {
    return (
      <div className="bg-amber-950 text-amber-200 border-b border-amber-900">
        <Container>
          <div className="py-1.5 text-center text-xs tracking-wide">
            Preview mode —{" "}
            <a href="/api/exit-preview" className="underline hover:text-white">
              exit
            </a>
          </div>
        </Container>
      </div>
    );
  }

  // Non-preview bar is now very subtle
  return (
    <div className="border-b border-slate-100 dark:border-slate-900">
      <Container>
        <div className="py-1 text-center text-[11px] tracking-[0.5px] text-slate-400 dark:text-slate-600">
          Personal notes on life, tech &amp; immigration
        </div>
      </Container>
    </div>
  );
};

export default Alert;
