import Link from "next/link";
import { CogIcon, CurrencyYenIcon, HomeIcon, UsersIcon } from "@heroicons/react/outline";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  const NAV_LINKS = [
    { title: "Home", href: "/", icon: <HomeIcon className="icon" /> },
    {
      title: "Employees",
      href: "/employees",
      icon: <UsersIcon className="icon" />,
    },
  ];
  return (
    <div className="flex bg-gray-100">
      <aside className=" fixed  w-60 border-r  bg-primary text-white z-10 h-screen flex flex-col justify-between">
        <nav>
          <a href="/">
            <header className=" border-b flex items-center justify-center py-4 text-3xl">Turbo Starter</header>
          </a>
          <ul className="menu">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className=" flex border-b">
                <Link href={link.href}>
                  <span>{link.icon}</span>
                  {link.title}
                </Link>
              </li>
            ))}
            {/* <li className=" border-b">
              <span>
                <span>🔮</span>その他業務
              </span>
            </li> */}
          </ul>
        </nav>
        <footer className="menu">
          <button className=" border-t">メニューを閉じる</button>
          <div className=" flex items-center justify-center py-4 border-t">
            <div>
              <p>Amami Dev, Inc.</p>
              <p>利用規約</p>
              <p>個人情報保護方針</p>
            </div>
          </div>
        </footer>
      </aside>
      {/* <main className="ml-60 bg-gray-100 w-full min-h-screen">{children}</main> */}
      <main className="ml-60 w-full">{children}</main>
    </div>
  );
};
