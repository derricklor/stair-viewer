import Scene from './components/Scene.jsx';
import LeftPanel from './components/LeftPanel.jsx';
import LayersPanel from './components/LayersPanel.jsx';
import RightPanel from './components/RightPanel.jsx';

function App() {
  return (
    <div className="w-full h-screen bg-gray-900 overflow-hidden">
      <LeftPanel />
      <LayersPanel />
      <div className="w-full h-full">
        <Scene />
      </div>
      <RightPanel />
    </div>
  );
}

export default App;
