import { Task } from "../../dist/types/public-types";

/**
 * start:
 * end:
 * name:
 *
 * @returns
 */
export const initTasks = (): Task[] => {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(2022, 1, 1),
      end: new Date(2022, 3, 31),
      name: "GE-BPOマニシステム開発",
      id: "0",
      progress: 100, // 進捗
      type: "project",
      hideChildren: false,
      displayOrder: 1,
    },
    {
      start: new Date(2022, 1, 1),
      end: new Date(2022, 1, 5),
      name: "技術選定",
      id: "1",
      progress: 100,
      type: "task",
      project: "ProjectSample",
      displayOrder: 2,
    },
    {
      start: new Date(2022, 1, 5),
      end: new Date(2022, 1, 15),
      name: "Reactの検証",
      id: "2",
      progress: 100,
      dependencies: ["1"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 3,
    },
    {
      start: new Date(2022, 1, 5),
      end: new Date(2022, 1, 10),
      name: ".NET6の検証",
      id: "3",
      progress: 100,
      dependencies: ["1"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 4,
    },
    {
      start: new Date(2022, 1, 11),
      end: new Date(2022, 2, 31),
      name: "実装",
      id: "4",
      progress: 70,
      dependencies: ["2", "3"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 5,
    },
    {
      start: new Date(2022, 3, 1),
      end: new Date(2022, 3, 29),
      name: "テスト",
      id: "5",
      type: "task",
      progress: 10,
      dependencies: ["4"],
      project: "ProjectSample",
      displayOrder: 6,
    },
    {
      start: new Date(2022, 3, 31),
      end: new Date(2022, 3, 31),
      name: "リリース",
      id: "6",
      progress: currentDate.getMonth(),
      type: "milestone",
      dependencies: ["5"],
      project: "ProjectSample",
      displayOrder: 7,
    },
    {
      start: new Date(2022, currentDate.getMonth(), 18),
      end: new Date(2022, currentDate.getMonth(), 19),
      name: "Party Time",
      id: "7",
      progress: 0,
      isDisabled: true,
      type: "task",
    },
  ];
  return tasks;
};

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
