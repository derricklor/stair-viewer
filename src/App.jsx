import { useState, useCallback } from 'react';
import Scene from './components/Scene.jsx';
import LeftPanel from './components/LeftPanel.jsx';
import LayersPanel from './components/LayersPanel.jsx';
import RightPanel from './components/RightPanel.jsx';

// Default sizes for different component types
const DEFAULT_SIZE = {
  box: { width: 1, height: 1, depth: 1 },
  riser: { width: 1, height: 1, depth: 0.5 },
  tread: { width: 1, height: 0.5, depth: 1 },
};

// Get default size for a type
const getDefaultSize = (typeId) => DEFAULT_SIZE[typeId] || DEFAULT_SIZE.box;

// Get name for a type
const getTypeName = (typeId) => {
  const names = { box: 'Box', riser: 'Riser', tread: 'Tread' };
  return names[typeId] || 'Box';
};

// Get last object of a specific type
const getLastOfType = (objects, typeId) => {
  const typeObjects = objects.filter(obj => obj.name === getTypeName(typeId));
  return typeObjects.length > 0 ? typeObjects[typeObjects.length - 1] : null;
};

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

  // Add new object with type-specific defaults and offset logic
  const addObject = useCallback((typeId = 'box') => {
    const newId = Math.max(...objects.map(o => o.id)) + 1;
    const size = getDefaultSize(typeId);

    if (objects.length === 0) {
      const newObject = {
        id: newId,
        name: getTypeName(typeId),
        type: 'Mesh',
        meshSize: size,
        transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        material: { color: 0x0f3460 },
        visible: true,
        locked: false,
      };
      setObjects([...objects, newObject]);
      setSelectedObjectId(newId);
      return;
    }

    // Get last object of the same type for offset calculation
    const lastOfType = getLastOfType(objects, typeId);
    const newObject = {
      id: newId,
      name: getTypeName(typeId),
      type: 'Mesh',
      meshSize: size,
      // Offset logic: different for box, riser, and tread
      transform: {
        position: [
          // X position stays at 0 (no offset in width direction)
          0,
          // Y position: offset by height for box and riser (vertical stacking)
          (lastOfType?.transform.position[1] || 0) + size.height,
          // Z position: offset by depth for box and tread (horizontal stacking)
          (lastOfType?.transform.position[2] || 0) + size.depth,
        ],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      },
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

  // delete object
    const deleteObject = useCallback((objectId) => {
        setObjects(objects.filter(obj => obj.id !== objectId));
    }, [objects]);

  // Get selected object
  const selectedObject = objects.find(obj => obj.id === selectedObjectId);

  return (
    <div className="w-full h-screen bg-gray-900 overflow-hidden relative">
      {/* Scene - behind all panels */}
      <div className="w-full h-full absolute inset-0 z-0">
        <Scene objects={objects} />
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
        onDeleteObject={deleteObject}
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
