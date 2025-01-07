import { isSameMonth, isToday } from "date-fns"

export const dateColor = (target: Date, currentDate: Date) => {
  if (isToday(target)) {
    return "rounded-full text-white bg-blue-800";
  }

  return isSameMonth(target, currentDate) ? "text-black" : "text-gray-300";
}
