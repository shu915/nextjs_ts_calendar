"use client";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { PrimaryBtn } from "@/components/atoms/PrimaryBtn";
import { Dispatch, SetStateAction, useState } from "react";
import { addMonths, subMonths } from "date-fns";
import { CreateScheduleModal } from "@/components/organisms/CreateScheduleModal";
import { DateList, Schedule } from "@/types/calendar";

type Props = {
  currentDate: Date;
  dateList: DateList;
  scheduleList: Schedule[];
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setDateList: Dispatch<SetStateAction<DateList>>;
  setScheduleList: Dispatch<SetStateAction<Schedule[]>>;
};

export const CalendarNav = ({
  
  scheduleList,
  setCurrentDate,
  setScheduleList,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const changeToday = () => setCurrentDate(new Date());
  const changePrevMonth = () =>
    setCurrentDate((prevDate) => subMonths(prevDate, 1));
  const changeNextMonth = () =>
    setCurrentDate((prevDate) => addMonths(prevDate, 1));

 

  return (
    <>
      <div className="flex justify-between mb-2">
        <div className="flex items-center text-white gap-4">
          <FaArrowAltCircleLeft
            className="cursor-pointer text-blue-800 text-2xl"
            onClick={changePrevMonth}
          />
          <PrimaryBtn size="sm" onClick={changeToday} color="blue">
            今月
          </PrimaryBtn>
          <FaArrowAltCircleRight
            className="cursor-pointer text-blue-800 text-2xl"
            onClick={changeNextMonth}
          />
        </div>
        <PrimaryBtn size="sm" onClick={openModal} color="blue">
          予定作成
        </PrimaryBtn>
        <CreateScheduleModal isOpen={isOpen} onRequestClose={closeModal} scheduleList={scheduleList} setScheduleList={setScheduleList} />
      </div>
    </>
  );
};
