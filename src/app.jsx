import { Toaster } from "@/components/ui/toaster";
import { HashRouter, Route, Routes } from "react-router-dom";
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import Home from '@/pages/Home';
import Studio42 from '@/pages/Studio42';
import IndigoAssessment from '@/pages/IndigoAssessment';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/studio-42" element={<Studio42 />} />
      <Route path="/indigo-assessment" element={<IndigoAssessment />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <AppRoutes />
      <Toaster />
    </HashRouter>
  );
}

export default App