import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IframeA from './Iframes/IframeA';
import IframeB from './Iframes/IframeB';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IframeA />,
  },
  {
    path: 'iframeB',
    element: <IframeB />,
  },
]);
const App: React.FC = () => {
  return (
    <div className='container mx-auto'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
