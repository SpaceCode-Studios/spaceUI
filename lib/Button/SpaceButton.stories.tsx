import type { Meta, StoryObj } from '@storybook/react'

import { SpaceButton } from "./SpaceButton"

const meta: Meta<typeof SpaceButton> = {
	component: SpaceButton
}

export default meta

type Story = StoryObj<typeof SpaceButton>

export const SpaceBlack: Story = {
	args: {
        buttonText: "SpaceBlack",
        variant: "SpaceBlack",
    }
}

export const SpaceOutline: Story = {
	args: {
        buttonText: 'SpaceOutline',
        variant: "SpaceOutline"
    }
}

export const SpaceBlue: Story = {
    args: {
        buttonText: "SpaceBlue",
        variant: "SpaceBlue"
    }
}