"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";

interface SuccessToastAutoRedirectProps {
  href: string;
}

export default function SuccessToastAutoRedirect({
  href,
}: SuccessToastAutoRedirectProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const success = searchParams.get("success");

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        router.push(href);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success, router]);

  if (!success) return null;

  return (
    <div className="fixed top-20 right-5 z-50 animate-slide-in">
      <div className="flex items-center gap-3 bg-success text-white px-4 py-3 rounded-lg shadow-lg">
        <CheckCircle className="w-6 h-6" />
        <span>{success}</span>
      </div>
    </div>
  );
}
