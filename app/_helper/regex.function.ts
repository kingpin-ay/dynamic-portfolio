export function traceRouteAfterSlashUser(url: string): string | null {
  // finds whatever comes after the (/user/[user_name]/ ... <- )
  const effectiveRegex = "/user/[^/]+/([^/]+)";
  const match = url.match(effectiveRegex);
  if (match) {
    return match[1];
  } else {
    return null;
  }
}
