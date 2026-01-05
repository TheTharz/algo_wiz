import { bubbleSortVisualize } from "./bubbleSort";
import { selectionSortVisualize } from "./selectionSort";

export { SortStep } from './types';

export const sortingAlgorithms = {
  "Bubble Sort": bubbleSortVisualize,
  "Selection Sort": selectionSortVisualize
} as const;

export type SortingAlgorithmName = keyof typeof sortingAlgorithms;