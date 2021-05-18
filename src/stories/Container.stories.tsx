import React from "react";
import { Story, Meta } from "@storybook/react";

import Container, { ContainerProps } from "../containers/container";

export default {
  title: "Container",
  component: Container,
  argTypes: {
    backgroundColor: {
      control: "color",
      description:
        "Set the background color of Container, to see change remove color of child element.",
      defaultValue: "rgba(0, 0, 0, 0)",
    },
    children: {
      description: "A JSX Element like `<p>Hello</p>`",
      defaultValue: "None",
    },
  },
} as Meta;

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  children: <p className="bg-gray-900 text-white p-5">This is a simple Container</p>,
};

export const Light = Template.bind({});
Light.args = {
  children: <p className="bg-gray-100 text-black p-5">This is a simple Container</p>,
};
