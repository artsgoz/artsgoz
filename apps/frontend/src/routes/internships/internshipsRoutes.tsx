import type { RouteObject } from 'react-router';
import { PATHS } from '../paths';
import InternshipsPage from './pages/InternshipsPage';

export const internshipsRoutes: RouteObject[] = [
  {
    path: PATHS.INTERNSHIPS,
    element: <InternshipsPage />,
  },
];
