export const EmployeeContractTypes = [
  {
    id: "1",
    name: "役員",
  },
  {
    id: "2",
    name: "使用人兼務役員",
  },
  {
    id: "3",
    name: "正社員",
  },
  {
    id: "4",
    name: "契約社員",
  },
  {
    id: "5",
    name: "嘱託社員",
  },
  {
    id: "6",
    name: "パート",
  },
  {
    id: "7",
    name: "アルバイト",
  },
  {
    id: "8",
    name: "派遣社員",
  },
  {
    id: "9",
    name: "その他",
  },
];

export const EmployeeContractTypeMap = new Map(EmployeeContractTypes.map((item) => [item.id, item.name]));
