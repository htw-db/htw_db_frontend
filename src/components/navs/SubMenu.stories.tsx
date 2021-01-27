import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import SubMenu, { Props } from './SubMenu';

import { menuItems } from '../../constants/menu';

export default {
  title: 'Components/SubMenu',
  component: SubMenu,
} as Meta;

const Template: Story<Props> = (args) => (
  <Router>
    <div id="app-container">
      <div className="sidebar">
        <SubMenu {...args} />
      </div>
    </div>
  </Router>
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
