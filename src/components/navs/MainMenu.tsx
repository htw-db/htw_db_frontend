import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { MenuItemInterface } from '../../types';

export interface Props {
  items: MenuItemInterface[];
  selectedItemId: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, itemId: string) => void;
}

const MainMenu: React.FC<Props> = ({ items, selectedItemId, onClick }) => (
  <div className="main-menu">
    <div className="scroll">
      <PerfectScrollbar options={{ suppressScrollX: true, wheelPropagation: false }}>
        <Nav vertical className="list-unstyled">
          {items.map((item) => (
            <NavItem key={item.id} active={item.id === selectedItemId}>
              <NavLink
                to={item.to}
                onClick={(event) => onClick(event, item.id)}
                data-flag={item.id}
              >
                <i className={item.icon} /> {item.label}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </PerfectScrollbar>
    </div>
  </div>
);

export default MainMenu;
