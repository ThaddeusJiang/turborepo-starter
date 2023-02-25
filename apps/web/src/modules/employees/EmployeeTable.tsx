import { ExternalLinkIcon } from "@heroicons/react/outline";
import { DataTable } from "@thaddeusjiang/react-table";
import Link from "next/link";

import { useMemo } from "react";
import { EmployeeContractTypeMap } from "shared/EmployeeContractTypes";

import { EmployeeStatusMap } from "shared/EmployeeStatuses";
import { CellInfo } from "shared/libraries/ReactTable";

type Props = {
  employees: any[];
};

export const EmployeeTable = ({ employees }: Props) => {
  const columns = useMemo(
    () => [
      {
        header: "Employee Code",
        accessorKey: "employeeCode",
      },

      {
        header: "Full Name",
        accessorKey: "fullName",
        cell: ({
          row,
        }: {
          row: {
            original: {
              id: string;
              lastName: string;
              firstName: string;
            };
          };
        }) => (
          <span className="flex items-center ">
            {row.original.lastName + " " + row.original.firstName}
            <Link className=" ml-2 link" href={`/employees/${row.original.id}`}>
              <ExternalLinkIcon className="icon" />
            </Link>
          </span>
        ),
        size: 200,
      },

      {
        header: "Group",
        accessorKey: "group",
      },
      {
        header: "Contract Type",
        accessorKey: "contractType",
        cell: (info: CellInfo) => <span>{EmployeeContractTypeMap.get(info.getValue())}</span>,
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: (info: CellInfo) => <span>{EmployeeStatusMap.get(info.getValue())}</span>,
        size: 200,
      },
    ],
    []
  );

  return (
    <>
      {/* @ts-ignore */}
      <DataTable bodyClassName="bg-white" columns={columns} data={employees} />
    </>
  );
};
