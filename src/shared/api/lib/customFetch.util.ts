// const basePath = 'http://hse-football.ru/api/Administration/adminadmin';
// const basePath = 'http://localhost:8080';
const basePath = 'http://185.246.66.29/api/Administration/adminadmin';

export const customFetch = <T>(
  url: string,
  params?:RequestInit,
): Promise<T> => fetch(`${basePath}/${url}`, {
    ...params,
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
