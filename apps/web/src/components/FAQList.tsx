import Link from "next/link";

export const FAQList = ({
  items,
}: {
  items: {
    title: string;
    link: string;
  }[];
}) => {
  return (
    <div className="flex flex-col space-y-4">
      <header className="py-4 border-b">よくあるご質問</header>
      <ul className=" space-y-4">
        {items.map((item) => (
          <li key={item.title}>
            <Link href={item.link} className="link  text-sky-700 link-hover">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/faq" className="link text-sky-700 link-hover">
        FAQページへ
      </Link>
    </div>
  );
};
