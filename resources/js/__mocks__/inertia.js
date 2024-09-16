import React from 'react';

// Mock Inertia Provider
export const InertiaApp = ({ children }) => <>{children}</>;
export const createInertiaApp = ({ resolveComponent }) => {
  return {
    resolveComponent,
  };
};

// Mock route function
export const route = (name) => {
  const routes = {
    'api.contacts.create': '/api/contacts',
  };
  
  return routes[name] || '/';
};
