// src/components/BootSequence.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const bootLines = [
  "BIOS CHECK... OK",
  "LOADING KERNEL IMAGE...",
  "MOUNTING ROOT FILESYSTEM [RO]...",
  "INIT: ENTERING RUNLEVEL 3",
  "STARTING NETWORK INTERFACES... [ETH0 UP]",
  "ESTABLISHING SECURE CONNECTION...",
  "ACCESS GRANTED: USER 'DIVYANSHU'",
  "LOADING SHELL ENVIRONMENT...",
  "SYSTEM READY."
];

export default function BootSequence({ onComplete }) {
  const [lines, setLines] = useState([]);
  
  useEffect(() => {
    let delay = 0;
    
    bootLines.forEach((line, index) => {
      // Much faster, "hacker" speed
      const lineDelay = Math.random() * 150 + 50;
      delay += lineDelay;
      
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        
        if (index === bootLines.length - 1) {
          setTimeout(onComplete, 600);
        }
      }, delay);
    });
  }, [onComplete]);

  return (
    <div className="font-mono text-sm md:text-base text-gray-400 p-4 md:p-8 max-w-3xl mx-auto h-screen flex flex-col justify-end pb-20 md:justify-start md:pt-20 bg-black">
      <div className="fixed inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }}></div>
      
      {lines.map((line, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.1 }}
          className="mb-1 text-green-500/80 font-bold tracking-wider"
        >
          <span className="text-cyan-500 mr-2">[{ (i * 0.13 + 12.4).toFixed(6) }]</span>
          {line}
        </motion.div>
      ))}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.2 }} // Fast blink
        className="text-terminal-accent mt-2 h-6 w-3 bg-terminal-accent"
      >
      </motion.div>
    </div>
  );
}
