"use client";

import React from "react";
import { Schedule } from "@/types/calendar";
import { ScheduleBtn } from "@/components/atoms/ScheduleBtn";
type Props = {
  schedules: Schedule[];
  setSelectedSchedule: React.Dispatch<React.SetStateAction<Schedule | null>>;
};

export const CalendarCellSchedule = ({ schedules, setSelectedSchedule }: Props) => {
  return (
    <div className="flex flex-col items-center gap-1">
      {schedules.map((schedule) => (
        <ScheduleBtn key={schedule.id} setSelectedSchedule={setSelectedSchedule} schedule={schedule}>
          {schedule.title}
        </ScheduleBtn>
      ))}
    </div>
  );
};
