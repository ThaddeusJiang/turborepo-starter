import classNames from "classnames";
import Link from "next/link";

type Props = {
  tabs: {
    text: string;
    link: string;
  }[];
  tabLink: string;
};

export const Tabs = ({ tabs, tabLink = tabs[0].link }: Props) => {
  return (
    <div className="tabs w-full py-5">
      {tabs.map((item) => (
        <span
          key={item.text}
          className={classNames("block tab tab-bordered min-w-min flex-auto", {
            "tab-active": tabLink === item.link,
          })}
        >
          <Link href={item.link}>{item.text}</Link>
        </span>
      ))}
    </div>
  );
};
