import { z } from "zod";
import { scheduleSchema } from "../../types/ScheduleSchema";
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { PrimaryBtn } from "../atoms/PrimaryBtn";
import { TextArea } from "../atoms/TextArea";
import { Input } from "../atoms/Input";

type Props = {
  onSubmit: (data: z.infer<typeof scheduleSchema>) => void;
  errors: FieldErrors<z.infer<typeof scheduleSchema>>;
  submitText: string;
  register: UseFormRegister<z.infer<typeof scheduleSchema>>;
  handleSubmit: UseFormHandleSubmit<z.infer<typeof scheduleSchema>>;
}

export const CreateAndEditForm = ({onSubmit, errors, submitText, register, handleSubmit}: Props) => {
  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
    <div className="w-full ">
      {errors.title && (
        <p className="text-red-500 text-center">{errors.title.message}</p>
      )}
      <div className="flex items-center">
        <label htmlFor="title-form" className="w-[30%] text-line-800">
          タイトル
        </label>
          <Input id="title-form" type="text" {...register("title")} />
      </div>
    </div>
    {errors.date && (
      <p className="text-red-500 text-center">{errors.date.message}</p>
    )}
    <div className="w-full flex items-center">
      <label htmlFor="date-form" className="w-[30%] text-line-800">
        日付
      </label>
      <Input id="date-form" type="date" {...register("date")} />
    </div>
    <div className="w-full">
      {errors.description && (
        <p className="text-red-500 text-center">
          {errors.description.message}
        </p>
      )}
      <div className="flex items-center">
        <label htmlFor="description-form" className="w-[30%] text-line-800">
          内容
        </label>
        <TextArea id="description-form" {...register("description")} />
      </div>
    </div>
    <div className="flex justify-center">
        <PrimaryBtn    size="lg" onClick={() => null} color="blue">
        {submitText}
      </PrimaryBtn>
    </div>
  </form>
  )
}
