import { EmployeeCreateForm } from "./EmployeeCreateForm";

export default { title: "modules/employees/EmployeeCreateForm" };

export const Standard = () => <EmployeeCreateForm onSubmit={console.debug} />;
