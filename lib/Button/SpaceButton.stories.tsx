import type { Meta, StoryObj } from "@storybook/react";

import { SpaceButton } from "./SpaceButton";

const meta: Meta<typeof SpaceButton> = {
  component: SpaceButton,
};

export default meta;

type Story = StoryObj<typeof SpaceButton>;

export const SpaceBlack: Story = {
  args: {
    children: "SpaceBlack",
    variant: "SpaceBlack",
  },
};

export const SpaceOutline: Story = {
  args: {
    children: "SpaceOutline",
    variant: "SpaceOutline",
  },
};

export const SpaceBlue: Story = {
  args: {
    children: "SpaceBlue",
    variant: "SpaceBlue",
  },
};
