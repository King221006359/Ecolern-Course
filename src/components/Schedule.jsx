import React from "react";
import ScheduleCard from "./ScheduleCard";
import { ScheduleData } from "./data/Data";

function Schedul(schedule) {
  return (
    <ScheduleCard
      key={schedule.id}
      icon={schedule.icon}
      title={schedule.title}
      description={schedule.description}
    />
  );
}

function Schedule() {
  return (
    <div className="schedule-container">
      <div className="card-container">{ScheduleData.map(Schedul)}</div>
    </div>
  );
}

export default Schedule;
