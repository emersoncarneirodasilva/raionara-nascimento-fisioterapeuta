"use client";

import { useEffect, useState } from "react";

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
    <div className="fixed top-6 right-6 z-50 px-4 py-3 rounded-lg shadow-lg bg-error text-white animate-slide-in">
      {message}
    </div>
  );
}
