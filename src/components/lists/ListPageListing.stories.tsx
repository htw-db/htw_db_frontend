import React from 'react';
import { Story, Meta } from '@storybook/react';

import ListPageListing, { Props } from './ListPageListing';
import { instances } from '../../constants/instances';

export default {
  title: 'Components/ListPageListing',
  component: ListPageListing,
} as Meta;

const Template: Story<Props> = (args) => <ListPageListing {...args} />;

export const Default = Template.bind({});
Default.args = {
  instances,
  selectedInstances: [1],
  onToggle: () => undefined,
};
