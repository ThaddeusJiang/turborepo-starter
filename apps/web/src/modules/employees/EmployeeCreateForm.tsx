import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { EmployeeContractTypes } from "shared/EmployeeContractTypes";

type Props = {
  onSubmit: (data: any) => void;
};

export const EmployeeCreateForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      lastName: "",
      firstName: "",
      employeeCode: "",
      gender: "",
      joinedAt: "",
      contractType: "3",
    },
  });

  return (
    <form className=" space-y-4 " onSubmit={handleSubmit(onSubmit)}>
      <h1 className=" text-2xl font-bold">従業員の追加</h1>
      <main className="form-control divide-y border">
        <dl className="flex divide-x">
          <dt className=" p-2 bg-slate-50 w-1/4">Full Name</dt>
          <dd className="p-2 w-3/4 flex space-x-2">
            <div className="flex space-x-2 items-center">
              <label htmlFor="lastName">Last Name</label>
              <div>
                <input
                  {...register("lastName", { required: true })}
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered input-sm"
                />
              </div>
            </div>
            <div className=" flex space-x-2 items-center">
              <label htmlFor="firstName">First Name</label>
              <input
                {...register("firstName")}
                id="firstName"
                type="text"
                placeholder="名前"
                className=" input input-bordered input-sm"
              />
            </div>
          </dd>
        </dl>

        <dl className="flex divide-x">
          <dt className=" p-2 bg-slate-50 w-1/4">従業員コード</dt>
          <dd className="p-2 w-3/4">
            <input
              {...register("employeeCode")}
              id="employeeCode"
              type="text"
              placeholder="社員番号、社員コード、社員IDなど"
              className=" input input-bordered input-sm w-full"
            />
          </dd>
        </dl>

        <dl className="flex divide-x">
          <dt className=" p-2 bg-slate-50 w-1/4">性別</dt>
          <dd className="p-2 flex space-x-2">
            <div className="flex space-x-2 items-center">
              <input {...register("gender")} id="male" type="radio" value="male" className=" radio radio-sm"></input>
              <label htmlFor="male" className="  inline-flex items-center">
                男
              </label>
            </div>

            <div className="flex space-x-2 items-center">
              <input
                {...register("gender")}
                id="female"
                type="radio"
                value="female"
                className=" radio radio-sm"
              ></input>
              <label htmlFor="female" className=" inline-flex items-center">
                <span>女</span>
              </label>
            </div>
          </dd>
        </dl>

        <dl className="flex divide-x">
          <dt className=" p-2 bg-slate-50 w-1/4">入社年月日</dt>
          <dd className="p-2 w-3/4 ">
            {/* <input id="joinedAt" type="date" className="w-full" /> */}
            <input
              {...register("joinedAt")}
              id="joinedAt"
              type="date"
              className="w-full input input-bordered input-sm"
            />
          </dd>
        </dl>

        <dl className="flex divide-x">
          <dt className=" p-2 bg-slate-50 w-1/4">
            <label htmlFor="contractType">契約種別</label>
          </dt>
          <dd className="p-2 w-3/4 ">
            <select
              {...register("contractType")}
              id="contractType"
              className=" select select-sm select-bordered w-full"
              defaultValue="3"
            >
              {EmployeeContractTypes.map((contractType) => (
                <option key={contractType.id} value={contractType.id}>
                  {contractType.name}
                </option>
              ))}
            </select>
          </dd>
        </dl>
      </main>

      <div className="flex justify-center space-x-4">
        <button type="submit" className="btn btn-primary">
          追加する
        </button>

        <button className=" btn">キャンセル</button>
      </div>
      <DevTool control={control} />
    </form>
  );
};
