export function assetUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized.slice(1)}`;
}
