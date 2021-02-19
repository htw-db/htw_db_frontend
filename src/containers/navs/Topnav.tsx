import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

import { selectAuth } from '../../selectors/auth';
import { logout } from '../../slices/auth';
import { switchMenu } from '../../slices/menu';
import MenuIcon from '../../components/svg/MenuIcon';

interface Props {}

const TopNav: React.FC<Props> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { profile } = useSelector(selectAuth);

  const handleMenuButtonClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    dispatch(switchMenu());
  };

  const handleSignOut = () => {
    dispatch(logout());
    history.push('/');
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
      <div className="navbar-right">
        <div className="user d-inline-block">
          <UncontrolledDropdown className="dropdown-menu-right">
            <DropdownToggle className="p-0" color="empty">
              <span className="name mr-1">{profile ? profile.username : ''}</span>
              <span>
                <img alt="Profile" src="/assets/img/profiles/doge.jpeg" />
              </span>
            </DropdownToggle>
            <DropdownMenu className="mt-3" right>
              <DropdownItem onClick={() => handleSignOut()}>Sign out</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
