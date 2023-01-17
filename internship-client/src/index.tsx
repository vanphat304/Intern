import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routers from './routers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppStore } from './store/appStore';
import { AuthAppStore } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SearchAppStore } from './store/searchStore';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <AppStore.Provider>
        <AuthAppStore.Provider>
          <SearchAppStore.Provider>
            <ToastContainer />
            <Routers />
          </SearchAppStore.Provider>
        </AuthAppStore.Provider>
      </AppStore.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
