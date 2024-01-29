import { CampFragment } from "../__generated__/graphql";

const campComparator = (t1: CampFragment, t2: CampFragment) => {
  const t1Start = new Date(t1.startDate);
  const t2Start = new Date(t2.startDate);

  return t1Start.valueOf() - t2Start.valueOf();
};

export const getRenderedCamps = (
  camps: CampFragment[],
  isUpcoming: boolean
) => {
  const currentDateValue = new Date().valueOf();

  const filteredCamps = camps.filter((c) => {
    const endDate = new Date(c.endDate);
    const endDateValue = endDate.valueOf();
    return isUpcoming
      ? endDateValue >= currentDateValue
      : endDateValue < currentDateValue;
  });

  return filteredCamps.sort(campComparator);
};
