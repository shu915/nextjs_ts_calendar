"use client";

import { useEffect, useState } from "react";
import { CalendarNav } from "./CalendarNav";
import { CalendarTableBody } from "./CalendarTableBody";
import { CalendarTableHeader } from "./CalendarTableHeader";
import { DateList, Schedule } from "../../types/calendar";
import { getDateWithScheduleList } from "../../utils/getDateWithScheduleList";
import { getDateList } from "../../utils/getDateList";

type Props = {
  initialCurrentDate: Date;
  initialDateList: DateList;
  initialScheduleList: Schedule[];
};

export const CalendarContent = ({
  initialCurrentDate,
  initialDateList,
  initialScheduleList,
}: Props) => {
  const [currentDate, setCurrentDate] = useState<Date>(initialCurrentDate);
  const [dateList, setDateList] = useState<DateList>(initialDateList);
  const [scheduleList, setScheduleList] = useState<Schedule[]>(initialScheduleList);

  useEffect(() => {
    const newDateList = getDateList(currentDate);
    const newDateListWithSchedule = getDateWithScheduleList(
      newDateList,
      scheduleList
    );

    setDateList(newDateListWithSchedule);

  }, [initialScheduleList, currentDate, scheduleList]);


  return (
    <div>
      <CalendarNav
        currentDate={currentDate}
        dateList={dateList}
        scheduleList={scheduleList}
        setCurrentDate={setCurrentDate}
        setDateList={setDateList}
        setScheduleList={setScheduleList}
      />
      <table className="mt-5 w-full border-collapse">
        <CalendarTableHeader />
        <CalendarTableBody dateList={dateList} currentDate={currentDate} scheduleList={scheduleList} setScheduleList={setScheduleList} />
      </table>
    </div>
  );
};
