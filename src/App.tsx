import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IframeA from './Iframes/IframeA';
import IframeB from './Iframes/IframeB';
import IframeC from './Iframes/IframeC';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IframeA />,
  },
  {
    path: 'iframeB',
    element: <IframeB />,
  },
  {
    path: 'iframeC',
    element: <IframeC />,
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
