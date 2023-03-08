import { RequestCardList } from '../../../features/RequestCardList';
import { RequestCardProps } from '../../../shared/ui/RequestCard';
import { AppRoutes } from '../../../shared/routes';

import cn from './CreateTeamsRequestsList.module.scss';

const requestsCards: RequestCardProps[] = [
  {
    header: 'Название команды',
    content: {
      title: 'ФИО капитана',
      description: 'Информация о команде...',
    },
    redirectTo: `${AppRoutes.CreateTeamsRequests}/1`,
  },
  {
    header: 'Название команды',
    content: {
      title: 'ФИО капитана',
      description: 'Информация о команде...',
    },
    redirectTo: `${AppRoutes.CreateTeamsRequests}/1`,
  },
  {
    header: 'Название команды',
    content: {
      title: 'ФИО капитана',
      description: 'Информация о команде...',
    },
    redirectTo: `${AppRoutes.CreateTeamsRequests}/1`,
  },
  {
    header: 'Название команды',
    content: {
      title: 'ФИО капитана',
      description: 'Информация о команде...',
    },
    redirectTo: `${AppRoutes.CreateTeamsRequests}/1`,
  },
];

export const CreateTeamsRequestsList = () => (
  <div className={cn.list}>
    <RequestCardList requestsCards={requestsCards} />
  </div>
);
