import type { RouteObject } from 'react-router';
import { PATHS } from '../paths.js';
import ArticlesPage from './pages/ArticlesPage.js';

export const articlesRoutes: RouteObject[] = [
  {
    path: PATHS.ARTICLES,
    element: <ArticlesPage />,
  },
];
