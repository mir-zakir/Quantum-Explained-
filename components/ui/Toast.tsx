
import React, { useEffect } from 'react';
import { Info } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] px-6 py-4 glass border-sky-500/30 rounded-2xl flex items-center gap-3 text-sky-400 font-medium shadow-2xl animate-slide-up">
      <Info size={20} />
      <span>{message}</span>
    </div>
  );
};

export default Toast;
