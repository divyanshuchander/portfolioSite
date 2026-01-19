// src/components/CommandInput.jsx
import { useEffect, useRef, useState } from 'react';

export default function CommandInput({ onCommand, history }) {
  const [input, setInput] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);

  // Auto-focus input on mount and keep focus
  useEffect(() => {
    inputRef.current?.focus();
    
    const handleGlobalClick = () => inputRef.current?.focus();
    document.addEventListener('click', handleGlobalClick);
    
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onCommand(input);
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      // Navigate history up
      if (history.length > 0) {
        const newIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        const historyCommand = history[history.length - 1 - newIndex].command;
        setInput(historyCommand);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      // Navigate history down
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        const historyCommand = history[history.length - 1 - newIndex].command;
        setInput(historyCommand);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="flex items-center gap-2 w-full">
      <span className="text-green-500 whitespace-nowrap">divyanshu@portfolio:~$</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-transparent border-none outline-none text-white w-full font-mono text-base caret-terminal-accent"
        autoComplete="off"
        spellCheck="false"
        autoFocus
      />
    </div>
  );
}
