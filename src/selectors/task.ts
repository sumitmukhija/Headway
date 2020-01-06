export default (tasks: any, category: any) => {
    return tasks.filter((task: any) => {
        return task.category === category;
    });
 };