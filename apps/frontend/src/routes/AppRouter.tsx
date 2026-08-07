import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from '../layouts/MainLayout.js';
import { aboutRoutes } from './about/aboutRoutes.js';
import { homeRoutes } from './home/homeRoutes.js';
import { creditTrackingRoutes } from './credit-tracking/creditTrackingRoutes.js';
import { professorsRoutes } from './professors/professorsRoutes.js';
import { studentServicesRoutes } from './student-services/studentServicesRoutes.js';
import { formsRoutes } from './forms/formsRoutes.js';
import { curriculumRoutes } from './curriculum/curriculumRoutes.js';
import { internshipsRoutes } from './internships/internshipsRoutes.js';
import { articlesRoutes } from './articles/articlesRoutes.js';
import { clubsRoutes } from './clubs/clubsRoutes.js';
import { helpRoutes } from './help/helpRoutes.js';
import { PATHS } from './paths.js';
import YellowCardBackofficePage from './forms/pages/YellowCardBackofficePage.js';

const router = createBrowserRouter([
  {
    path: PATHS.ROOT,
    element: <MainLayout />,
    children: [
      ...homeRoutes,
      ...aboutRoutes,
      ...creditTrackingRoutes,
      ...professorsRoutes,
      ...studentServicesRoutes,
      ...formsRoutes,
      ...curriculumRoutes,
      ...internshipsRoutes,
      ...articlesRoutes,
      ...clubsRoutes,
      ...helpRoutes,
    ],
  },
  {
    path: PATHS.YELLOW_CARD_BACKOFFICE,
    element: <YellowCardBackofficePage />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
