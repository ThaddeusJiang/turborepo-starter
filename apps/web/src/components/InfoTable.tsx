export interface InfoTableItem {
  id: string;
  name: string;
  content?: string;
}

type Props = {
  items: InfoTableItem[];
};
export const InfoTable = ({ items }: Props) => {
  return (
    <section className="container ">
      {items?.length === 0 ? (
        <div className="border p-2">
          <p>情報がありません。</p>
          <p>編集ボタンから情報を登録してください。</p>
        </div>
      ) : (
        <div className="border divide-y">
          {items.map((item) => (
            <dl key={item.id} className="flex divide-x ">
              <dt className="p-2  font-bold bg-slate-50 w-1/3">{item.name}</dt>
              <dd className="p-2  font-light">{item.content}</dd>
            </dl>
          ))}
        </div>
      )}
    </section>
  );
};
