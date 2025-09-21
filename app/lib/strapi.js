export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

async function fetchFromStrapi(path, { nextOptions } = {}) {
  const url = `${STRAPI_URL}${path}`;
  const res = await fetch(url, { next: nextOptions, cache: 'no-store' });
  if (!res.ok) throw new Error(`Strapi error ${res.status}`);
  return res.json();
}

export async function getProjects() {
  try {
    const data = await fetchFromStrapi('/api/projects?populate=cover,category,hls');
    return data?.data || [];
  } catch {
    return [];
  }
}

export async function getProjectById(id) {
  try {
    const data = await fetchFromStrapi(`/api/projects/${id}?populate=gallery,hls,credits`);
    return data?.data || null;
  } catch {
    return null;
  }
}

export async function getServices() {
  try {
    const data = await fetchFromStrapi('/api/services');
    return data?.data || [];
  } catch { return []; }
}

export async function getArticles() {
  try {
    const data = await fetchFromStrapi('/api/articles');
    return data?.data || [];
  } catch { return []; }
}

export async function getArticleById(id) {
  try {
    const data = await fetchFromStrapi(`/api/articles/${id}`);
    return data?.data || null;
  } catch { return null; }
}


