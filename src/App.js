import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  { HomeView } from './views/HomeView';
import CharacterDetailsView, { characterByIdLoader } from './views/CharacterDetailsView';
import { ErrorView } from './views/ErrorView';

const router = createBrowserRouter([
 
      {
        path: '/',
        element: <HomeView />,
        errorElement: <ErrorView />,
      },
      {
        path: '/:id',
        element: <CharacterDetailsView />,
        errorElement: <ErrorView />,
        loader: characterByIdLoader,
      },
]);

export const App = () => (
  <RouterProvider router={router} fallbackElement={<>LOADING!!!</>} />
);
