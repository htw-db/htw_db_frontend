import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { switchMenu } from '../../slices/menu';
import MenuIcon from '../../components/svg/MenuIcon';

interface Props {}

const TopNav: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const handleMenuButtonClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    dispatch(switchMenu());
  };

  return (
    <nav className="navbar fixed-top">
      <div className="d-flex align-items-center navbar-left">
        <NavLink
          onClick={(e) => handleMenuButtonClick(e)}
          to="#"
          className="menu-button d-none d-md-block"
        >
          <MenuIcon />
        </NavLink>
      </div>
    </nav>
  );
};

export default TopNav;
