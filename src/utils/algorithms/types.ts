export interface SortStep {
  array: number[];
  comparing: number[];
  swapped: number[];
  metadata?: {
    currentPass?: number;
    totalPasses?: number;
    minIndex?: number;
    pivotIndex?: number;
    sortedUpTo?: number;
    message?: string;
    [key: string]: any;
  };
}