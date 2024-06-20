import type { Meta, StoryObj } from "@storybook/react";
import SpaceButton from ".";

const meta: Meta<typeof SpaceButton> = {
  title: "Components/SpaceButton",
  component: SpaceButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonText: "Click me",
    backGroundColor: "cayn-500" as any,
    backGroundHoverColor: "cayn-600" as any,
  },
};

export default meta;
