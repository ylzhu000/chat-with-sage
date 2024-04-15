import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ChatRoute from './pages/ChatRoute';
import NotFound from './pages/NotFound';
import AppLayout from './components/AppLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="chat" />} />
          <Route path="chat" element={<ChatRoute />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
