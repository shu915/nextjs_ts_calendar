export type DateList = {
  date: Date;
  schedules: Schedule[];
}[][];

export type Schedule = {
  id: string;
  date: Date;
  title: string;
  description: string;
}