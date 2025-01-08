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
  setIsWeek: Dispatch<SetStateAction<boolean>>;
};

export const CalendarNav = ({
  setIsWeek,
  scheduleList,
  setCurrentDate,
  setScheduleList,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const changeToday = () => setCurrentDate(new Date());
  const changePrevSpan = () =>
    setCurrentDate((prevDate) => subMonths(prevDate, 1));
  const changeNextSpan = () =>
    setCurrentDate((prevDate) => addMonths(prevDate, 1));

  return (
    <>
      <div className="flex justify-between mb-2">
        <div className="flex items-center text-white gap-4">
          <FaArrowAltCircleLeft
            className="cursor-pointer text-blue-800 text-2xl"
            onClick={changePrevSpan}
          />
          <PrimaryBtn size="sm" onClick={changeToday} color="blue">
            今日
          </PrimaryBtn>
          <FaArrowAltCircleRight
            className="cursor-pointer text-blue-800 text-2xl"
            onClick={changeNextSpan}
          />
        </div>
        <div className="flex items-center gap-4">
          <PrimaryBtn size="sm" onClick={openModal} color="blue">
            予定作成
          </PrimaryBtn>
          <select className="p-2 border border-gray-300 rounded-md" onChange={(e) => setIsWeek(e.target.value === "week")}>
            <option value="month">月</option>
            <option value="week">週</option>
          </select>
          <CreateScheduleModal
            isOpen={isOpen}
            onRequestClose={closeModal}
            scheduleList={scheduleList}
            setScheduleList={setScheduleList}
          />
        </div>
      </div>
    </>
  );
};
