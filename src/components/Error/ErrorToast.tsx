"use client";

import { useEffect, useState } from "react";
import { XCircle } from "lucide-react";

interface ErrorToastProps {
  message: string;
}

export default function ErrorToast({ message }: ErrorToastProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-6 right-6 z-50 animate-slide-in">
      <div className="flex items-center gap-3 bg-error text-white px-4 py-3 rounded-lg shadow-lg">
        <XCircle className="w-6 h-6" />
        <span>{message}</span>
      </div>
    </div>
  );
}
