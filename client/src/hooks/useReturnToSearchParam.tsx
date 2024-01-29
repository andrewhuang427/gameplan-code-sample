import { useSearchParams } from "next/navigation";

export const useReturnToSearchParam = () => {
  const searchParams = useSearchParams();

  return searchParams.get("returnTo");
};
