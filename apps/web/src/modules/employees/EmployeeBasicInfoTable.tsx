import { InfoTable } from "../../components/InfoTable";

export const EmployeeBasicInfoTable = (props: {
  data: {
    id?: string;
    firstName: string;
    lastName: string;
    firstNameKana?: string;
    lastNameKana?: string;
    employeeCode?: string;
    gender?: string;
    birthday?: string;
    phoneNumber?: string;
    postalCode?: string;
    prefecture?: string;
    city?: string;
    cityKana?: string;
    address?: string;
    addressKana?: string;
    myNumber?: string;
  };
}) => {
  const employeeBasicInfo = props.data;
  const items = [
    {
      id: "Name",
      name: "name",
      content: `${employeeBasicInfo.lastName} ${employeeBasicInfo.firstName}`,
    },
    {
      id: "Kana",
      name: "kana",
      content: `${employeeBasicInfo?.lastNameKana ?? ""} ${employeeBasicInfo.firstNameKana ?? ""}`,
    },
    {
      id: "性別",
      name: "性別",
      content: employeeBasicInfo.gender,
    },
    {
      id: "生年月日",
      name: "生年月日",
      content: employeeBasicInfo.birthday,
    },
    {
      id: "電話番号",
      name: "電話番号",
      content: employeeBasicInfo.phoneNumber,
    },
    {
      id: "郵便番号",
      name: "郵便番号",
      content: employeeBasicInfo.postalCode,
    },
    {
      id: "都道府県",
      name: "都道府県",
      content: employeeBasicInfo.prefecture,
    },
    // {
    //     id: "市区町村",
    //     name: "市区町村",
    //     content: "港区",
    // }
    {
      id: "住所1",
      name: "住所1",
      content: employeeBasicInfo.city,
    },
    {
      id: "住所1フリガナ",
      name: "住所1フリガナ",
      content: employeeBasicInfo.cityKana,
    },
    {
      id: "住所2",
      name: "住所2",
      content: employeeBasicInfo.address,
    },
    {
      id: "住所2フリガナ",
      name: "住所2フリガナ",
      content: employeeBasicInfo.addressKana,
    },
    {
      id: "マイナンバー",
      name: "マイナンバー",
      content: employeeBasicInfo.myNumber,
    },
  ];
  return <InfoTable items={items} />;
};
