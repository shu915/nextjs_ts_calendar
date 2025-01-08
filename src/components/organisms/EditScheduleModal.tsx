import Modal from "react-modal";
import { Schedule } from "../../types/calendar";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, parse } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { modalStyle } from "../../styles/modalStyle";
import { scheduleSchema } from "../../types/ScheduleSchema";
import { useEffect } from "react";
import { CreateAndEditForm } from "./CreateAndEditForm";
type Props = {
  scheduleList: Schedule[];
  setScheduleList: (scheduleList: Schedule[]) => void;
  editSchedule: Schedule | null;
  onRequestClose: () => void;
};

export const EditScheduleModal = ({
  editSchedule,
  scheduleList,
  setScheduleList,
  onRequestClose,
}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof scheduleSchema>>({
    resolver: zodResolver(scheduleSchema),
    defaultValues: {
      id: editSchedule?.id,
      title: editSchedule?.title,
      date: editSchedule?.date ? format(editSchedule.date, "yyyy-MM-dd") : "",
      description: editSchedule?.description,
    },
  });

  const updateSchedule = (schedule: Schedule) => {
    const newScheduleList = scheduleList.map((s) =>
      s.id === schedule.id ? schedule : s
    );
    setScheduleList(newScheduleList);
    onRequestClose();
  };

  useEffect(() => {
    if (editSchedule) {
      const currentEditSchedule = editSchedule;
      reset({
        id: currentEditSchedule.id,
        title: currentEditSchedule.title,
        date: format(currentEditSchedule.date, "yyyy-MM-dd"),
        description: currentEditSchedule.description,
      });
    } else {
      reset();
    }
  }, [editSchedule, reset]);

  const onSubmit = (data: z.infer<typeof scheduleSchema>) => {
    const schedule: Schedule = {
      id: editSchedule?.id ?? uuidv4(),
      title: data.title,
      date: parse(data.date, "yyyy-MM-dd", new Date()),
      description: data.description ?? "",
    };
    updateSchedule(schedule);
    reset();
  };

  return (
    <Modal
      style={modalStyle}
      isOpen={!!editSchedule}
      onRequestClose={onRequestClose}
    >
      <h3 className="text-center text-3xl text-blue-800 font-bold pb-5">
        予定編集
      </h3>
      <CreateAndEditForm
        onSubmit={onSubmit}
        errors={errors}
        submitText="編集"
        register={register}
        handleSubmit={handleSubmit}
      />
    </Modal>
  );
};
