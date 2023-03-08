import { Route, Routes } from 'react-router-dom';
import { TeamRequest } from '../pages/TeamRequest';
import { CreateTeamsRequests } from '../pages/CreateTeamsRequests';
import { Login } from '../pages/Login';

import { AppRoutes } from '../shared/routes';
import { Layout } from './ui/Layout';

export const App = () => (
  <Routes>
    <Route path={AppRoutes.Login} element={<Login />} />
    <Route path="/" element={<Layout />}>
      <Route
        path={AppRoutes.TeamRequest}
        element={<TeamRequest />}
      />
      <Route
        path={AppRoutes.CreateTeamsRequests}
        element={<CreateTeamsRequests />}
      />
      <Route
        path={AppRoutes.PlayersSearch}
        element={<div>PlayersSearch</div>}
      />
      <Route
        path={AppRoutes.TeamSearch}
        element={<div>TeamSearch</div>}
      />

    </Route>

    <Route path="*" element={<Login />} />
  </Routes>
);
