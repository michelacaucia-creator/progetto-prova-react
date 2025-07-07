import React, { useEffect } from 'react';

export default function StatusToast({ type, message, onClose }) {
  useEffect(() => {
    if (message && typeof onClose === 'function') {
      const timer = setTimeout(() => {
        onClose();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  const baseStyle = {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '12px 24px',
    borderRadius: '8px',
    color: 'white',
    fontWeight: '600',
    fontSize: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: 10000,
    opacity: 0.9,
    pointerEvents: 'none',
    userSelect: 'none',
  };

  const typeStyles = {
    success: {
      backgroundColor: 'rgba(56, 142, 60, 0.85)', // verde scuro semitrasparente
    },
    failure: {
      backgroundColor: 'rgba(211, 47, 47, 0.85)', // rosso scuro semitrasparente
    },
  };

  return (
    <div style={{ ...baseStyle, ...(typeStyles[type] || {}) }}>
      {message}
    </div>
  );
}
