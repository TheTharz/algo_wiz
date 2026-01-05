import { useState } from 'react';
import ArrayBars from './components/ArrayBars';
import { sortingAlgorithms, type SortingAlgorithmName } from './utils/algorithms';
import './App.css';

function App() {
  const [array, setArray] = useState<number[]>([]);
  const [comparing, setComparing] = useState<number[]>([]);
  const [swapped, setSwapped] = useState<number[]>([]);
  const [metadata, setMetadata] = useState<any>({});
  const [isSorting, setIsSorting] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<SortingAlgorithmName>('Bubble Sort');
  const [arraySize, setArraySize] = useState(50);
  const [speed, setSpeed] = useState(50);

  const generateArray = () => {
    const newArray = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 100) + 1);
    setArray(newArray);
    setComparing([]);
    setSwapped([]);
    setMetadata({});
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
        setMetadata(value.metadata || {});
        setTimeout(animate, 101 - speed);
      } else {
        setIsSorting(false);
      }
    };
    
    animate();
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Sorting Visualizer</h1>
        <p className="subtitle">Watch algorithms come to life</p>
      </header>
      
      <div className="controls-container">
        <div className="control-group">
          <label htmlFor="algorithm-select">Algorithm</label>
          <select 
            id="algorithm-select"
            value={selectedAlgorithm} 
            onChange={(e) => setSelectedAlgorithm(e.target.value as SortingAlgorithmName)}
            disabled={isSorting}
          >
            {Object.keys(sortingAlgorithms).map(algo => (
              <option key={algo} value={algo}>{algo}</option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="size-slider">Array Size: {arraySize}</label>
          <input 
            id="size-slider"
            type="range" 
            min="10" 
            max="100" 
            value={arraySize}
            onChange={(e) => setArraySize(Number(e.target.value))}
            disabled={isSorting}
          />
        </div>

        <div className="control-group">
          <label htmlFor="speed-slider">Speed: {speed}%</label>
          <input 
            id="speed-slider"
            type="range" 
            min="1" 
            max="100" 
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            disabled={isSorting}
          />
        </div>

        <div className="button-group">
          <button className="btn btn-generate" onClick={generateArray} disabled={isSorting}>
            Generate New Array
          </button>
          <button className="btn btn-sort" onClick={startSorting} disabled={isSorting || array.length === 0}>
            Start Sorting
          </button>
        </div>
      </div>

      <div className="main-content">
        <ArrayBars array={array} comparing={comparing} swapped={swapped} />
        
        <div className="state-panel">
          <h3>Current State</h3>
          <div className="state-info">
            <div className="state-item">
              <span className="state-label">Algorithm:</span>
              <span className="state-value">{selectedAlgorithm}</span>
            </div>
            <div className="state-item">
              <span className="state-label">Status:</span>
              <span className={`state-value ${isSorting ? 'active' : ''}`}>
                {isSorting ? 'Sorting...' : 'Ready'}
              </span>
            </div>
            <div className="state-item">
              <span className="state-label">Array Size:</span>
              <span className="state-value">{array.length}</span>
            </div>
            {metadata.currentPass !== undefined && (
              <div className="state-item">
                <span className="state-label">Pass:</span>
                <span className="state-value">
                  {metadata.currentPass} / {metadata.totalPasses}
                </span>
              </div>
            )}
            {metadata.minIndex !== undefined && (
              <div className="state-item">
                <span className="state-label">Min Index:</span>
                <span className="state-value">{metadata.minIndex}</span>
              </div>
            )}
            {metadata.sortedUpTo !== undefined && (
              <div className="state-item">
                <span className="state-label">Sorted Up To:</span>
                <span className="state-value">{metadata.sortedUpTo}</span>
              </div>
            )}
            <div className="state-item">
              <span className="state-label">Comparing:</span>
              <span className="state-value">
                {comparing.length > 0 ? `[${comparing.join(', ')}]` : 'None'}
              </span>
            </div>
            <div className="state-item">
              <span className="state-label">Swapped:</span>
              <span className="state-value">
                {swapped.length > 0 ? `[${swapped.join(', ')}]` : 'None'}
              </span>
            </div>
            {metadata.message && (
              <div className="state-item">
                <span className="state-label">Message:</span>
                <span className="state-value state-message">{metadata.message}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;