import React from "react";
import { Story, Meta } from "@storybook/react";

import NavBar from "../components/Header/NavBar";

export default {
    title: "Header",
    component: NavBar,
    decorators: [(Story) => <div style={{ margin: "auto", maxWidth: "600px" }}><Story/></div>],
} as Meta;

const Template: Story<any> = (args) => <NavBar {...args}/>;

export const Navmenu = Template.bind({});
Navmenu.argTypes = {
    backgroundColor: {control: "color"},
};
Navmenu.args = {
    DarkMode: true
};
if (Navmenu.args.DarkMode) {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
};