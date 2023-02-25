import axios from "axios";

// export const getEmployees = async () => {
//   const { data } = await axios.get("/employees");
//   return data;
// };

type GetEmployeesParams = {
  group?: string;
  department?: string;
  job?: string;
  contractType?: string;
  firstName?: string;
  lastName?: string;
  employeeCode?: string;
  status?: string;
};

export async function getEmployees({
  group,
  department,
  job,
  contractType,
  firstName,
  lastName,
  employeeCode,
  status,
}: GetEmployeesParams) {
  const { data } = await axios.get("/employees", {
    params: {
      group,
      department,
      job,
      contractType,
      firstName,
      lastName,
      employeeCode,
      status,
    },
  });
  return data;
}

export const createEmployee = async (employee: any) => {
  const { data } = await axios.post("/employees", employee);
  return data;
};

export const getEmployee = async (id: string) => {
  const { data } = await axios.get(`/employees/${id}`);
  return data;
};
