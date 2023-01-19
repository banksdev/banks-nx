import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Title } from "./title";

const Story: ComponentMeta<typeof Title> = {
  component: Title,
  title: "Title",
};
export default Story;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args}>My Title</Title>;

export const Primary = Template.bind({});
Primary.args = { };
