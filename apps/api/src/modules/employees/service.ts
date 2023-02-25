import { EmployeeKey, GroupKey } from "../../shared/const/models";
import { createEntity, db, decodeId } from "../../clients/db";
import { Employee } from "../../shared/employees/employees";

export const createEmployee = async (employee: Employee) => {
  // create employee
  const record = await createEntity(EmployeeKey, {
    ...employee,
    // 在籍
    status: "active",
    group: `${GroupKey}:${employee.group}`,
  });

  return {
    ...record,
    group: decodeId(record.group),
  };
};

export const getEmployee = async (id: string): Promise<Employee | undefined> => {
  const [record] = await db.select(`${EmployeeKey}:${id}`);
  return record as Employee;
};
