import { PROGRESS } from "../../constants";
import "./ProgressBarLine.css";

interface IProps {
  progress: number;
}

export function ProgressBarLine({ progress }: IProps) {
  return (
    <>
      <div>{PROGRESS}</div>
      <div
        className="progress-container"
        style={{ "--value": `${progress}%` } as React.CSSProperties}
      >
        <progress value={progress} max="100" className="progress">
          {progress}
        </progress>
      </div>
      <div className="progress-percent-wrapper">
        <div>0%</div>
        <div>100%</div>
      </div>
    </>
  );
}
