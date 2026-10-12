import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ProgramsPage } from '@/pages/ProgramsPage';
import { CoachesPage } from '@/pages/CoachesPage';
import { ContactPage } from '@/pages/ContactPage';

function AppRoutes() {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/coaches" element={<CoachesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
