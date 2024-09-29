import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// pages
import Home from './pages/Home';
import Feature from './pages/Feature';
import Careers from './pages/Careers';
import WinLose from './pages/WinLose';
import Shortfilms from './pages/Shortfilms';
import Technology from './pages/Technology';
import Extras from './pages/Extras';
import About from './pages/About';
import Success from './pages/Success';

// styles
import './sass/main.scss';

// layouts
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="feature" element={<Feature />} />
      <Route path="careers-at-pixar" element={<Careers />} />
      <Route path="winlose" element={<WinLose />} />
      <Route path="shortfilms" element={<Shortfilms />} />
      <Route path="technology" element={<Technology />} />
      <Route path="extras" element={<Extras />} />
      <Route path="about" element={<About />} />
      <Route path="success" element={<Success />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
