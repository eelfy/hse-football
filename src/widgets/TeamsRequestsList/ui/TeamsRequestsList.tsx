import { RequestCardList } from '../../../features/RequestCardList';
import { RequestCardProps } from '../../../shared/ui/RequestCard';
import { AppRoutes } from '../../../shared/routes';

import cn from './TeamsRequestsList.module.scss';

const requestsCards: RequestCardProps[] = [
  {
    header: 'Название команды',
    content: {
      title: 'ФИО капитана',
      description: 'Информация о команде...',
    },
    redirectTo: `${AppRoutes.TeamSearch}/1`,
  },
  {
    header: 'Название команды',
    content: {
      title: 'ФИО капитана',
      description: 'Информация о команде...',
    },
    redirectTo: `${AppRoutes.TeamSearch}/1`,
  },
  {
    header: 'Название команды',
    content: {
      title: 'ФИО капитана',
      description: 'Информация о команде...',
    },
    redirectTo: `${AppRoutes.TeamSearch}/1`,
  },
  {
    header: 'Название команды',
    content: {
      title: 'ФИО капитана',
      description: 'Информация о команде...',
    },
    redirectTo: `${AppRoutes.TeamSearch}/1`,
  },
  {
    header: 'Название команды',
    content: {
      title: 'ФИО капитана',
      description: 'Информация о команде...',
    },
    redirectTo: `${AppRoutes.TeamSearch}/1`,
  },
  {
    header: 'Название команды',
    content: {
      title: 'ФИО капитана',
      description: 'Информация о команде...',
    },
    redirectTo: `${AppRoutes.TeamSearch}/1`,
  },
  {
    header: 'Название команды',
    content: {
      title: 'ФИО капитана',
      description: 'Информация о команде...',
    },
    redirectTo: `${AppRoutes.TeamSearch}/1`,
  },
  {
    header: 'Название команды',
    content: {
      title: 'ФИО капитана',
      description: 'Информация о команде...',
    },
    redirectTo: `${AppRoutes.TeamSearch}/1`,
  },
  {
    header: 'Название команды',
    content: {
      title: 'ФИО капитана',
      description: 'Информация о команде...',
    },
    redirectTo: `${AppRoutes.TeamSearch}/1`,
  },
];

export const TeamsRequestsList = () => (
  <div className={cn.list}>
    <RequestCardList requestsCards={requestsCards} />
  </div>
);
