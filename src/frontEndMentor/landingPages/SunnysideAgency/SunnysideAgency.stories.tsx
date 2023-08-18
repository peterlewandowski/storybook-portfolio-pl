import type { Meta, StoryObj } from "@storybook/react";
import { Home } from "./Home";

const meta = {
    //   title: 'Example/Header',
    component: Home,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        // layout: 'fullscreen',
    },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    parameters: {
        layout: "fullscreen",
    },
};
