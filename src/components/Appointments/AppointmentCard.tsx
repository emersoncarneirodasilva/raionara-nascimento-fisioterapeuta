import { normalizePaymentMethod } from "@/src/utils/normalizePaymentMethod";
import { formatDate } from "@/src/utils/formatDate";
import { formatTime } from "@/src/utils/formatTime";
import {
  APPOINTMEN_STATUS_LABELS,
  PAYMENT_METHODS,
  PAYMENT_STATUS_LABELS,
  STATUS_STYLES,
} from "@/src/constants/labels";

interface AppointmentCardProps {
  appointment: {
    id: string;
    status: string;
    scheduledAt: string;
    services: {
      service: {
        name: string;
        duration: number;
      };
    }[];
    payment?: {
      method: string;
      status: string;
    } | null;
  };
}

export default function AppointmentCard({ appointment }: AppointmentCardProps) {
  const serviceItem = appointment.services[0];

  const statusStyle = STATUS_STYLES[appointment.status] ?? {
    bg: "bg-gray-100",
    text: "text-gray-800",
  };

  return (
    <div className="bg-surface rounded-2xl p-6 border border-(--color-secondary) shadow-sm hover:shadow-md transition-shadow">
      <div className="space-y-2 text-foreground text-sm">
        <p>
          <strong>Área de atuação:</strong> {serviceItem?.service.name}
        </p>

        <p>
          <strong>Duração:</strong> {serviceItem?.service.duration} min
        </p>

        <p>
          <strong>Dia:</strong> {formatDate(appointment.scheduledAt)}
        </p>

        <p>
          <strong>Horário:</strong> {formatTime(appointment.scheduledAt)}
        </p>

        {/* Status do agendamento */}
        <div className="flex items-center gap-2">
          <strong>Status:</strong>
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyle.bg} ${statusStyle.text}`}
          >
            {APPOINTMEN_STATUS_LABELS[appointment.status] ?? appointment.status}
          </span>
        </div>

        {/* Pagamento com status */}
        <p>
          <strong>Pagamento:</strong>{" "}
          {appointment.payment
            ? `${
                PAYMENT_METHODS[
                  normalizePaymentMethod(appointment.payment.method)
                ] ?? appointment.payment.method
              }
              ${
                appointment.payment.status
                  ? ` (${
                      PAYMENT_STATUS_LABELS[appointment.payment.status] ??
                      appointment.payment.status
                    })`
                  : ""
              }`
            : "—"}
        </p>
      </div>
    </div>
  );
}
