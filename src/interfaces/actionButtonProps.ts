import { ReactNode } from "react";

export interface ActionButtonProps {
  href: string; // '#servicos' ou '/servicos#servicos'
  text: string | ReactNode;
  className?: string;
}
