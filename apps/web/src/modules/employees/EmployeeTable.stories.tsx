import { Meta } from "@storybook/react";

import { EmployeeTable } from "./EmployeeTable";

import { MockEmployees } from "shared/mocks/MockEmployees";

export default { title: "modules/employees/EmployeeTable" } as Meta;

export const Standard = () => <EmployeeTable employees={MockEmployees} />;
