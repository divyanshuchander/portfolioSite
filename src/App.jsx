// src/App.jsx
import { useState } from 'react';
import Terminal from './components/Terminal';
import BootSequence from './components/BootSequence';

function App() {
  // Start with boot sequence active
  const [booting, setBooting] = useState(true);

  return (
    <>
      {booting ? (
        <BootSequence onComplete={() => setBooting(false)} />
      ) : (
        <Terminal />
      )}
    </>
  );
}

export default App;
