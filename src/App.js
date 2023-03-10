import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './views/Layout';
import HomeView from './views/HomeView';
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
