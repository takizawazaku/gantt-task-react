import React from "react";
import "gantt-task-react/dist/index.css";
import { ViewMode } from "gantt-task-react";
type ViewSwitcherProps = {
  isChecked: boolean;
  onViewListChange: (isChecked: boolean) => void;
  onViewModeChange: (viewMode: ViewMode) => void;
};
export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({ onViewModeChange, onViewListChange, isChecked }) => {
  return (
    <div className="ViewContainer">
      <button className="Button" onClick={() => onViewModeChange(ViewMode.Hour)}>
        1時間
      </button>
      <button className="Button" onClick={() => onViewModeChange(ViewMode.QuarterDay)}>
        4時間
      </button>
      <button className="Button" onClick={() => onViewModeChange(ViewMode.HalfDay)}>
        半日
      </button>
      <button className="Button" onClick={() => onViewModeChange(ViewMode.Day)}>
        日
      </button>
      <button className="Button" onClick={() => onViewModeChange(ViewMode.Week)}>
        週
      </button>
      <button className="Button" onClick={() => onViewModeChange(ViewMode.Month)}>
        月
      </button>
      <button className="Button" onClick={() => onViewModeChange(ViewMode.Year)}>
        年
      </button>
      <div className="Switch">
        <label className="Switch_Toggle">
          <input type="checkbox" defaultChecked={isChecked} onClick={() => onViewListChange(!isChecked)} />
          <span className="Slider" />
        </label>
        タスクリストを表示
      </div>
    </div>
  );
};
