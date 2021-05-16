import React from "react";
import { Story, Meta } from "@storybook/react";

import Container, { ContainerProps } from "../containers/Container";

export default {
    title: "Container",
    component: Container,
} as Meta;

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

export const Dark = Template.bind({});
Dark.args = {
    children: <p className="bg-gray-900 text-white pad1">This is a simple header</p>
};

export const Light = Template.bind({});
Light.args = {
    children: <p className="bg-gray-100 text-white pad1">Hello</p>
};