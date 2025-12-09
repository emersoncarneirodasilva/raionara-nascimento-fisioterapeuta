"use client";

import { ReactNode, useState } from "react";

interface ActionButtonProps {
  href: string; // '#servicos' ou '/servicos#servicos'
  text: string | ReactNode;
  className?: string;
}

export default function ActionButton({
  href,
  text,
  className = "",
}: ActionButtonProps) {
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    // feedback imediato
    setPressed(true);
    setTimeout(() => setPressed(false), 120);

    // ✅ extrai apenas o hash
    let hash = "";
    if (href.includes("#")) {
      hash = "#" + href.split("#")[1];
    }

    // ✅ se NÃO tiver hash → navegação normal
    if (!hash) {
      window.location.href = href;
      return;
    }

    // ✅ scroll para seção
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${className} transition-all ${
        pressed ? "scale-95 opacity-90" : ""
      }`}
    >
      {text}
    </button>
  );
}
