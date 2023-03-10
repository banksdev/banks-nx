import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./button";

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: "Button",
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = { };

export const Primary = Template.bind({});
Primary.args = {
  type: "primary"
};

export const WithOnClick = Template.bind({});
WithOnClick.argTypes = {
  onClick: {
    action: 'clicked'
  }
}
