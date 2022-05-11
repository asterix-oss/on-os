// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ContextMenu from "./ContextMenu";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ContextMenu",
  component: ContextMenu,
} as ComponentMeta<typeof ContextMenu>;

export const Default: ComponentStory<typeof ContextMenu> = () => (
  <ContextMenu />
);
