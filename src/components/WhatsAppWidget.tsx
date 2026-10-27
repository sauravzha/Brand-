import { useState } from "react";
import { MessageSquare, Phone, Copy, Check, X, Sparkles, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "9288419270";
const FORMATTED_PHONE = "+91 92884 19270";
const PREFILLED_MESSAGE = encodeURIComponent(
  "Hi BrandYatra! I'd like to discuss scaling my brand with your websites, ads, and AI automation."
);
const WHATSAPP_URL = `https://wa.me/91${WHATSAPP_NUMBER}?text=${PREFILLED_MESSAGE}`;

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(WHATSAPP_URL);
    setCopied(true);
    toast.success("WhatsApp chat link copied!", {
      description: "Direct connection to BrandYatra Growth Desk",
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto select-none">
      {/* Skeuomorphic & Claymorphic Quick-Action Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(6px)" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="mb-3.5 w-[320px] sm:w-[350px] skeuo-hardware-card rounded-2xl p-5 shadow-2xl border border-white/20 backdrop-blur-2xl overflow-hidden"
          >
            {/* Top Metallic Specular Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 opacity-90 shadow-sm" />

            {/* Header: Skeuomorphic Status Bar with Hardware LED */}
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="skeuo-led-green animate-pulse" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-foreground font-poppins tracking-tight">
                      BrandYatra Direct Desk
                    </span>
                    <span className="clay-badge text-[9px] px-1.5 py-0.2 font-extrabold text-emerald-400 border border-emerald-500/30">
                      LIVE
                    </span>
                  </div>
                  <p className="text-[10px] text-muted-foreground font-light">
                    Online • Typical reply under 15 mins
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full neumorphic-well flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close WhatsApp card"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Recessed Neumorphic LCD Display Strip */}
            <div className="mt-3.5 p-3 rounded-xl neumorphic-well flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
                  Official Communication Channel
                </p>
                <p className="text-sm font-bold text-foreground font-poppins tracking-wide flex items-center gap-1.5">
                  <span className="text-emerald-400">⚡</span>
                  <span>Direct WhatsApp Channel</span>
                </p>
              </div>

              <button
                onClick={handleCopy}
                className="px-2.5 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-foreground flex items-center gap-1 transition-all active:scale-95"
                title="Copy WhatsApp link"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[10px] text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-[10px]">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Skeuomorphic Hardware Action Buttons */}
            <div className="mt-4 space-y-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="skeuo-btn-emerald w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-wider shadow-lg group cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Open WhatsApp Chat</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={`tel:+91${WHATSAPP_NUMBER}`}
                className="w-full py-2.5 px-4 rounded-xl glass-card-3d border border-white/10 hover:border-primary/50 text-foreground/90 hover:text-foreground text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>Direct Voice Support Call</span>
              </a>
            </div>

            <p className="mt-3 text-[10px] text-center text-muted-foreground font-light">
              Direct founder & growth engineering team line.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Puffy 3D Claymorphic Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08, y: -3 }}
        whileTap={{ scale: 0.94 }}
        className="clay-whatsapp relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-white cursor-pointer group shadow-2xl"
        aria-label="Contact BrandYatra on WhatsApp"
      >
        {/* Glowing Pulsing Outer Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 blur-md opacity-75 group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none" />

        {/* WhatsApp Icon */}
        <div className="relative z-10 flex items-center justify-center">
          {isOpen ? (
            <X className="w-7 h-7 text-white drop-shadow-md" />
          ) : (
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          )}
        </div>

        {/* Unread Message Pill / Badge */}
        {!isOpen && (
          <span className="absolute -top-1.5 -left-1.5 clay-badge px-2 py-0.5 text-[10px] font-black bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md border border-white/40 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            <span>Chat</span>
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;
