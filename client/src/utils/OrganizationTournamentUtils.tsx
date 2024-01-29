import { TournamentFragment } from "../__generated__/graphql";

const tournamentComparator = (
  t1: TournamentFragment,
  t2: TournamentFragment
) => {
  const t1Start = new Date(t1.startDate);
  const t2Start = new Date(t2.startDate);

  return t1Start.valueOf() - t2Start.valueOf();
};

export const getRenderedTournaments = (
  tournaments: TournamentFragment[],
  isUpcoming: boolean
) => {
  const currentDateValue = new Date().valueOf();

  const filteredTournaments = tournaments.filter((t) => {
    const endDate = new Date(t.endDate);
    const endDateValue = endDate.valueOf();
    return isUpcoming
      ? endDateValue >= currentDateValue
      : endDateValue < currentDateValue;
  });

  return filteredTournaments.sort(tournamentComparator);
};

export const sortTournamentsByDate = (tournaments: TournamentFragment[]) => {
  return tournaments.sort(tournamentComparator);
};
