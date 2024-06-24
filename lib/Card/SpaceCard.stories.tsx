import type { Meta, StoryObj } from "@storybook/react";

import { SpaceCard } from "./SpaceCard";

const meta: Meta<typeof SpaceCard> = {
  component: SpaceCard,
};

export default meta;

type Story = StoryObj<typeof SpaceCard>;

export const TheCard: Story = {
  args: {
    hideGlow: false,
  },
};
