"use client";

import React from "react";
import { Schedule } from "@/types/calendar";
import { ScheduleBtn } from "@/components/atoms/ScheduleBtn";
type Props = {
  schedules: Schedule[];
};

export const CalendarCellSchedule = ({ schedules }: Props) => {
  return (
    <div className="flex flex-col items-center gap-1">
      {schedules.map((schedule) => (
        <ScheduleBtn key={schedule.id} onClick={() => null}>
          {schedule.title}
        </ScheduleBtn>
      ))}
    </div>
  );
};
