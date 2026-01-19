// src/components/Terminal.jsx
import { useState, useRef, useEffect } from 'react';
import CommandInput from './CommandInput';
import Output from './Output';
import { getCommandOutput } from '../utils/commands';
import BackgroundEffect from './BackgroundEffect';

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const bottomRef = useRef(null);

  const handleCommand = (cmd) => {
    if (!cmd.trim()) {
       setHistory(prev => [...prev, { command: '', output: null }]);
       return;
    }

    if (cmd.trim().toLowerCase() === 'clear') {
      setHistory([]);
      return;
    }

    const output = getCommandOutput(cmd);
    setHistory(prev => [...prev, { command: cmd, output }]);
  };

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <>
      <BackgroundEffect />
      <div className="scanlines"></div>
      
      <div className="h-screen w-full flex items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-black/90 backdrop-blur-md border border-gray-800 rounded-lg shadow-2xl overflow-hidden flex flex-col h-[80vh] md:h-[700px] relative">
          
          {/* Terminal Window Header */}
          <div className="h-8 bg-gray-900 border-b border-gray-800 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="ml-4 text-xs text-gray-400 font-mono">divyanshu@portfolio:~</div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-6 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
             {/* Welcome Message */}
             {history.length === 0 && (
               <div className="mb-6 opacity-80 animate-in fade-in duration-1000">
                 <pre className="text-[10px] md:text-sm leading-none text-terminal-accent mb-4 font-bold hidden md:block">
{`
  ____  _                               _           
 |  _ \\(_)_  ___   _  __ _ _ __   ___| |__  _   _ 
 | | | | \\ \\ / / | | |/ _\` | '_ \\ / __| '_ \\| | | |
 | |_| | |\\ V /| |_| | (_| | | | |\\__ \\ | | | |_| |
 |____/|_| \\_/  \\__, |\\__,_|_| |_||___/_| |_|\\__,_|
                |___/                                
   ____ _                     _           
  / ___| |__   __ _ _ __   __| | ___ _ __ 
 | |   | '_ \\ / _\` | '_ \\ / _\` |/ _ \\ '__|
 | |___| | | | (_| | | | | (_| |  __/ |   
  \\____|_| |_|\\__,_|_| |_|\\__,_|\\___|_|   
`}
                 </pre>
                 <div className="mb-2 text-cyan-200">System Ready. Warning: High Tech Levels Detected.</div>
                 <div>Type <span className="text-white font-bold bg-gray-800 px-1 rounded">'help'</span> to see available commands.</div>
               </div>
             )}
             
             <Output history={history} />
             
             <div className="mt-2">
               <CommandInput onCommand={handleCommand} history={history} />
             </div>
             
             <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </>
  );
}
