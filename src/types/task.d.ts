/** タスク本体 */
export type TaskItem = {
  id: string;
  title: string;
  due: string;
}

/** タスクセクション */
export type TaskSection = {
  id: string;
  title: string;
  items: TaskItem[];
}
