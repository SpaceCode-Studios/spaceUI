import type { Meta, StoryObj } from "@storybook/react";

import { SpaceShipButtonDark } from "./SpaceShipButtonDark";

const meta: Meta<typeof SpaceShipButtonDark> = {
  component: SpaceShipButtonDark,
};

export default meta;

type Story = StoryObj<typeof SpaceShipButtonDark>;

export const SpaceShip: Story = {
  args: {},
};
