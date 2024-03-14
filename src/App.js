import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ProjectList from './components/ProjectList';
import GanttChart from './components/GanttChart';
import GanttDetails from './components/GanttDetails';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<GanttChart />} />
          <Route path="projects" element={<ProjectList />} />
          <Route path="gantt-details" element={<GanttDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
