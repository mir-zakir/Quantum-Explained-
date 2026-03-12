
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import EbookSection from './components/EbookSection';
import StoreSection from './components/StoreSection';
import InstagramFeed from './components/InstagramFeed';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import QuantumSimulation from './components/QuantumSimulation';
import ListingPage from './pages/ListingPage';
import DetailPage from './pages/DetailPage';
import NotFound from './pages/NotFound';
import { PRODUCTS, EBOOKS, COURSES, RESOURCES } from './data/mockData';
import { ComplexityProvider } from './context/ComplexityContext';

const Home: React.FC = () => (
  <Layout>
    <Hero />
    <FeatureGrid />
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-sky-500 text-xs font-bold uppercase tracking-[0.4em] mb-4">Interactive Lab</div>
        <h2 className="text-4xl font-bold text-center">Experimental Sector</h2>
      </div>
      <QuantumSimulation />
    </div>
    <EbookSection />
    <StoreSection />
    <InstagramFeed />
    <div className="container mx-auto px-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12"></div>
    <Testimonials />
    <Newsletter />
  </Layout>
);

const App: React.FC = () => {
  return (
    <ComplexityProvider>
      <Router>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Home />} />

          {/* Store Routes */}
          <Route path="/store" element={
            <ListingPage 
              type="store"
              title="Cosmic Laboratory"
              subtitle="Premium scientific equipment and aesthetic research tools."
              items={PRODUCTS}
              basePath="/store"
            />
          } />
          <Route path="/store/:id" element={<DetailPage type="store" />} />

          {/* Ebook Routes */}
          <Route path="/ebooks" element={
            <ListingPage 
              type="ebooks"
              title="The Singularity Archive"
              subtitle="High-density visual handbooks for the digital age."
              items={EBOOKS}
              basePath="/ebooks"
            />
          } />
          <Route path="/ebooks/:id" element={<DetailPage type="ebooks" />} />

          {/* Course Routes */}
          <Route path="/courses" element={
            <ListingPage 
              type="courses"
              title="Knowledge Transfer"
              subtitle="Intensive accelerators for aspiring researchers and engineers."
              items={COURSES}
              basePath="/courses"
            />
          } />
          <Route path="/courses/:id" element={<DetailPage type="courses" />} />

          {/* Resource Routes */}
          <Route path="/resources" element={
            <ListingPage 
              type="resources"
              title="Experimental Tools"
              subtitle="Datasets, simulators, and cheat sheets for independent study."
              items={RESOURCES}
              basePath="/resources"
            />
          } />
          <Route path="/resources/:id" element={<DetailPage type="resources" />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ComplexityProvider>
  );
};

export default App;
