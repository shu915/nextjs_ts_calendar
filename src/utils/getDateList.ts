import { DateList, Schedule } from "@/types/calendar";
import { eachDayOfInterval, eachWeekOfInterval, endOfMonth, endOfWeek, startOfMonth } from "date-fns";

export const getDateList = (date: Date) => {
  const sundayListOfMonth = eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  });
  const newDateList: DateList = sundayListOfMonth.map((date) => {
    return eachDayOfInterval({
      start: date,
      end: endOfWeek(date),
    }).map((date) => ({
      date,
      schedules: [] as Schedule[],
    }));
  });
  return newDateList;
}