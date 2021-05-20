import React from "react";
import { Story, Meta } from "@storybook/react";

import NavBar from "../components/Header/NavBar";
import Header from "../components/Header/Header";

export default {
  title: "Header",
  component: NavBar,
} as Meta;

const Template: Story<any> = (args) => <NavBar {...args} />;

export const Navmenu = Template.bind({});
Navmenu.decorators = [
  (Story) => (
    <div style={{ margin: "auto", maxWidth: "600px" }}>
      <Story />
    </div>
  ),
];
Navmenu.args = {
  DarkMode: true,
};

const Template2: Story<any> = (args) => <Header />;

export const MainHeader = Template2.bind({});
MainHeader.args = {
  DarkMode: true,
};

if (Navmenu.args.DarkMode || MainHeader.args.DarkMode) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
