import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PrimaryButton from './Button';

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => <PrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'Click me', onClick: () => {} };
