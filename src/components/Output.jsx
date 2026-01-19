// src/components/Output.jsx
import { motion } from 'framer-motion';

export default function Output({ history }) {
  return (
    <div className="flex flex-col gap-2">
      {history.map((entry, index) => (
        <div key={index} className="flex flex-col gap-1 mb-2">
          {/* Command Prompt Line */}
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-green-500">divyanshu@portfolio:~$</span>
            <span className="text-white">{entry.command}</span>
          </div>
          
          {/* Command Output */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.1 }}
            className="ml-0 md:ml-4 text-gray-300"
          >
            {entry.output}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
