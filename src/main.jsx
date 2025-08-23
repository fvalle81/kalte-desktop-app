import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import './styles/App.css';
import './styles/index.css';

// Importa tu ConfigProvider desde la ruta que definiste
import ConfigProvider from './providers/config/configProvider';
import { InspectionsProvider } from './providers/inspections/inspectionsContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
console.log('Inicio de main.jsx - ReactDOM render');
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider>
      <QueryClientProvider client={queryClient}>
        <InspectionsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </InspectionsProvider>
      </QueryClientProvider>
    </ConfigProvider>
  </React.StrictMode>
);
