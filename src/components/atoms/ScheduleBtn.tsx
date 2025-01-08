import { Schedule } from "@/types/calendar";


type Props = {
  children: React.ReactNode;
  setSelectedSchedule: React.Dispatch<React.SetStateAction<Schedule | null>>;
  schedule: Schedule;
}


export const ScheduleBtn = ({children, setSelectedSchedule, schedule}: Props) => {
  return (
    <button className="block bg-blue-800 text-white rounded-sm w-[94%] px-2" onClick={() => setSelectedSchedule(schedule)}>
      {children}
    </button>
  )
}
