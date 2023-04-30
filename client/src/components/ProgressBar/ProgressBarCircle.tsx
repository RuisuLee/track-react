import { IProgress } from "../../types/Progress";
import "./ProgressBarCircle.css";

export function ProgressBarCircle({ progress }: IProgress) {
  return (
    <>
      <div
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ "--value": progress } as React.CSSProperties}
      ></div>
    </>
  );
}
