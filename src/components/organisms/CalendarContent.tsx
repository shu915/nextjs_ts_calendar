"use client";

import { useEffect, useState } from "react";
import { CalendarNav } from "./CalendarNav";
import { CalendarTableBody } from "./CalendarTableBody";
import { CalendarTableHeader } from "./CalendarTableHeader";
import { DateList, Schedule } from "../../types/calendar";
import { getDateWithScheduleList } from "../../utils/getDateWithScheduleList";
import { getDateList } from "../../utils/getDateList";
import Modal from "react-modal";
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

  if (typeof window !== "undefined") {
    const app = document.createElement("div");
    app.id = "root";
      document.body.appendChild(app);
    Modal.setAppElement("#root");
    }
  const [currentDate, setCurrentDate] = useState<Date>(initialCurrentDate);
  const [dateList, setDateList] = useState<DateList>(initialDateList);
  const [scheduleList, setScheduleList] = useState<Schedule[]>(initialScheduleList);
  const [isWeek, setIsWeek] = useState<boolean>(false);

  useEffect(() => {
    const newDateList = getDateList(currentDate, isWeek);
    const newDateListWithSchedule = getDateWithScheduleList(
      newDateList,
      scheduleList
    );

    setDateList(newDateListWithSchedule);

  }, [currentDate, scheduleList, isWeek]);


  return (
    <div>
      <CalendarNav
        isWeek={isWeek}
        scheduleList={scheduleList}
        setCurrentDate={setCurrentDate}
        setScheduleList={setScheduleList}
        setIsWeek={setIsWeek}
      />
      <table className="mt-5 w-full border-collapse">
        <CalendarTableHeader />
        <CalendarTableBody dateList={dateList} currentDate={currentDate} scheduleList={scheduleList} setScheduleList={setScheduleList} />
      </table>
    </div>
  );
};
