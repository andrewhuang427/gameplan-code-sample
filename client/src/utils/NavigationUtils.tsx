import { UserType } from "../__generated__/graphql";

export const getUserTypePath = (userType?: UserType | null) => {
  switch (userType) {
    case UserType.Team:
      return "/team";
    case UserType.Organization:
      return "/organization";
    case UserType.Player:
      return "/player";
    default:
      return "/";
  }
};
