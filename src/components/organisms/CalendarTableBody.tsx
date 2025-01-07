"use client";

import { dateColor } from "@/libs/date";
import { DateList } from "@/types/calendar";
import React from "react";
import { CalendarCellSchedule } from "../molecules/CalendarCellSchedule";
import { getDate, getMonth, getYear } from "date-fns";

type Props = {
  dateList: DateList;
  currentDate: Date;
};

export const CalendarTableBody = ({ dateList, currentDate }: Props) => {
  return (
    <tbody>
      {dateList.map((week) => {
        return (
          <tr
            key={`week-${getYear(week[0].date)}-${getMonth(
              week[0].date
            )}-${getDate(week[0].date)}`}
          >
            {week.map((day) => (
              <td
                key={`day-${getYear(day.date)}-${getMonth(day.date)}-${getDate(
                  day.date
                )}`}
                className="w-[14.28%] h-[10vh] border border-solid border-blue-800 bg-white align-top"
              >
                <span
                  className={`${dateColor(
                    day.date,
                    currentDate
                  )} inline-block w-[20px] leading-[20px] text-center `}
                >
                  {day.date.getDate()}
                </span>
                <CalendarCellSchedule schedules={day.schedules} />
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};
