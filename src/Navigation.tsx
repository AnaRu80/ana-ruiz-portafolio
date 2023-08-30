import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  AboutPage,
  HomePage,
  NotFoundPage,
  ProjectsPage,
  ResumePage,
} from './pages';
import { Layout } from './components';
const Navigation = () => {

  return (

    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/resume' element={<ResumePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='*' element={<NotFoundPage />} />{' '}
        </Routes>
      </Layout>
    </Router>


  );
};

export default Navigation;
