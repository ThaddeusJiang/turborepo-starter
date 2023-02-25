import { QuestionMarkCircleIcon } from "@heroicons/react/outline";

type Props = {
  title: string;
  icon: string | React.ReactNode;
  guideTitle?: string;
  guideLink?: string;
};

export const Header = ({ title, icon, guideTitle, guideLink }: Props) => {
  return (
    <header className="w-full h-[60px] bg-white py-2 px-[30px]">
      <div className="flex  justify-between w-full items-center h-full">
        <h1 className="flex items-center text-2xl space-x-2">
          {icon}
          <span className=" whitespace-nowrap ">{title}</span>
        </h1>

        <div className="flex items-center space-x-4">
          <span className="">
            <QuestionMarkCircleIcon className="icon" />
          </span>
          {guideLink ? <a href={guideLink}>{guideTitle}</a> : null}
          <div>Amami Dev</div>
        </div>
      </div>
    </header>
  );
};
