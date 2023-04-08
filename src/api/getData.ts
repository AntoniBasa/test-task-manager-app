import { IAnalytics, ITask } from "../types/data";

export const getAllTasks: () => ITask[] = () => {
  return [
    {
      title: "Task 1",
      description: "Lorem ipsum dolor sit amet",
      assignee: "Alice",
      dueDate: new Date(2023, 3, 10),
      status: "open",
    },
    {
      title: "Task 2",
      description: "Consectetur adipiscing elit",
      assignee: "Bob",
      dueDate: new Date(2023, 3, 15),
      status: "in progress",
    },
    {
      title: "Task 3",
      description: "Sed do eiusmod tempor incididunt",
      assignee: "Charlie",
      dueDate: new Date(2023, 3, 18),
      status: "completed",
    },
    {
      title: "Task 4",
      description: "Ut enim ad minim veniam",
      assignee: "Alice",
      dueDate: new Date(2023, 3, 20),
      status: "open",
    },
    {
      title: "Task 5",
      description: "Duis aute irure dolor in reprehenderit",
      assignee: "Dave",
      dueDate: new Date(2023, 3, 27),
      status: "in progress",
    },
    {
        title: "Task 6",
        description: "Lorem ipsum dolor sit amet",
        assignee: "Alice",
        dueDate: new Date(2023, 3, 10),
        status: "open",
      },
      {
        title: "Task 7",
        description: "Consectetur adipiscing elit",
        assignee: "Bob",
        dueDate: new Date(2023, 3, 15),
        status: "in progress",
      },
      {
        title: "Task 8",
        description: "Sed do eiusmod tempor incididunt",
        assignee: "Charlie",
        dueDate: new Date(2023, 3, 18),
        status: "completed",
      },
      {
        title: "Task 9",
        description: "Ut enim ad minim veniam",
        assignee: "Alice",
        dueDate: new Date(2023, 3, 20),
        status: "open",
      },
      {
        title: "Task 10",
        description: "Duis aute irure dolor in reprehenderit",
        assignee: "Dave",
        dueDate: new Date(2023, 3, 27),
        status: "in progress",
      }
  ];
};

export const getAnalytics = () => {
  return getAllTasks().reduce(
    (acc: IAnalytics, task) => {
      if (task.status.includes(" ")) {
        let modifiedStatusName = task.status
          .split(" ")
          .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join("");
        if (acc.taskStatus[modifiedStatusName]) {
          acc.taskStatus[modifiedStatusName]++;
        } else {
          acc.taskStatus[modifiedStatusName] = 1;
        }
      } else if (acc.taskStatus[task.status]) {
        acc.taskStatus[task.status]++;
      } else {
        acc.taskStatus[task.status] = 1;
      }

      if (acc.assigneeStats[task.assignee]) {
        acc.assigneeStats[task.assignee]++;
      } else {
        acc.assigneeStats[task.assignee] = 1;
      }

      const janFirst = new Date(task.dueDate.getFullYear(), 0, 1);

      const diffDays = Math.round(
        (task.dueDate.getTime() - janFirst.getTime()) / (1000 * 60 * 60 * 24)
      );
      const week = Math.ceil((janFirst.getDay() + 1 + diffDays) / 7);

      if (acc.dueDateStats[`week${week}`]) {
        acc.dueDateStats[`week${week}`]++;
      } else {
        acc.dueDateStats[`week${week}`] = 1;
      }

      return acc;
    },
    {
      taskStatus: {},
      assigneeStats: {},
      dueDateStats: {},
    }
  );
};

export const getAssigneeToTasks = (assignee: string) => {
  return getAllTasks().filter((task) => task.assignee === assignee);
};

export const getStatusFilteredTasks = (
  tasksTofilter: ITask[],
  statusName: string
) => {
  return tasksTofilter.filter((task) => task.status === statusName);
};
