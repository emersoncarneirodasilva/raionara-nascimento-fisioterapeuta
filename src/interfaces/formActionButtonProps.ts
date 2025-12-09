import { ReactNode } from "react";

export interface FormActionButtonProps {
  text: string | ReactNode;
  loadingText?: string | ReactNode;
  className?: string;
}
