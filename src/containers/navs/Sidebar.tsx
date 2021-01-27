import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainMenu from '../../components/navs/MainMenu';
import SubMenu from '../../components/navs/SubMenu';

import { menuItems } from '../../constants/menu';
import { selectMenu } from '../../selectors/menu';
import { openSubMenu, selectMenuItem } from '../../slices/menu';

interface Props {}

const Sidebar: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { selectMenuItemId } = useSelector(selectMenu);

  const onClickMenuItem = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    itemId: string,
  ) => {
    event.preventDefault();
    dispatch(selectMenuItem(itemId));
    dispatch(openSubMenu());
  };

  const onClickSubMenuitem = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    subMenuItemId: string,
  ) => {};

  return (
    <div className="sidebar">
      <MainMenu items={menuItems} selectedItemId={selectMenuItemId} onClick={onClickMenuItem} />
      <SubMenu items={menuItems} selectedItemId={selectMenuItemId} onClick={onClickSubMenuitem} />
    </div>
  );
};

export default Sidebar;
