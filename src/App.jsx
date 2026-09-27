import { useState, useCallback } from 'react';
import Scene from './components/Scene.jsx';
import LeftPanel from './components/LeftPanel.jsx';
import LayersPanel from './components/LayersPanel.jsx';
import RightPanel from './components/RightPanel.jsx';

const DEFAULT_BOX_SIZE = { width: 1, height: 1, depth: 1 };

function App() {
  const [objects, setObjects] = useState([
    {
      id: 1,
      name: 'Box',
      type: 'Mesh',
      meshSize: { width: 1, height: 1, depth: 1 },
      transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      material: { color: 0x0f3460 },
      visible: true,
      locked: false,
    },
  ]);

  const [selectedObjectId, setSelectedObjectId] = useState(1);

  // Add new object
  const addObject = useCallback((typeId = 'box') => {
    const newId = Math.max(...objects.map(o => o.id)) + 1;
    const newObject = {
      id: newId,
      name: typeId === 'box' ? 'Box' : typeId,
      type: 'Mesh',
      meshSize: { ...DEFAULT_BOX_SIZE },
      transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      material: { color: 0x0f3460 },
      visible: true,
      locked: false,
    };
    setObjects([...objects, newObject]);
    setSelectedObjectId(newId);
  }, [objects]);

  // Update object property
  const updateObjectProperty = useCallback((objectId, property, value) => {
    setObjects(objects.map(obj => {
      if (obj.id === objectId) {
        return { ...obj, [property]: value };
      }
      return obj;
    }));
  }, [objects]);

  // Toggle visibility
  const toggleVisibility = useCallback((objectId) => {
    setObjects(objects.map(obj => {
      if (obj.id === objectId) {
        return { ...obj, visible: !obj.visible };
      }
      return obj;
    }));
  }, [objects]);

  // Toggle lock
  const toggleLock = useCallback((objectId) => {
    setObjects(objects.map(obj => {
      if (obj.id === objectId) {
        return { ...obj, locked: !obj.locked };
      }
      return obj;
    }));
  }, [objects]);

  // Get selected object
  const selectedObject = objects.find(obj => obj.id === selectedObjectId);

  return (
    <div className="w-full h-screen bg-gray-900 overflow-hidden relative">
      {/* Scene - behind all panels */}
      <div className="w-full h-full absolute inset-0 z-0">
        <Scene />
      </div>
      
      {/* Left Panel */}
      <LeftPanel onAddObject={addObject} />
      
      {/* Layers Panel */}
      <LayersPanel 
        objects={objects} 
        selectedObjectId={selectedObjectId}
        onSelectObject={setSelectedObjectId}
        onToggleVisibility={toggleVisibility}
        onToggleLock={toggleLock}
        onUpdateProperty={updateObjectProperty}
      />
      
      {/* Right Panel */}
      <RightPanel 
        object={selectedObject}
        onObjectChange={updateObjectProperty}
      />
    </div>
  );
}

export default App;
