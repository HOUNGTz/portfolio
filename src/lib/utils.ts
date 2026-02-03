const isProd = process.env.GITHUB_ACTIONS === 'true';
const basePath = isProd ? '/portfolio' : '';

export function getAssetPath(path: string): string {
  // If path already starts with http or https, return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}

export { basePath };
