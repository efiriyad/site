export const useServerFetch = async (path, options) => {
  const config = useRuntimeConfig();

  return await useFetch(`${config.public.apiBase}${path}`, options);
};
