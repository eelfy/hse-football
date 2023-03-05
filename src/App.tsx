import { Route, Routes } from 'react-router-dom';

export const App = () => (
  <Routes>
    <Route path="*" element={<h1>not found</h1>} />
  </Routes>
);
