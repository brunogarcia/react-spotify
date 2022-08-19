/**
 * Format milliseconds to time duration
 *
 * @param {number} ms number of milliseconds
 * @returns {string} formatted duration string
 * @example
 * // returns '3:36'
 * formatDuration(216699)
 */
 const formatDuration = (ms: number): string => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor(((ms % 60000) / 1000));
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export  default formatDuration;
