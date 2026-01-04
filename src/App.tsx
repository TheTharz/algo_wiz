import { useEffect, useState } from 'react'
import './App.css'
import ArrayBars from './components/ArrayBars'
import { useArray } from './hooks/useArray'
import { bubbleSortVisualize, type AnimationStep } from './utils/algorithms/bubbleSort'

function App() {
  const {array,generateNewArray} = useArray(50);
  const [currentState,setCurrentState] = useState<AnimationStep>({
    array:[],
    comparing:[],
    swapped:[]
  });

  const [isAnimating,setIsAnimating] = useState(false);

  const startVisualization = async () => {
    setIsAnimating(true);

    const generator = bubbleSortVisualize(array);

    for (const step of generator){
      setCurrentState(step);
      await new Promise((resolve)=>setTimeout(resolve,10));
    }

    setIsAnimating(false);
  };

  const handleGenerateNewArray = () => {
    if(isAnimating) return;
    generateNewArray();
    setCurrentState({
      array:array,
      comparing:[],
      swapped:[]
    });
  };

  // Set initial array on mount
  useEffect(() => {
    setCurrentState({
      array: array,
      comparing: [],
      swapped: []
    });
  }, [array]);


  return (
    <div className="app">
      <h1>Sorting Visualizer</h1>
      <ArrayBars 
        array={currentState.array} 
        comparing={currentState.comparing}
        swapped={currentState.swapped}
      />
      <button onClick={handleGenerateNewArray} disabled={isAnimating}>
        Generate New Array
      </button>
      <button onClick={startVisualization} disabled={isAnimating}>
        {isAnimating ? 'Sorting...' : 'Start Bubble Sort'}
      </button>
    </div>
  );
}

export default App;
