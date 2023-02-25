import { MockEmployee } from "shared/models/Employee";
import { EmployeeBasicInfoTable } from "./EmployeeBasicInfoTable";

export default { title: "modules/employees/EmployeeBasicInfoTable" };

export const Standard = () => <EmployeeBasicInfoTable data={MockEmployee} />;
