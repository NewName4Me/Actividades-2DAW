import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import Home from "./views/Home.jsx";
import Details from "./views/Details.jsx";
import UseQueryExperiment from "./views/UseQueryExperiment.jsx";
import Navigation from "./components/Navigation.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
   <QueryClientProvider client={queryClient}>
      <BrowserRouter>
         <Navigation />

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/useQueryExperiment" element={< UseQueryExperiment />} />
         </Routes>
      </BrowserRouter>
   </QueryClientProvider>
);
