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
    },
  ];
};

export const getAnalytics = () => {
  const tasks = getAllTasks();

  const initialAnalytics = {
    taskStatus: {},
    assigneeStats: {},
    dueDateStats: {},
  };

  return tasks.reduce((acc: IAnalytics, task) => {
    let taskStatus = { ...acc.taskStatus };
    let assigneeStats = { ...acc.assigneeStats };
    let dueDateStats = { ...acc.dueDateStats };

    if (task.status.includes(" ")) {
      let modifiedStatusName = task.status
        .split(" ")
        .map((word, index) =>
          index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join("");
      if (taskStatus[modifiedStatusName]) {
        taskStatus = Object.assign({}, taskStatus, {
          [modifiedStatusName]: taskStatus[modifiedStatusName] + 1,
        });
      } else {
        taskStatus = Object.assign({}, taskStatus, {
          [modifiedStatusName]: 1,
        });
      }
    } else if (taskStatus[task.status]) {
      taskStatus = Object.assign({}, taskStatus, {
        [task.status]: taskStatus[task.status] + 1,
      });
    } else {
      taskStatus = Object.assign({}, taskStatus, {
        [task.status]: 1,
      });
    }

    if (assigneeStats[task.assignee]) {
      assigneeStats = Object.assign({}, assigneeStats, {
        [task.assignee]: assigneeStats[task.assignee] + 1,
      });
    } else {
      assigneeStats = Object.assign({}, assigneeStats, {
        [task.assignee]: 1,
      });
    }

    const janFirst = new Date(task.dueDate.getFullYear(), 0, 1);

    const diffDays = Math.round(
      (task.dueDate.getTime() - janFirst.getTime()) / (1000 * 60 * 60 * 24)
    );
    const week = Math.ceil((janFirst.getDay() + 1 + diffDays) / 7);

    if (dueDateStats[`week${week}`]) {
      dueDateStats = Object.assign({}, dueDateStats, {
        [`week${week}`]: dueDateStats[`week${week}`] + 1,
      });
    } else {
      dueDateStats = Object.assign({}, dueDateStats, {
        [`week${week}`]: 1,
      });
    }

    return Object.assign({}, acc, {
      taskStatus,
      assigneeStats,
      dueDateStats,
    });
  }, initialAnalytics);
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
