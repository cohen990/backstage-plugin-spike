import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const structurizrArchitecturePlugin = createPlugin({
  id: 'structurizr-architecture',
  routes: {
    root: rootRouteRef,
  },
});

export const StructurizrArchitecturePage = structurizrArchitecturePlugin.provide(
  createRoutableExtension({
    name: 'StructurizrArchitecturePage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
