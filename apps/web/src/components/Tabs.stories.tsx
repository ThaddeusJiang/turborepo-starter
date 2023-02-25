import { Meta } from "@storybook/react";
import { Tabs } from "./Tabs";

export default {
  title: "Components/Tabs",
} as Meta;

export const Standard = () => {
  const tabs = [
    {
      text: "Tab 1",
      link: "/tab1",
    },
    {
      text: "Tab 2",
      link: "/tab2",
    },
  ];
  const tabLink = "/tab1";
  return <Tabs tabs={tabs} tabLink={tabLink} />;
};
