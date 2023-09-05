import { Routes, Route, useLocation } from 'react-router-dom';

import {
  AboutPage,
  HomePage,
  NotFoundPage,
  ProjectsPage,
  ResumePage,
} from './pages';
import { Layout } from './components';
import { AnimatePresence } from 'framer-motion';
const Navigation = () => {
  const location = useLocation();
  return (

    <Layout>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/resume' element={<ResumePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>


  );
};

export default Navigation;
