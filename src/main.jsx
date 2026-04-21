import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import ServicesPage from './pages/ServicePage.jsx';
import ResourcesPage from './pages/ResourcesPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import SupportPage from './pages/SupportPage.jsx';
import AppointmentPage from './pages/AppointmentPage.jsx';
import NewsletterPage from './pages/NewsLetter.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // The default page (homepage)
        element: <HomePage />, // If the path is exactly "/" render the HomePage component
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "support",
        element: <SupportPage />,
      },
      {
        path: "resources",
        element: <ResourcesPage />,
      },
      {
        path: "faq",
        element: <FAQPage />
      },
      {
        path: "team/:activeTab?",
        element: <TeamPage />, // If the path is "/team/{activeTab}" then render the specific TeamPage component
      },
      {
        path: "appointment",
        element: <AppointmentPage />
      },
      {
        path: "newsletter",
        element: <NewsletterPage />
      },
      {
        path: "events",
        element: <EventsPage />
      },
      {
        path: "*",
        element: (
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-6">Page Not Found</h2>
            <p className="text-gray-500 mb-8 max-w-md">
              Oops! The page you are looking for doesn't exist or has been moved.
            </p>
            <a 
              href="/" 
              className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors"
            >
              Go Back Home
            </a>
          </div>
        )
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);