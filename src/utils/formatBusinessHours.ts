import { BusinessHour } from "../lib/api/fetchBusinessHours";
import { weekDaysMap } from "./weekdayMap";

export function formatBusinessHours(businessHours: BusinessHour[]) {
  return businessHours
    .sort((a, b) => a.weekday - b.weekday)
    .map((item) => ({
      ...item,
      weekdayName: weekDaysMap[item.weekday],
    }));
}
