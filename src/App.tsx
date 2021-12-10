import NavBar from './components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
