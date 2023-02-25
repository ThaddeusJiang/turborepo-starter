export const EmployeePayTypes = [
  {
    id: "1",
    name: "月給",
  },
  {
    id: "2",
    name: "時給",
  },
  {
    id: "3",
    name: "日給",
  },
];

export const EmployeePayTypeMap = new Map(EmployeePayTypes.map((item) => [item.id, item.name]));
