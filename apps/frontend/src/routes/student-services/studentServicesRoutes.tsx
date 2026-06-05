import type { RouteObject } from 'react-router';
import { PATHS } from '../paths';
import StudentServicesPage from './pages/StudentServicesPage';

export const studentServicesRoutes: RouteObject[] = [
  {
    path: PATHS.STUDENT_SERVICES,
    element: <StudentServicesPage />,
  },
];
