import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923205067483"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
        
        {/* Button */}
        <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
          <MessageCircle className="w-7 h-7 text-white" fill="white" />
        </div>

        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-card rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap glass">
        Chat with us
      </div>
    </a>
  );
};

export default WhatsAppButton;
