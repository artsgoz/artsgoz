import type { RouteObject } from 'react-router';
import { PATHS } from '../paths';
import FormsPage from './pages/FormsPage';

export const formsRoutes: RouteObject[] = [
  {
    path: PATHS.FORMS,
    element: <FormsPage />,
  },
];
