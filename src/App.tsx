import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HomeRegist from "./pages/registration/homeregist";
import HomeIndo from "./pages/registration/homeIndo";
import HomeInter from "./pages/registration/homeInter";
import IndonesiaOnline from "./pages/registration/indo-online";
import IndonesiaOffline from "./pages/registration/indo-offline";
import InternationalOnline from "./pages/registration/inter-online";
import InternationalOffline from "./pages/registration/inter-offline";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/homeregist" element={<HomeRegist />} />
          <Route path="/homeindo" element={<HomeIndo />} />
          <Route path="/indo-online" element={<IndonesiaOnline />} />
          <Route path="/indo-offline" element={<IndonesiaOffline />} />
          <Route path="/homeinter" element={<HomeInter />} />
          <Route path="/inter-online" element={<InternationalOnline />} />
          <Route path="/inter-offline" element={<InternationalOffline />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
