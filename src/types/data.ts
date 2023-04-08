export interface ITask {
    title: string;
    description: string;
    assignee: string;
    dueDate: Date;
    status: string;
}
export interface IAnalytics {
    taskStatus: {
        [key:string]:number
    }
    assigneeStats: {
        [key:string]:number
    }
    dueDateStats: {
        [key:string]:number
    }
}
