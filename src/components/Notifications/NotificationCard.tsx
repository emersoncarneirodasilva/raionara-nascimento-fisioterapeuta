"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import {
  UserNotification,
  statusTextMap,
} from "@/src/lib/api/fetchMyNotifications";
import { formatHours } from "@/src/utils/formatHours";

export default function NotificationCard({
  notification,
}: {
  notification: UserNotification;
}) {
  const [isRead, setIsRead] = useState(notification.isRead);
  const appointment = notification.appointment;

  async function markAsRead() {
    try {
      setIsRead(true);

      const res = await fetch(`/api/notifications/${notification.id}/read`, {
        method: "PATCH",
      });

      if (!res.ok) throw new Error("Erro ao marcar como lida");
    } catch (err) {
      console.error("Erro ao marcar como lida:", err);
      setIsRead(false);
    }
  }

  return (
    <div
      className={`p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4 max-w-4xl mx-auto transition ${
        isRead ? "opacity-80" : ""
      }`}
    >
      {/* Mensagem */}
      <p className="text-foreground text-lg font-medium">
        {notification.message}
      </p>

      {/* Data de recebimento */}
      <p className="text-sm text-muted-foreground">
        Recebida em:{" "}
        {new Date(notification.createdAt).toLocaleString("pt-BR", {
          dateStyle: "short",
          timeStyle: "short",
        })}
      </p>

      {/* Informações do agendamento ou snapshot */}
      {appointment && (
        <div className="pt-4 space-y-3 border-t border-border">
          <p className="text-sm">
            <span className="text-muted-foreground">Status: </span>
            <span className="font-medium">
              {statusTextMap[appointment.status] || appointment.status}
            </span>
          </p>

          <p className="text-sm">
            <span className="text-muted-foreground">Data/Hora: </span>
            <span className="font-medium">
              {formatHours(appointment.scheduledAt)}
            </span>
          </p>

          {appointment.services?.map((s, index) => (
            <div key={index} className="text-sm space-y-1">
              <p>
                <span className="text-muted-foreground">Serviço: </span>
                <span className="font-medium">{s.service.name}</span>
              </p>
              <p>
                <span className="text-muted-foreground">Profissional: </span>
                <span className="font-medium">{s.professional.name}</span>
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Rodapé do card */}
      <div className="flex items-center justify-between pt-3 border-t border-border">
        {appointment && (
          <Link
            href={`/agendamentos`}
            className="text-sm text-primary hover:underline"
          >
            Ver agendamento
          </Link>
        )}

        {isRead ? (
          <div className="flex items-center gap-2 text-green-600 font-medium">
            <Check className="h-5 w-5" />
            Lida
          </div>
        ) : (
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              className="h-5 w-5 cursor-pointer accent-primary"
              checked={false}
              onChange={markAsRead}
            />
            Marcar como lida
          </label>
        )}
      </div>
    </div>
  );
}
