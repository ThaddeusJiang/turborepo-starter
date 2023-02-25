import { InfoTable } from "../../components/InfoTable";

export const EmployeeEmployInfoTable = (props: {
  data: { id: string; status: string; joinedAt: string; quitAt: string };
}) => {
  const { data } = props;
  const items = [
    {
      id: "在籍状況",
      name: "在籍状況",
      content: data.status,
    },
    {
      id: "入社年月日",
      name: "入社年月日",
      content: data.joinedAt,
    },
  ];
  return <InfoTable items={items} />;
};
