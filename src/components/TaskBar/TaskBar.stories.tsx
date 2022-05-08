// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TaskBar from "./TaskBar";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: TaskBar,
} as ComponentMeta<typeof TaskBar>;

export const Default: ComponentStory<typeof TaskBar> = () => <TaskBar />;
