import { z } from "zod";

export const scheduleSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, { message: "タイトルは必須です" }),
  date: z.string().min(1, { message: "日付は必須です" }),
  description: z.string().optional(),
});