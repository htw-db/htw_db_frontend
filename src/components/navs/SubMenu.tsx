import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { MenuItemInterface } from '../../types';

export interface Props {
  items: MenuItemInterface[];
  selectedItemId: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, subMenuItemId: string) => void;
}

const SubMenu: React.FC<Props> = ({ items, selectedItemId, onClick }) => {
  const selectedMenuItem = items.find((menuItem) => menuItem.id === selectedItemId);
  return (
    <div className="sub-menu">
      <div className="scroll">
        {selectedMenuItem && (
          <PerfectScrollbar options={{ suppressScrollX: true, wheelPropagation: false }}>
            <Nav key={selectedMenuItem.id} data-parent={selectedMenuItem.id} className="d-block">
              {selectedMenuItem.subs.map((subMenuItem) => (
                <NavItem key={`${selectedMenuItem.id}_${subMenuItem.id}`}>
                  <NavLink to={subMenuItem.to}>
                    <i className={subMenuItem.icon} /> {subMenuItem.label}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </PerfectScrollbar>
        )}
      </div>
    </div>
  );
};

export default SubMenu;
