export const useRedirectAndRefresh = () => {
  const handleRedirect = (pathName: string) => {
    window.location.replace(`${window.location.origin}${pathName}`);
  };

  return handleRedirect;
};
