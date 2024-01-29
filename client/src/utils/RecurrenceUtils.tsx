import {
  startOfDay,
  addDays,
  getDay,
  differenceInDays,
  startOfMonth,
} from "date-fns";
import { RecurrencePattern } from "../__generated__/graphql";
import { isNil } from "lodash";

export type RecurrencePatternOption = {
  label: string;
  pattern: RecurrencePattern;
};

export const recurrencePatterns: RecurrencePatternOption[] = [
  { label: "One-Time", pattern: RecurrencePattern.OneTime },
  { label: "Weekly", pattern: RecurrencePattern.Weekly },
  { label: "Bi-Weekly", pattern: RecurrencePattern.BiWeekly },
  { label: "Monthly", pattern: RecurrencePattern.Monthly },
];

export const stringToRecurrencePattern = (value: string): RecurrencePattern => {
  switch (value) {
    case RecurrencePattern.OneTime:
      return RecurrencePattern.OneTime;
    case RecurrencePattern.Weekly:
      return RecurrencePattern.Weekly;
    case RecurrencePattern.BiWeekly:
      return RecurrencePattern.BiWeekly;
    default:
      return RecurrencePattern.Monthly;
  }
};

export type RecurrenceDetailOption = {
  label: string;
  value: string;
};

export const recurrenceDetailDays: RecurrenceDetailOption[] = [
  { label: "Mon", value: "1" },
  { label: "Tue", value: "2" },
  { label: "Wed", value: "3" },
  { label: "Thu", value: "4" },
  { label: "Fri", value: "5" },
  { label: "Sat", value: "6" },
  { label: "Sun", value: "7" },
];

interface RecurrenceDate {
  recurrenceDate: Date;
}

export function getRecurrenceDates(
  startDate: Date,
  endDate: Date,
  recurrencePattern: RecurrencePattern,
  recurrenceDetail: string
): RecurrenceDate[] {
  const result: RecurrenceDate[] = [];
  let currentDate = startOfDay(startDate);

  while (currentDate <= endDate) {
    const isRecurrentDate = checkRecurrence(
      startDate,
      currentDate,
      recurrencePattern,
      recurrenceDetail
    );
    isRecurrentDate && result.push({ recurrenceDate: new Date(currentDate) });
    currentDate = addDays(currentDate, 1);
  }

  return result;
}

function checkRecurrence(
  startDate: Date,
  date: Date,
  recurrencePattern: RecurrencePattern,
  recurrenceDetail: string
): boolean {
  switch (recurrencePattern) {
    case RecurrencePattern.OneTime:
      return true;
    case RecurrencePattern.Weekly:
      return recurrenceDetail.includes(getDay(date).toString());
    case RecurrencePattern.BiWeekly:
      return checkBiWeeklyRecurrence(startDate, date, recurrenceDetail);
    case RecurrencePattern.Monthly:
      return checkMonthlyRecurrence(date, recurrenceDetail);
    default:
      return false;
  }
}

function checkBiWeeklyRecurrence(
  startDate: Date,
  date: Date,
  recurrenceDetail: string
): boolean {
  const daysDifference = differenceInDays(date, startOfDay(startDate));
  const currentWeekNumber = Math.floor(daysDifference / 7) + 1;
  const isValidWeek = currentWeekNumber % 2 !== 0;
  const isValidDay = recurrenceDetail.includes(getDay(date).toString());
  return isValidWeek && isValidDay;
}

function checkMonthlyRecurrence(date: Date, recurrenceDetail: string): boolean {
  const monthlyRecurrenceDetail = getMonthlyRecurrenceDetail(date);
  return monthlyRecurrenceDetail.recurrenceDetail === recurrenceDetail;
}

export function getMonthlyRecurrenceDetail(date: Date) {
  let currentDate = startOfMonth(date);
  const dayOfWeek = getDay(date);
  let occurrence = 0;

  while (currentDate <= date) {
    const isValidDayOfWeek = getDay(currentDate) === dayOfWeek;
    isValidDayOfWeek && occurrence++;
    currentDate = addDays(currentDate, 1);
  }

  return {
    occurrence,
    dayOfWeek,
    recurrenceDetail: `${occurrence}-${dayOfWeek}`,
  };
}

export function getMonthlyRecurrenceString(recurrenceDetail: string) {
  const [occurrence, dayOfWeek] = recurrenceDetail.split("-");
  if (isNil(occurrence) || isNil(dayOfWeek)) {
    return null;
  }
  const ordinalValue = getOrdinal(Number(occurrence));
  const dayString = getDayString(Number(dayOfWeek));
  if (ordinalValue == null || dayString == null) {
    return;
  }
  return `${ordinalValue} ${dayString} of each month`;
}

export function getDayString(num: number): string | null {
  switch (num) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return null;
  }
}

const getOrdinal = (value: number) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = value % 100;
  return value + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
};
