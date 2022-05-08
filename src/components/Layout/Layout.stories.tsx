// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Layout from "./Layout";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Layout,
} as ComponentMeta<typeof Layout>;

export const Default: ComponentStory<typeof Layout> = () => <Layout />;
