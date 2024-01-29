import { TournamentRegistrationFragment } from "../__generated__/graphql";

export const sortRegistrationsByDate = (
  registrations: TournamentRegistrationFragment[],
  isUpcoming: boolean
) => {
  const currentDate = new Date().valueOf();
  const dateToRegistrations: {
    [keys: number]: TournamentRegistrationFragment[];
  } = {};

  for (const r of registrations) {
    const startDate = new Date(r.tournament?.startDate).valueOf();
    const endDate = new Date(r.tournament?.endDate).valueOf();

    if (
      (isUpcoming && currentDate < endDate) ||
      (!isUpcoming && currentDate > endDate)
    ) {
      const currentArray = dateToRegistrations[startDate];
      if (currentArray == null) {
        dateToRegistrations[startDate] = [r];
      } else {
        dateToRegistrations[startDate] = [...currentArray, r];
      }
    }
  }
  const dates = Object.keys(dateToRegistrations);
  const sortedKeys = dates.sort();
  return sortedKeys.map((key) => dateToRegistrations[Number(key)]);
};
