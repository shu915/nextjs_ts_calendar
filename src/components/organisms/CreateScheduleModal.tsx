import Modal from "react-modal";
import { Schedule } from "../../types/calendar";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, parse } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { modalStyle } from "../../styles/modalStyle";
import { scheduleSchema } from "../../types/ScheduleSchema";
import { CreateAndEditForm } from "./CreateAndEditForm";
type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  scheduleList: Schedule[];
  setScheduleList: (scheduleList: Schedule[]) => void;
};

if (typeof window !== "undefined") {
const app = document.createElement("div");
app.id = "root";
  document.body.appendChild(app);
  Modal.setAppElement("#root");
}

export const CreateScheduleModal = ({
  isOpen,
  onRequestClose,
  scheduleList,
  setScheduleList,
}: Props) => {
  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof scheduleSchema>>({
    resolver: zodResolver(scheduleSchema),
    defaultValues: {
      date: format(new Date(), "yyyy-MM-dd"),
    },
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
    };
    addSchedule(schedule);
    reset();
  };

  return (
    <Modal style={modalStyle} isOpen={isOpen} onRequestClose={onRequestClose}>
      <h3 className="text-center text-3xl text-blue-800 font-bold pb-5">
        予定作成
      </h3>
      <CreateAndEditForm onSubmit={onSubmit} errors={errors} submitText="作成" register={register} handleSubmit={handleSubmit} />
    </Modal>
  );
};
