import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './views/Layout';
import  { HomeView, charactersLoader } from './views/HomeView';
// import FilteredView, {filteredLoader} from './views/FilteredView';
import CharacterDetailsView, { characterByIdLoader } from './views/CharacterDetailsView';
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
        // loader: charactersLoader,
      },
      {
        path: '/:id',
        element: <CharacterDetailsView />,
        errorElement: <ErrorView />,
        loader: characterByIdLoader,
      },
    ],
  },
]);

export const App = () => (
  <RouterProvider router={router} fallbackElement={<>LOADING!!!</>} />
);
