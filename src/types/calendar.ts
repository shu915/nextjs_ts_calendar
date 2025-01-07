export type DateList = {
  date: Date;
  schedules: Schedule[];
}[][];

export type Schedule = {
  id: number;
  date: Date;
  title: string;
  description: string;
}

export type NewSchedule = {
  date: string;
  title: string;
  description: string;
}
