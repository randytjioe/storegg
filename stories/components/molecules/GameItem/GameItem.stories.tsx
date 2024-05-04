import { Meta } from "@storybook/react";
import GameItem from "../../../../components/molecules/GameItem";

export default {
  title: "Componets/Molecules/GameItem",
  component: GameItem,
} as Meta;

const Template = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Name Lengkap",
};
