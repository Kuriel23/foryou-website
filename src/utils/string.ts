export function reduceString(str: string, maxLength = 20): string {
  return `${str.slice(0, maxLength)}${str.length > maxLength ? '...' : ''}`;
}
