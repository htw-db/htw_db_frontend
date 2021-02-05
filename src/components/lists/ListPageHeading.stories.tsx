import React from 'react';
import { Story, Meta } from '@storybook/react';

import ListPageHeading, { Props } from './ListPageHeading';

export default {
  title: 'Components/ListPageHeading',
  component: ListPageHeading,
} as Meta;

const Template: Story<Props> = (args) => <ListPageHeading {...args} />;

const common: Omit<Props, 'instancesLength' | 'selectedInstancesLength'> = {
  heading: 'Heading',
  onOpenModal: () => undefined,
  onSelectAll: () => undefined,
};

export const AllSelected = Template.bind({});
AllSelected.args = {
  ...common,
  instancesLength: 5,
  selectedInstancesLength: 5,
};

export const NothingSelected = Template.bind({});
NothingSelected.args = {
  ...common,
  instancesLength: 5,
  selectedInstancesLength: 0,
};

export const NotAllSelected = Template.bind({});
NotAllSelected.args = {
  ...common,
  instancesLength: 5,
  selectedInstancesLength: 1,
};
