import { render, screen } from "@testing-library/react";
import { Tabs } from "./Tabs";

test("Tabs", () => {
  render(
    <Tabs
      tabs={[
        { text: "Tab 1", link: "/tab1" },
        { text: "Tab 2", link: "/tab2" },
      ]}
      tabLink="/tab2"
    />
  );

  expect(screen.getByText("Tab 1")).toBeInTheDocument();
  expect(screen.getByText("Tab 2")).toBeInTheDocument();
});
