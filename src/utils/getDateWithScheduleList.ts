import { DateList, Schedule } from "@/types/calendar";
import { getDateListIndex } from "./getDateListIndex";

export const getDateWithScheduleList = (dateList: DateList, scheduleList: Schedule[]) => {
  const newDateList = [...dateList];
  
  scheduleList.forEach(schedule => {
    const [firstIndex, secondIndex] = getDateListIndex(newDateList, schedule);
    if (firstIndex === -1) {
      return;
    }
    newDateList[firstIndex][secondIndex].schedules = [...newDateList[firstIndex][secondIndex].schedules, schedule];
  })
  return newDateList;
}