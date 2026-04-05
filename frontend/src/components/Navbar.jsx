import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Zap, Menu, X, Binary } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/[0.05] bg-obsidian/60 backdrop-blur-3xl transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3 font-black text-2xl tracking-tighter cursor-pointer group">
          <div className="p-2 bg-electric-blue rounded-xl group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-electric-blue/40">
            <Zap className="text-white fill-white" size={20} />
          </div>
          <span className="text-gradient-premium select-none">
            NEOSCAN
          </span>
          <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/40 tracking-widest font-black uppercase">V.4</span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          <SignedOut>
            <div className="flex items-center gap-8">
              <a href="#how-it-works" className="text-[10px] font-black text-white/30 hover:text-electric-blue transition-colors uppercase tracking-[0.3em]">Operational Flow</a>
              <a href="#features" className="text-[10px] font-black text-white/30 hover:text-electric-blue transition-colors uppercase tracking-[0.3em]">Rubric V4</a>
            </div>
            <div className="h-4 w-px bg-white/10 mx-4" />
          </SignedOut>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-8 py-3 bg-white text-black font-black text-[10px] tracking-[0.2em] rounded-full hover:bg-electric-blue hover:text-white transition-all shadow-xl hover:shadow-electric-blue/30 active:scale-95 uppercase">
                Initialize Login
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,1)]" />
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.3em]">Access Authorized</span>
               </div>
               <div className="p-1 rounded-full border border-white/[0.08] hover:border-electric-blue transition-all duration-500">
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </SignedIn>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button className="md:hidden text-white/50 hover:text-white transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-0 w-full bg-obsidian border-b border-white/[0.05] p-8 flex flex-col gap-8 shadow-2xl backdrop-blur-3xl"
          >
            <SignedOut>
              <a href="#how-it-works" className="text-sm font-black text-white/40 uppercase tracking-[0.3em]" onClick={() => setIsOpen(false)}>Operational Flow</a>
              <a href="#features" className="text-sm font-black text-white/40 uppercase tracking-[0.3em]" onClick={() => setIsOpen(false)}>Rubric V4</a>
              <SignInButton mode="modal">
                <button className="w-full py-5 bg-white text-black font-black text-sm tracking-[0.2em] rounded-2xl active:scale-95 uppercase">
                  Initialize Login
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
               <div className="flex items-center justify-between p-6 bg-white/[0.03] border border-white/[0.08] rounded-[2rem]">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Session Identity</span>
                    <span className="font-black italic tracking-tighter">SECURELY_LOGGED_IN</span>
                  </div>
                  <UserButton afterSignOutUrl="/" />
               </div>
            </SignedIn>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
