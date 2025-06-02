import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SampleCard from './SampleCard';

export default {
  title: 'Components/SampleCard',
  component: SampleCard
} as ComponentMeta<typeof SampleCard>;

const Template: ComponentStory<typeof SampleCard> = (args) => <SampleCard {...args} />;

export const Default = Template.bind({});
Default.args = { title: 'Card Title', description: 'Card description goes here.' };
