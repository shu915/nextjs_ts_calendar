import { getScheduleList } from "@/api/calendar";
import { CalendarContent } from "@/components/organisms/CalendarContent";
import { getDateList } from "@/utils/getDateList";

export default function Home() {


  const initialCurrentDate = new Date();
  const initialDateList = getDateList(initialCurrentDate, false);
  const initialScheduleList = getScheduleList();


  return (
    <div className="bg-blue-100 w-full h-screen pt-10">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center text-blue-800">
          Next.jsカレンダー
        </h1>
        <CalendarContent
          initialDateList={initialDateList}
          initialScheduleList={initialScheduleList}
        />
      </div>
    </div>
  );
}
