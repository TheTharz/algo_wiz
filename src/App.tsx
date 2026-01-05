import { useState } from 'react';
import ArrayBars from './components/ArrayBars';
import { sortingAlgorithms, SortingAlgorithmName } from './utils/algorithms';
import './App.css';

function App() {
  const [array, setArray] = useState<number[]>([]);
  const [comparing, setComparing] = useState<number[]>([]);
  const [swapped, setSwapped] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<SortingAlgorithmName>('Bubble Sort');

  const generateArray = () => {
    const newArray = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100) + 1);
    setArray(newArray);
    setComparing([]);
    setSwapped([]);
  };

  const startSorting = () => {
    setIsSorting(true);
    const sortFunction = sortingAlgorithms[selectedAlgorithm];
    const generator = sortFunction(array);
    
    const animate = () => {
      const { value, done } = generator.next();
      
      if (!done && value) {
        setArray(value.array);
        setComparing(value.comparing);
        setSwapped(value.swapped);
        setTimeout(animate, 50);
      } else {
        setIsSorting(false);
      }
    };
    
    animate();
  };

  return (
    <div className="app">
      <h1>Sorting Algorithm Visualizer</h1>
      <div className="controls">
        <select 
          value={selectedAlgorithm} 
          onChange={(e) => setSelectedAlgorithm(e.target.value as SortingAlgorithmName)}
          disabled={isSorting}
        >
          {Object.keys(sortingAlgorithms).map(algo => (
            <option key={algo} value={algo}>{algo}</option>
          ))}
        </select>
        <button onClick={generateArray} disabled={isSorting}>Generate Array</button>
        <button onClick={startSorting} disabled={isSorting || array.length === 0}>
          Sort
        </button>
      </div>
      <ArrayBars array={array} comparing={comparing} swapped={swapped} />
    </div>
  );
}

export default App;