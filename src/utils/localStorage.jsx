const employees = [
  {
    id: 1,
    firstname: "Ravi",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Quarterly Report Completion",
        taskDescription: "Compile and finalize the quarterly financial report.",
        taskDate: "2024-11-20",
        category: "Reporting",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Presentation Preparation",
        taskDescription: "Create slides for the upcoming project presentation.",
        taskDate: "2024-11-22",
        category: "Presentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Records Update",
        taskDescription: "Ensure all client records are updated in the system.",
        taskDate: "2024-11-10",
        category: "Database",
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 2,
    firstname: "Aarav",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team Meeting Scheduling",
        taskDescription: "Set up and confirm the next team meeting schedule.",
        taskDate: "2024-11-21",
        category: "Management",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Project Proposal Review",
        taskDescription: "Examine and evaluate the proposed project details.",
        taskDate: "2024-11-19",
        category: "Project Review",
      },
    ],
    taskNumbers: { active: 1, newTask: 1, completed: 0, failed: 1 },
  },
  {
    id: 3,
    firstname: "Priya",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Software Documentation Update",
        taskDescription: "Edit and improve the software documentation.",
        taskDate: "2024-11-18",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Code Review Session",
        taskDescription: "Review code submitted by the development team.",
        taskDate: "2024-11-25",
        category: "Code Review",
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 0, failed: 1 },
  },
  {
    id: 4,
    firstname: "Ananya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Team Building Event Planning",
        taskDescription: "Plan logistics for the upcoming team-building event.",
        taskDate: "2024-11-30",
        category: "Event Planning",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client Feedback Analysis",
        taskDescription: "Analyze feedback collected from key clients.",
        taskDate: "2024-11-18",
        category: "Client Relations",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prototype Development",
        taskDescription:
          "Create an initial version of the new software prototype.",
        taskDate: "2024-11-28",
        category: "Development",
      },
    ],
    taskNumbers: { active: 2, newTask: 2, completed: 0, failed: 1 },
  },
  {
    id: 5,
    firstname: "Ishaan",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Budget Report Preparation",
        taskDescription: "Draft the annual budget report for the finance team.",
        taskDate: "2024-11-15",
        category: "Finance",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "CRM Records Update",
        taskDescription: "Update customer relationship management records.",
        taskDate: "2024-11-20",
        category: "CRM",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Marketing Strategy Planning",
        taskDescription:
          "Develop a strategy for the upcoming marketing campaign.",
        taskDate: "2024-11-29",
        category: "Marketing",
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 1 },
  },
];

const admin = [
  {
    id: 1,
    firstname: "Rajesh",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  // console.log(employees, admin);
  return { employees, admin };
};
