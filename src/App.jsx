import { useState } from 'react';
import Scene from './components/Scene.jsx';
import LeftPanel from './components/LeftPanel.jsx';
import LayersPanel from './components/LayersPanel.jsx';
import RightPanel from './components/RightPanel.jsx';

function App() {
  const [boxDimensions, setBoxDimensions] = useState({
    width: 1,
    height: 1,
    depth: 1,
  });

  const handleBoxSizeChange = (newDimensions) => {
    setBoxDimensions(newDimensions);
  };

  return (
    <div className="w-full h-screen bg-gray-900 overflow-hidden relative">
      {/* Scene - behind all panels */}
      <div className="w-full h-full absolute inset-0 z-0">
        <Scene boxSize={boxDimensions} />
      </div>
      
      {/* Left Panel */}
      <LeftPanel boxSize={boxDimensions} />
      
      {/* Layers Panel */}
      <LayersPanel boxSize={boxDimensions} onBoxSizeChange={handleBoxSizeChange} />
      
      {/* Right Panel */}
      <RightPanel />
    </div>
  );
}

export default App;
