import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
       <ReactQueryDevtools initialIsOpen={false} />
        <Toaster richColors position="top-right" />
    </QueryClientProvider>
  </StrictMode>,
)
