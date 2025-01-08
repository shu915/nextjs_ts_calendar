import { isSameDay } from "date-fns";
import { DateList, Schedule } from "@/types/calendar";

export const getDateListIndex = (currentDateList: DateList, schedule: Schedule): number[] => {
  const firstIndex = currentDateList.findIndex(oneWeek => {
    return oneWeek.some(item => isSameDay(item.date, schedule.date));
  })
  if (firstIndex === -1) {
    return [-1, -1];
  }
  const secondIndex = currentDateList[firstIndex].findIndex(item => {
    return isSameDay(item.date, schedule.date);
  })
  if (secondIndex === -1) {
    return [-1, -1];
  }
  return [firstIndex, secondIndex];
}