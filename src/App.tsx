
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FacultyPage from "./pages/FacultyPage";
import AboutPage from "./pages/AboutPage";
import CurriculumPage from "./pages/CurriculumPage";
import SyllabusPage from "./pages/SyllabusPage";
import EventsPage from "./pages/EventsPage";
import CommunityPage from "./pages/CommunityPage";
import StatsPage from "./pages/StatsPage";
import RegisterPage from "./pages/RegisterPage";
import ElementsPage from "./pages/ElementsPage";
import TemplatesPage from "./pages/TemplatesPage";
import LoginPage from "./pages/LoginPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/people/faculty" element={<FacultyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics/curriculum" element={<CurriculumPage />} />
          <Route path="/academics/syllabus" element={<SyllabusPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/events/register" element={<RegisterPage />} />
          <Route path="/elements" element={<ElementsPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
