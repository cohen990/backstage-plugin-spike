import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { structurizrArchitecturePlugin, StructurizrArchitecturePage } from '../src/plugin';

createDevApp()
  .registerPlugin(structurizrArchitecturePlugin)
  .addPage({
    element: <StructurizrArchitecturePage />,
    title: 'Root Page',
    path: '/structurizr-architecture'
  })
  .render();
