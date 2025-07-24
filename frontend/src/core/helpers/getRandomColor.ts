
// Helper to generate a random pastel color
export function getRandomColor(idx: number) {
    const pastelColors = [
      '#D946EF', '#A21CAF', '#B45309', '#A16207', '#059669', '#0891B2', '#2563EB', '#F59E42', '#F472B6', '#60A5FA', '#34D399', '#FBBF24'
    ];
    return pastelColors[idx % pastelColors.length];
  }