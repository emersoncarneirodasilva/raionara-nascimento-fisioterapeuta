"use client";

import { useFormStatus } from "react-dom";
import { FormActionButtonProps } from "@/src/interfaces";

export default function FormActionButton({
  text,
  loadingText = "Aguarde...",
  className = "",
}: FormActionButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${className} ${
        pending ? "animate-pulse cursor-not-allowed opacity-80" : ""
      } transition-all duration-200`}
    >
      {pending ? loadingText : text}
    </button>
  );
}
