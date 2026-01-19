// src/utils/commands.jsx

export const commands = {
  help: {
    description: 'List available commands',
    execute: () => (
      <div className="flex flex-col gap-2 animate-in fade-in duration-300">
        <div className="text-terminal-accent mb-2 glow-text">Available commands:</div>
        <div className="grid grid-cols-[120px_1fr] gap-2 text-sm md:text-base">
          <span className="text-cyan-400 font-bold">about</span>
          <span className="text-gray-300">System Information (Bio)</span>
          
          <span className="text-cyan-400 font-bold">skills</span>
          <span className="text-gray-300">Load Modules (Tech Stack)</span>
          
          <span className="text-cyan-400 font-bold">projects</span>
          <span className="text-gray-300">View Repositories</span>
          
          <span className="text-cyan-400 font-bold">resume</span>
          <span className="text-gray-300">Download Data Log (CV)</span>
          
          <span className="text-cyan-400 font-bold">contact</span>
          <span className="text-gray-300">Establish Connection</span>
          
          <span className="text-cyan-400 font-bold">clear</span>
          <span className="text-gray-300"> cls </span>
        </div>
      </div>
    ),
  },
  
  about: {
    description: 'Who I am',
    execute: () => (
      <div className="flex flex-col md:flex-row gap-6 animate-in slide-in-from-left-4 duration-500 items-start">
        <div className="flex-1 flex flex-col gap-4">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Divyanshu Chander
          </div>
          <div className="flex flex-col gap-3 leading-relaxed text-gray-300">
            <p>
              <span className="text-terminal-accent">&gt;</span> CS Student @ Jaypee University of Information Technology (2022-2026)
            </p>
            <p>
              I am a Full Stack Developer & Cybersecurity Enthusiast who enjoys experimenting with technology. 
              My work bridges the gap between secure backend systems and responsive frontends.
            </p>
            <p className="border-l-2 border-purple-500 pl-3 italic text-gray-400">
              "I enjoy low-level details, clean abstractions, and learning how things actually work."
            </p>
            <div className="flex gap-2 mt-2">
               <span className="bg-gray-800 px-2 py-1 rounded text-xs text-cyan-300">#FullStack</span>
               <span className="bg-gray-800 px-2 py-1 rounded text-xs text-purple-300">#DevOps</span>
               <span className="bg-gray-800 px-2 py-1 rounded text-xs text-green-300">#Cybersecurity</span>
            </div>
          </div>
        </div>

        {/* Profile Image with Terminal Styling */}
        <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 border-2 border-dashed border-gray-700 p-1 rounded-lg hover:border-cyan-500 transition-colors duration-300 relative group">
           <img 
              src="/profile.png" 
              alt="Divyanshu Chander"
              className="w-full h-full object-cover rounded grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            />
           <div className="absolute -bottom-6 left-0 w-full text-center text-xs text-gray-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              [IMG-LOADED]
           </div>
        </div>
      </div>
    ),
  },
  
  skills: {
    description: 'Tech stack',
    execute: () => (
      <div className="flex flex-col gap-4 animate-in fade-in duration-500">
        <div className="text-terminal-accent glow-text">System Modules Loaded:</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <div className="text-xs text-gray-500 mb-1 border-b border-gray-800 pb-1">LANGUAGES</div>
                <div className="grid grid-cols-2 gap-2">
                    {['C / C++', 'Java', 'Python', 'JavaScript'].map(s => (
                        <div key={s} className="flex items-center gap-2">
                            <span className="text-green-500">✓</span> {s}
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
                 <div className="text-xs text-gray-500 mb-1 border-b border-gray-800 pb-1">TOOLS & FRAMEWORKS</div>
                 <div className="grid grid-cols-2 gap-2">
                    {['Git / GitHub', 'Docker', 'MySQL', 'Burp Suite'].map(s => (
                        <div key={s} className="flex items-center gap-2">
                            <span className="text-purple-400">⚡</span> {s}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="col-span-1 md:col-span-2">
                 <div className="text-xs text-gray-500 mb-1 border-b border-gray-800 pb-1">CORE COMPETENCIES</div>
                 <div className="flex flex-wrap gap-2">
                     {['Web Development', 'Blockchain', 'Cybersecurity', 'Data Structures', 'Algorithms'].map(s => (
                         <span key={s} className="px-2 py-1 bg-gray-900 border border-gray-700 rounded text-sm text-cyan-200 hover:border-cyan-500 transition-colors cursor-default">
                             {s}
                         </span>
                     ))}
                 </div>
            </div>
        </div>
      </div>
    ),
  },
  
  projects: {
    description: 'View specific project',
    execute: () => (
      <div className="flex flex-col gap-6 animate-in slide-in-from-bottom-4 duration-500">
        <div className="text-terminal-accent glow-text">Featured Executables:</div>
        
        <div className="group border border-gray-800 p-4 rounded bg-gray-900/40 hover:bg-gray-900/60 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-cyan-400 font-bold text-lg group-hover:text-cyan-300">AutoNotes</h3>
            <span className="text-xs border border-green-500/50 text-green-400 px-2 py-0.5 rounded bg-green-500/10">2025</span>
          </div>
          <div className="mb-2 text-xs text-gray-500 font-mono">STACK: Python, Flask, React, MLX Whisper, Ollama</div>
          <p className="mb-3 text-gray-300 leading-snug">
            AI Media Summarization Tool. Generates concise summaries from YouTube videos and local files using optimized local LLMs.
            Accelerated transcription speed by 50%.
          </p>
          <a href="#" className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors">
             &gt; Execute demo <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>
        </div>

        <div className="group border border-gray-800 p-4 rounded bg-gray-900/40 hover:bg-gray-900/60 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-cyan-400 font-bold text-lg group-hover:text-cyan-300">eVault</h3>
            <span className="text-xs border border-blue-500/50 text-blue-400 px-2 py-0.5 rounded bg-blue-500/10">2023</span>
          </div>
          <div className="mb-2 text-xs text-gray-500 font-mono">STACK: Solidity, Truffle, Web3.js, IPFS</div>
          <p className="mb-3 text-gray-300 leading-snug">
            Blockchain Storage Network. Decentralized storage solution on Sepolia testnet using smart contracts and IPFS for secure, distributed content storage.
          </p>
          <a href="#" className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors">
            &gt; View Contract <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>
        </div>
        
        <div className="text-xs text-gray-500 italic">
          More projects available on GitHub...
        </div>
      </div>
    ),
  },
  
  contact: {
    description: 'Contact info',
    execute: () => (
      <div className="flex flex-col gap-2 animate-in fade-in duration-300">
        <div className="text-terminal-accent glow-text">Initialize Handshake:</div>
        <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
          <span className="text-purple-400 font-bold">Email</span>
          <a href="mailto:divyanshuchander23@gmail.com" className="hover:text-cyan-400 transition-colors">divyanshuchander23@gmail.com</a>
          
          <span className="text-purple-400 font-bold">GitHub</span>
          <a href="https://www.github.com/divyanshuchander" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">github.com/divyanshuchander</a>
          
          <span className="text-purple-400 font-bold">LinkedIn</span>
          <a href="https://www.linkedin.com/in/divyanshuchander" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">linkedin.com/in/divyanshuchander</a>
        </div>
      </div>
    ),
  },

  resume: {
     description: "Download CV",
     execute: () => (
         <div className="animate-pulse">
             <div className="mb-2 text-green-400">Fetching Resume Data... [100%]</div>
             <a href="/resume.pdf" target="_blank" className="text-cyan-400 hover:text-cyan-300 underline font-bold text-lg">
                 &gt; DOWNLOAD RESUME.PDF
             </a>
         </div>
     )
  }
};

export const getCommandOutput = (cmd, args) => {
    const commandBase = cmd.trim().toLowerCase();
    
    if (commandBase === '') return null;
    
    if (commands[commandBase]) {
        return commands[commandBase].execute(args);
    }
    
    // Check for "Did you mean?"
    const availableCommands = Object.keys(commands);
    let suggestion = null;
    let minDistance = 3; // Tolerance

    const levenshtein = (a, b) => {
      const matrix = [];
      for (let i = 0; i <= b.length; i++) matrix[i] = [i];
      for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

      for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
          if (b.charAt(i - 1) == a.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(
              matrix[i - 1][j - 1] + 1,
              Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
            );
          }
        }
      }
      return matrix[b.length][a.length];
    };

    availableCommands.forEach(c => {
        const distance = levenshtein(commandBase, c);
        if (distance < minDistance) {
            minDistance = distance;
            suggestion = c;
        }
    });

    return (
        <div className="text-terminal-error font-bold flex flex-col gap-1">
            <span>ERROR: Command '{cmd}' not recognized. Type 'help' for protocol list.</span>
            {suggestion && (
                <span className="text-gray-400 font-normal">
                    Did you mean <span className="text-cyan-400 italic">'{suggestion}'</span>?
                </span>
            )}
        </div>
    );
};
