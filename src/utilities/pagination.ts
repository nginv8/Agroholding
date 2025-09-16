export function parsePageNumber(pageNumber: string): number | null {
  const parsed = parseInt(pageNumber, 10);
  return isNaN(parsed) || parsed < 1 ? null : parsed;
}
