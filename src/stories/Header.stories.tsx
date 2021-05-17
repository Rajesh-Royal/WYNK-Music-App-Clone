import React from "react";
import { Story, Meta } from "@storybook/react";

import Header from "../components/Header/Header";

export default {
    title: "Header",
    component: Header,
    argTypes: {
        toggleTheme: {
            "description": "A function which toggle between dark and white theme",
        }
    },
    toggleTheme: () => true,
} as Meta;

const Template: Story<any> = (args) => <Header />;

export const Default = Template.bind({});
