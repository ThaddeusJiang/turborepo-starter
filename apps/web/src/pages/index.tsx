import { HomeIcon } from "@heroicons/react/outline";
import { Header } from "../components/layouts/Header";
import { MainContent } from "../components/layouts/MainContent";

export default function HomePage() {
  return (
    <>
      <Header title="ホーム" icon={<HomeIcon className="w-6 h-6" />} />

      <MainContent>
        <h1>HomePage</h1>
      </MainContent>
    </>
  );
}
