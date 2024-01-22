import './App.css';
import 'aos/dist/aos.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Assignments from './components/Assignments';


function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />
    },
    {
      path: '/assignments',
      element: <Assignments />
    }
  ])

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
