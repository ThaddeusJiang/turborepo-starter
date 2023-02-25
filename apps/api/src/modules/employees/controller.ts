import { db, decodeId } from "../../clients/db";
import { Router } from "express";
import { createEmployee } from "./service";
import { DepartmentKey, EmployeeKey, GroupKey, JobKey } from "../../shared/const/models";

import { parseQuery } from "../../utils/database";
import { Employee } from "../../shared/employees/employees";

const router = Router();

// Query and CRUD

router.post("/employees", async (req, res) => {
  const employee = req.body;
  const data = await createEmployee(employee);
  return res.json(data);
});

router.get("/employees/:id", async (req, res) => {
  const { id } = req.params;
  const [employee] = await db.select<Employee>(`${EmployeeKey}:${id}`);
  return res.json({
    ...employee,
    id: decodeId(employee?.id ?? ""),
  });
});

router.get("/employees", async (req, res) => {
  const { group, department, job, contractType, firstName, lastName, employeeCode, status } = req.query;

  const query = `select * from ${EmployeeKey} ${parseQuery({
    group: group?.toString() ? `${GroupKey}:${group.toString()}` : "",
    department: department?.toString() ? `${DepartmentKey}:${department.toString()}` : "",
    job: job?.toString() ? `${JobKey}:${job.toString()}` : "",
    contractType: contractType?.toString() ?? "",
    firstName: firstName?.toString() ?? "",
    lastName: lastName?.toString() ?? "",
    employeeCode: employeeCode?.toString() ?? "",
    status: status?.toString() ?? "",
  })} ORDER BY createdAt DESC`;

  try {
    const [{ result }] = await db.query(query);
    const items = (result as any[]).map((item) => ({
      ...item,
      id: decodeId(item.id),
    }));
    return res.json({ items });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

// router.get("/employees-filters", async (req, res) => {
//   const departments = await getConfigurationsGeneralDepartments();
//   const jobs = await getConfigurationsGeneralJobs();
//   const groups = await getConfigurationsGroups();
//   return res.json({ departments, jobs, groups });
// });

export const EmployeeRouter = router;
