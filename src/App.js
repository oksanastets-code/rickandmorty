import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './views/Layout';
import  { HomeView, charactersLoader } from './views/HomeView';
import FilteredView from './views/FilteredView';
import CharacterDetailsView from './views/CharacterDetailsView';
import { ErrorView } from './views/ErrorView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorView />,
    children: [
      {
        element: <HomeView />,
        index: true,
        errorElement: <ErrorView />,
        loader: charactersLoader,
      },
      {
        path: '/filtered',
        element: <FilteredView />,
        errorElement: <ErrorView />,
      },
      {
        path: '/:id',
        element: <CharacterDetailsView />,
        errorElement: <ErrorView />,
      },
    ],
  },
]);

export const App = () => (
  <RouterProvider router={router} fallbackElement={<>LOADING!!!</>} />
);
