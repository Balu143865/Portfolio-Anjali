import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollProgressBar from './components/ScrollProgressBar';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Admin = lazy(() => import('./pages/Admin'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-900">
      <ScrollProgressBar />
      <Navbar />
      
      <main className="flex-grow">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;