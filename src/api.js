import qs from "qs";

export async function apiFetch(url, options = null) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  return fetch(url, mergedOptions).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(
      `Error fetching page data: ${res.statusText} (${res.status})}`
    );
  });
}

export async function getHeros(query = null) {
  const params = {
    locale: undefined,
    draft: false,
    depth: 1,
    ...query,
  };

  const stringifiedQuery = qs.stringify(params, { addQueryPrefix: true });

  const data = await apiFetch(
    `${import.meta.env.API_BASE_URL}/api/hero${stringifiedQuery}`
  )

  return data
}