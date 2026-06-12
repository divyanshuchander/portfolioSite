// src/App.jsx
import { useTheme } from './hooks/useTheme';
import Navbar from './components/layout/Navbar';
import BentoGrid from './components/layout/BentoGrid';

function App() {
  const { theme, toggle } = useTheme();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)' }}>
      <Navbar theme={theme} onToggle={toggle} />
      <BentoGrid />
    </div>
  );
}

export default App;
