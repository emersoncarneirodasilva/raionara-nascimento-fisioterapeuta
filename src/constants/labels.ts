export const APPOINTMEN_STATUS_LABELS: Record<string, string> = {
  PENDING: "Pendente",
  CONFIRMED: "Confirmado",
  CANCELED: "Cancelado",
  COMPLETED: "Concluído",
};

export const PAYMENT_STATUS_LABELS: Record<string, string> = {
  PENDING: "Pendente",
  PAID: "Pago",
  REFUNDED: "Reibolsado",
  PARTIALLY_PAID: "Parcialmente Pago",
};

export const STATUS_STYLES: Record<string, { bg: string; text: string }> = {
  PENDING: { bg: "bg-yellow-100", text: "text-yellow-800" },
  CONFIRMED: { bg: "bg-green-100", text: "text-green-800" },
  CANCELED: { bg: "bg-red-100", text: "text-red-800" },
  COMPLETED: { bg: "bg-green-100", text: "text-green-800" },
};

export const PAYMENT_METHODS: Record<string, string> = {
  "A VISTA": "À vista",
  "CARTAO DE CREDITO": "Cartão de crédito",
  "CARTAO DE DEBITO": "Cartão de débito",
  PIX: "Pix",
  BOLETO: "Boleto",
};
