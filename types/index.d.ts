declare module 'open-utils-lib' {
  /** Capitalize the first character of a string */
  export function capitalize(str: string): string;
  
  /** Truncate a string to maxLength, appending '...' if truncated */
  export function truncate(str: string, maxLength: number): string;
  
  /** Clamp a number between min and max (inclusive) */
  export function clamp(value: number, min: number, max: number): number;
  
  /** Generate a random integer between min and max (inclusive) */
  export function random(min: number, max: number): number;
}