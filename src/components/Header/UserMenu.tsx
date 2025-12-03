import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  // Abre ao passar o mouse
  const handleMouseEnter = () => {
    setOpen(true);
  };

  // Fecha somente quando clicar fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const menu = document.getElementById("user-menu-container");
      if (menu && !menu.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/";
  };

  return (
    <div
      id="user-menu-container"
      className="relative"
      onMouseEnter={handleMouseEnter}
    >
      {/* Perfil vira Link */}
      <Link
        href="/perfil"
        className="hover:text-(--color-secondary-hover) cursor-pointer"
      >
        Perfil
      </Link>

      {/* Dropdown */}
      {open && (
        <div
          className="
          absolute left-0 mt-2 flex flex-col 
          rounded-md py-2 w-44 z-50 shadow-lg border
          bg-(--surface) dark:bg-(--surface-alt)
          border-(--color-secondary)/30
        "
        >
          <Link
            href="/notificacoes"
            className="
            px-4 py-2 text-sm 
            text-(--foreground) 
            hover:bg-(--color-secondary-hover)/15 
            cursor-pointer
          "
            onClick={() => setOpen(false)}
          >
            Notificações
          </Link>

          <Link
            href="/agendamentos"
            className="
            px-4 py-2 text-sm 
            text-(--foreground)
            hover:bg-(--color-secondary-hover)/15 
            cursor-pointer
          "
            onClick={() => setOpen(false)}
          >
            Agendamentos
          </Link>

          <button
            onClick={logout}
            className="
            px-4 py-2 text-left w-full text-sm 
            text-(--color-error) 
            hover:bg-(--color-error)/10 
            cursor-pointer
          "
          >
            Sair
          </button>
        </div>
      )}
    </div>
  );
}
