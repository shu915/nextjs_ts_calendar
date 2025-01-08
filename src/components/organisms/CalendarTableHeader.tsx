import { DAYS_LIST } from "@/constants/calender";
import React from "react";

export const CalendarTableHeader = () => {
  return (
    <thead>
      <tr>
        {DAYS_LIST.map((day) => (
          <th
            key={day}
            className="w-[14.28%] font-bold bg-blue-800 text-white text-lg h-10 border-r border-white border-solid"
          >
            {day}
          </th>
        ))}
      </tr>
    </thead>
  );
};
