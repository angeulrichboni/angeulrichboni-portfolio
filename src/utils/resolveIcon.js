export const resolveIcon = (url) =>
    url.startsWith('http') ? url : `${import.meta.env.BASE_URL}${url.replace(/^\//, '')}`;  