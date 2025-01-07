"use client";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { PrimaryBtn } from "@/components/atoms/PrimaryBtn";
import { Dispatch, SetStateAction, useEffect } from "react";
import { addMonths, subMonths } from "date-fns";
// import { CreateScheduleModal } from "@/components/organisms/CreateScheduleModal";
import { DateList, Schedule } from "@/types/calendar";
import { getDateListIndex } from "@/utils/getDateListIndex";
import { getDateList } from "@/utils/getDateList";
import { getDateWithScheduleList } from "@/utils/getDateWithScheduleList";

type Props = {
  currentDate: Date;
  dateList: DateList;
  scheduleList: Schedule[];
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setDateList: Dispatch<SetStateAction<DateList>>;
};

export const CalendarNav = ({
  currentDate,
  dateList,
  scheduleList,
  setCurrentDate,
  setDateList,
}: Props) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const openModal = () => setIsOpen(true);
  // const closeModal = () => setIsOpen(false);

  const changeToday = () => setCurrentDate(new Date());
  const changePrevMonth = () =>
    setCurrentDate((prevDate) => subMonths(prevDate, 1));
  const changeNextMonth = () =>
    setCurrentDate((prevDate) => addMonths(prevDate, 1));

  // const addSchedule = (schedule: Schedule) => {
  //   const newDateList = [...dateList];
  //   const [firstIndex, secondIndex] = getDateListIndex(newDateList, schedule);
  //   if (firstIndex === -1) {
  //     return;
  //   }
  //   newDateList[firstIndex][secondIndex].schedules = [
  //     ...newDateList[firstIndex][secondIndex].schedules,
  //     schedule,
  //   ];
  //   setDateList(newDateList);
  // };

  return (
    <>
      <div className="flex justify-between mb-2">
        <div className="flex items-center text-white gap-4">
          <FaArrowAltCircleLeft
            className="cursor-pointer text-blue-800 text-2xl"
            onClick={changePrevMonth}
          />
          <PrimaryBtn size="sm" onClick={changeToday}>
            今月
          </PrimaryBtn>
          <FaArrowAltCircleRight
            className="cursor-pointer text-blue-800 text-2xl"
            onClick={changeNextMonth}
          />
        </div>
        <PrimaryBtn size="sm" onClick={() => null}>
          予定作成
        </PrimaryBtn>
        {/* <CreateScheduleModal isOpen={isOpen} onRequestClose={closeModal} addSchedule={addSchedule} /> */}
      </div>
    </>
  );
};
