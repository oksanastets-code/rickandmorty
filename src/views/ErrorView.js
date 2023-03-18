import { useRouteError } from 'react-router-dom';

export const ErrorView = () => {
  const error = useRouteError();
  
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, something went wrong</p>
      <p><i>{error.statusText || error.message}</i></p>
    </div>
  );
};
