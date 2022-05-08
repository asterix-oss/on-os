// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Desktop from "./Desktop";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Desktop",
  component: Desktop,
} as ComponentMeta<typeof Desktop>;

export const Default: ComponentStory<typeof Desktop> = () => <Desktop />;
