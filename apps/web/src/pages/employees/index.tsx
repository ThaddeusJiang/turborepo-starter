import { UsersIcon } from "@heroicons/react/outline";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import { Header } from "../../components/layouts/Header";
import { MainContent } from "../../components/layouts/MainContent";
import { getEmployees } from "../../modules/employees/api";

import { EmployeeTable } from "../../modules/employees/EmployeeTable";

type Props = {
  group?: string;
  department?: string;
  job?: string;
  contractType?: string;
  firstName?: string;
  lastName?: string;
  employeeCode?: string;
  status?: string;
};

export default function EmployeesPage() {
  const router = useRouter();
  const { group, department, job, contractType, firstName, lastName, employeeCode, status } = router.query as Props;

  const employeesQuery = useQuery({
    queryKey: ["/employees", { group, department, job, contractType, firstName, lastName, employeeCode, status }],
    queryFn: () => getEmployees({ group, department, job, contractType, firstName, lastName, employeeCode, status }),
  });

  if (employeesQuery.isLoading) return <div>Loading...</div>;

  const employees = employeesQuery.data?.items ?? [];

  return (
    <div>
      <Header title="Employees" icon={<UsersIcon className="w-6 h-6" />} />

      <MainContent>
        <h1 className=" text-lg">従業員情報</h1>

        <div className="py-4 flex justify-end">
          <button className="btn btn-sm btn-primary">
            <Link href={`/employees/new`}>Create</Link>
          </button>
        </div>
        <div>
          {/* @ts-ignore */}
          <EmployeeTable employees={employees} />
        </div>
      </MainContent>
    </div>
  );
}
