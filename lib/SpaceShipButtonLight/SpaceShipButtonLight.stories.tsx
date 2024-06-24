import type { Meta, StoryObj } from "@storybook/react";

import { SpaceShipButtonLight } from "./SpaceShipButtonLight";

const meta: Meta<typeof SpaceShipButtonLight> = {
  component: SpaceShipButtonLight,
};

export default meta;

type Story = StoryObj<typeof SpaceShipButtonLight>;

export const SpaceShip: Story = {
  args: {},
};
