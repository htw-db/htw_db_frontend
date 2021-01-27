import React from 'react';
import { Story, Meta } from '@storybook/react';

import MainMenu, { Props } from './MainMenu';

import { menuItems } from '../../constants/menu';

export default {
  title: 'Components/MainMenu',
  component: MainMenu,
} as Meta;

const Template: Story<Props> = (args) => (
  <div id="app-container">
    <div className="sidebar">
      <MainMenu {...args} />
    </div>
  </div>
);

export const Selected = Template.bind({});
Selected.args = {
  items: menuItems,
  selectedItemId: 'databases',
};

export const Unselected = Template.bind({});
Unselected.args = {
  items: menuItems,
  selectedItemId: '',
};
