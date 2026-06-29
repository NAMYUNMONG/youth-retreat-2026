import { useEffect } from "react";

type ToastProps = {
  message: string;
  onClose: () => void;
};

export function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    if (!message) return;
    const timer = window.setTimeout(onClose, 2400);
    return () => window.clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div className={`toast ${message ? "toast--show" : ""}`} role="status" aria-live="polite">
      {message}
    </div>
  );
}
