import { addDays } from "date-fns";
import { Schedule } from "@/types/calendar";

export const getScheduleList = (): Schedule[] => {
  const today = new Date();

  return [
    {
      id: "1",
      date: today,
      title: "予定1",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero facere, voluptatum quaerat perferendis harum deleniti veniam officiis placeat doloremque dolorem ducimus distinctio illum inventore hic sunt molestias modi quidem reprehenderit provident eligendi aspernatur alias dicta. Alias iusto ipsam a, labore quia reprehenderit dolore accusamus voluptate corrupti debitis odit velit vitae tempora delectus autem explicabo necessitatibus. Pariatur vel perferendis, quas, magnam architecto ad aperiam ratione commodi impedit iste incidunt alias obcaecati earum id, quisquam dignissimos inventore sint ab deserunt animi odit excepturi. Recusandae natus et sit ut nostrum, sint voluptatem? Iusto nisi illo pariatur. Consequatur ipsum odio qui, est totam iste?",
    },
    {
      id: "2",
      date: today,
      title: "予定2",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero facere, voluptatum quaerat perferendis harum deleniti veniam officiis placeat doloremque dolorem ducimus distinctio illum inventore hic sunt molestias modi quidem reprehenderit provident eligendi aspernatur alias dicta. Alias iusto ipsam a, labore quia reprehenderit dolore accusamus voluptate corrupti debitis odit velit vitae tempora delectus autem explicabo necessitatibus. Pariatur vel perferendis, quas, magnam architecto ad aperiam ratione commodi impedit iste incidunt alias obcaecati earum id, quisquam dignissimos inventore sint ab deserunt animi odit excepturi. Recusandae natus et sit ut nostrum, sint voluptatem? Iusto nisi illo pariatur. Consequatur ipsum odio qui, est totam iste?",
    },
    {
      id: "3",
      date: addDays(today, 1),
      title: "予定3",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero facere, voluptatum quaerat perferendis harum deleniti veniam officiis placeat doloremque dolorem ducimus distinctio illum inventore hic sunt molestias modi quidem reprehenderit provident eligendi aspernatur alias dicta. Alias iusto ipsam a, labore quia reprehenderit dolore accusamus voluptate corrupti debitis odit velit vitae tempora delectus autem explicabo necessitatibus. Pariatur vel perferendis, quas, magnam architecto ad aperiam ratione commodi impedit iste incidunt alias obcaecati earum id, quisquam dignissimos inventore sint ab deserunt animi odit excepturi. Recusandae natus et sit ut nostrum, sint voluptatem? Iusto nisi illo pariatur. Consequatur ipsum odio qui, est totam iste?",
    },
    {
      id: "4",
      date: addDays(today, -9),
      title: "予定4",
      description: "予定4",
    },
  ];
}