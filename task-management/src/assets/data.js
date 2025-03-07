
export const initialRows = [
    { id: '1', taskNo: "T-1", taskName: "Fix Login Issue", name: "Devam", startDate: new Date("2025-03-01"), dueDate: new Date("2025-02-02"), priority: "High", status: "Completed" },
    { id: '2', taskNo: "T-2", taskName: "Add Dark Mode", name: "Meet", startDate: new Date("2025-03-01"), dueDate: new Date("2025-03-02"), priority: "Medium", status: "To Do" },
    { id: '3', taskNo: "T-3", taskName: "Update Dashboard UI", name: "Jeet", startDate: new Date("2025-03-01"), dueDate: new Date("2025-03-02"), priority: "Low", status: "In Progress" },
    { id: '4', taskNo: "T-4", taskName: "Fix API Calls", name: "Neel", startDate: new Date("2025-03-07"), dueDate: new Date("2025-03-07"), priority: "High", status: "Completed" },
    { id: '5', taskNo: "T-5", taskName: "Improve Performance", name: "Jeel", startDate: new Date("2025-03-07"), dueDate: new Date("2025-03-07"), priority: "Medium", status: "To Do" },
    { id: '6', taskNo: "T-6", taskName: "Fix Login Issue", name: "Devam", startDate: new Date("2025-03-07"), dueDate: new Date("2025-03-07"), priority: "High", status: "To Do" },
    { id: '7', taskNo: "T-7", taskName: "Add Dark Mode", name: "Meet", startDate: new Date("2025-03-07"), dueDate: new Date("2025-03-07"), priority: "Medium", status: "To Do" },
    { id: '8', taskNo: "T-8", taskName: "Update Dashboard UI", name: "Jeet", startDate: new Date("2025-03-07"), dueDate: new Date("2025-03-07"), priority: "Low", status: "In Progress" },
    { id: '9', taskNo: "T-9", taskName: "Fix API Calls", name: "Neel", startDate: new Date("2025-03-04"), dueDate: new Date("2025-03-07"), priority: "High", status: "Completed" },
    { id: '10', taskNo: "T-10", taskName: "Improve Performance", name: "Jeel", startDate: new Date("2025-03-07"), dueDate: new Date("2025-03-07"), priority: "Medium", status: "To Do" },
    { id: '11', taskNo: "T-11", taskName: "Improve Performance", name: "Jeel", startDate: new Date("2025-03-07"), dueDate: new Date("2025-03-07"), priority: "Medium", status: "To Do" },
    { id: '12', taskNo: "T-12", taskName: "Improve Performance", name: "Jeel", startDate: new Date("2025-03-04"), dueDate: new Date("2025-03-05"), priority: "Medium", status: "completed" },
  ];
  
  export const summary = (() => {
    const completed = initialRows.filter(task => task.status === "Completed").length;
    const inProgress = initialRows.filter(task => task.status === "In Progress").length;
    const todo = initialRows.filter(task => task.status === "To Do").length;
  
    return {
      totalTasks: initialRows.length,
      tasks: {
        completed,
        "in progress": inProgress,
        todo,
      },
    };
  })();
  
  
  // export const summaryweek = {
  //   name: "Total",
  //   Completed: summary.tasks.completed,
  //   InProgress: summary.tasks["in progress"],
  //   ToDo: summary.tasks.todo,
  // };
  
  
  export const chartData = [
    { name: "Week 1", Completed: summary.tasks.completed, InProgress: summary.tasks["in progress"], ToDo: summary.tasks.todo },
    { name: "Week 2", Completed: summary.tasks.completed, InProgress: summary.tasks["in progress"], ToDo: summary.tasks.todo },
    { name: "Week 3", Completed: summary.tasks.completed, InProgress: summary.tasks["in progress"], ToDo: summary.tasks.todo },
    { name: "Week 4", Completed: summary.tasks.completed, InProgress: summary.tasks["in progress"], ToDo: summary.tasks.todo },
  ];




  