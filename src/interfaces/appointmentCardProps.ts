export interface AppointmentCardProps {
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
