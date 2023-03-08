import { Outlet, useNavigate } from 'react-router-dom';
import { DashboardOutlined, TableOutlined } from '@ant-design/icons';
import {
  Layout as AntLayout,
  Menu,
} from 'antd';
import type { MenuProps } from 'antd';

import { createElement } from 'react';
import { AppRoutes } from '../../shared/routes';
import cn from './Layout.module.scss';

const { Header, Content, Sider } = AntLayout;

export const Layout = () => {
  const navigate = useNavigate();

  const menuItems: MenuProps['items'] = [
    {
      key: 'Заявки',
      label: 'Заявки',
      icon: createElement(DashboardOutlined),
      children: [
        {
          key: AppRoutes.TeamSearch,
          label: 'Поиск команды',
          onClick: (info) => navigate(info.key),
        },
        {
          key: AppRoutes.PlayersSearch,
          label: 'Поиск игроков',
          onClick: (info) => navigate(info.key),
        },
        {
          key: AppRoutes.CreateTeamsRequests,
          label: 'Создание команды',
          onClick: (info) => navigate(info.key),
        },
      ],
    },
    {
      key: 'Поддержка',
      icon: createElement(TableOutlined),
      label: 'Поддержка',
    },
  ];

  return (
    <AntLayout className={cn.layout}>
      <Header className={cn.header}>
        <h2>HSE FOOTBALL</h2>
        <h3>Администратор</h3>
      </Header>
      <AntLayout>
        <Sider width={200}>
          <Menu
            defaultSelectedKeys={[AppRoutes.CreateTeamsRequests]}
            defaultOpenKeys={['Заявки']}
            className={cn.menu}
            mode="inline"
            items={menuItems}
          />
        </Sider>

        <AntLayout>
          <Content className={cn.content}>
            <Outlet />
          </Content>
        </AntLayout>

      </AntLayout>
    </AntLayout>
  );
};
