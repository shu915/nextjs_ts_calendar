import Modal from "react-modal";
import { Schedule } from "../../types/calendar";
import { PrimaryBtn } from "../atoms/PrimaryBtn";
import { Input } from "../atoms/Input";
import { TextArea } from "../atoms/TextArea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, parse } from "date-fns";
import { v4 as uuidv4 } from "uuid";

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  scheduleList: Schedule[];
  setScheduleList: (scheduleList: Schedule[]) => void;
};

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "50vh",
  },
};

const app = document.createElement("div");
app.id = "root";
document.body.appendChild(app);
Modal.setAppElement("#root");

export const CreateScheduleModal = ({ isOpen, onRequestClose, scheduleList, setScheduleList }: Props) => {
  const scheduleSchema = z.object({
    title: z.string().min(1, { message: "タイトルは必須です" }),
    date: z.string().min(1, { message: "日付は必須です" }),
    description: z.string().optional(),
  });
  
  const { register, handleSubmit, reset } = useForm<z.infer<typeof scheduleSchema>>({
    resolver: zodResolver(scheduleSchema),
    defaultValues: {
      date: format(new Date(), "yyyy-MM-dd"),
    }
  });

  const addSchedule = (schedule: Schedule) => {
    const newScheduleList = [...scheduleList, schedule];
    setScheduleList(newScheduleList);
    onRequestClose();
  };


  const onSubmit = (data: z.infer<typeof scheduleSchema>) => {
    const schedule: Schedule = {
      id: uuidv4(),
      title: data.title,
      date: parse(data.date, "yyyy-MM-dd", new Date()),
      description: data.description ?? "",
    }
    addSchedule(schedule);
    reset();
  };

  return (
    <Modal style={modalStyle} isOpen={isOpen} onRequestClose={onRequestClose}>
      <h3 className="text-center text-3xl text-blue-800 font-bold pb-5">
        予定作成
      </h3>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex items-center">
          <label htmlFor="title-form" className="w-[30%] text-line-800">
            タイトル
          </label>
          <Input
            id="title-form"
            type="text"
            {...register("title")}
          />
        </div>
        <div className="w-full flex items-center">
          <label htmlFor="date-form" className="w-[30%] text-line-800">
            日付
          </label>
          <Input id="date-form" type="date" {...register("date")} />
        </div>
        <div className="w-full flex items-center">
          <label htmlFor="description-form" className="w-[30%] text-line-800">
            内容
          </label>
          <TextArea id="description-form" {...register("description")} />
        </div>
        <div className="flex justify-center">
          <PrimaryBtn size="lg" onClick={() => null} color="blue">
            作成
          </PrimaryBtn>
        </div>
      </form>
    </Modal>
  );
};
