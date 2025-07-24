// Color palette for title text
export const titleColors = [
  'text-pink-400',
  'text-purple-400',
  'text-blue-400',
  'text-green-400',
  'text-yellow-400',
  'text-orange-400',
  'text-cyan-400',
  'text-red-400',
  'text-fuchsia-400',
  'text-emerald-400',
];

// Hash function to pick a color index based on the title
export function getColorClass(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return titleColors[Math.abs(hash) % titleColors.length];
} 