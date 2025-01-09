import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { SearchContextProvider } from './context/search.context';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SearchContextProvider>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </SearchContextProvider>
  </React.StrictMode>
);
