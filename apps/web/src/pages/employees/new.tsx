import { UserAddIcon } from "@heroicons/react/outline";
import { useMutation, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { Header } from "../../components/layouts/Header";
import { MainContent } from "../../components/layouts/MainContent";

import { EmployeeCreateForm } from "../../modules/employees/EmployeeCreateForm";

import { Option } from "shared/UI";
import { createEmployee } from "../../modules/employees/api";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

export default function EmployeeCreatePage() {
  const router = useRouter();

  const queryClient = useQueryClient();

  // create employee mutation
  const createEmployeeMutation = useMutation({
    mutationFn: createEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries(["/employees"]);
      toast.success("従業員を追加しました");
      router.push("/employees");
    },
  });

  const onSubmit = (data: any) => {
    createEmployeeMutation.mutate(data);
  };

  return (
    <div>
      <Header title="従業員の追加" icon={<UserAddIcon className="w-6 h-6" />} />

      <MainContent>
        <div className="bg-white p-4">
          <EmployeeCreateForm onSubmit={onSubmit} />
        </div>
      </MainContent>
    </div>
  );
}
