import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta:Meta<typeof Button> = {
    title: "компоненты/Button",
    component: Button,
    tags: ['autodocs']

}

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Button",
    }
} 