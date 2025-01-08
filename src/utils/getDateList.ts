import { DateList, Schedule } from "@/types/calendar";
import { eachDayOfInterval, eachWeekOfInterval, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from "date-fns";

export const getDateList = (date: Date, isWeek: boolean) => {
  let sundayList: Date[];
  console.log(isWeek);
  if (isWeek) {
    sundayList = eachWeekOfInterval({
      start: startOfWeek(date),
      end: endOfWeek(date),
    });
  } else {
    sundayList = eachWeekOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date),
    });
  }
  const newDateList: DateList = sundayList.map((date) => {
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
