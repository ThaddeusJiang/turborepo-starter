export const EmployeeStatuses = [
  {
    id: "1",
    name: "在籍",
  },
  {
    id: "2",
    name: "退職",
  },
  {
    id: "3",
    name: "休職",
  },
];

export const EmployeeStatusMap = new Map(EmployeeStatuses.map((item) => [item.id, item.name]));
