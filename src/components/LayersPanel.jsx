import { useState } from 'react';
import { IconEye, IconEyeOff, IconLock, IconUnlock, IconLayers, IconTrash2, IconPlus } from './Icon.jsx';

const layerTypes = ['Mesh', 'Light', 'Camera', 'Group'];

function LayersPanel({ 
  objects = [], 
  selectedObjectId,
  onSelectObject,
  onToggleVisibility,
  onToggleLock,
  onUpdateProperty
}) {
  const [expandedObjects, setExpandedObjects] = useState(new Set([objects[0]?.id || 0]));

  const toggleExpand = (objectId) => {
    setExpandedObjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(objectId)) {
        newSet.delete(objectId);
      } else {
        newSet.add(objectId);
      }
      return newSet;
    });
  };

  const selectedObject = objects.find(obj => obj.id === selectedObjectId);

  return (
    <aside id="layers-panel" className="absolute left-64 top-0 bottom-0 w-56 bg-gray-900/90 backdrop-blur-sm border-l border-gray-700 flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-white font-semibold text-lg flex items-center gap-2">
          <IconLayers size={18} />
          Layers
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        {objects.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <IconLayers size={32} className="mx-auto mb-2 opacity-50" />
            <p className="text-sm">No layers</p>
          </div>
        ) : (
          <>
            <div className="space-y-1">
              {objects.map((obj) => (
                <div
                  key={obj.id}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                    selectedObjectId === obj.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                  onClick={() => onSelectObject(obj.id)}
                >
                  {/* Visibility Toggle */}
                  <button
                    className={`p-1 rounded hover:bg-gray-600 transition-all ${
                      obj.visible ? 'text-white' : 'text-gray-500'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleVisibility(obj.id);
                    }}
                  >
                    {obj.visible ? <IconEye size={14} /> : <IconEyeOff size={14} />}
                  </button>

                  {/* Lock Toggle */}
                  <button
                    className={`p-1 rounded hover:bg-gray-600 transition-all ${
                      obj.locked ? 'text-white' : 'text-gray-500'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleLock(obj.id);
                    }}
                  >
                    {obj.locked ? <IconLock size={14} /> : <IconUnlock size={14} />}
                  </button>

                  {/* Object Name */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      {obj.type === 'Mesh' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>}
                      <span className="text-sm truncate">{obj.name}</span>
                    </div>
                  </div>

                  {/* Expand/Collapse */}
                  <button
                    className="p-1 rounded hover:bg-gray-600 opacity-50 hover:opacity-100 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(obj.id);
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d={expandedObjects.has(obj.id) ? "M18 15L12 9l-6 6" : "M6 9l6-6 6 6"} />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Selected Object Properties */}
            {selectedObject && expandedObjects.has(selectedObject.id) && (
              <div className="mt-4 p-3 bg-gray-800 rounded-lg">
                <h3 className="text-gray-400 text-xs font-medium mb-3 flex items-center justify-between">
                  <span>Object Properties</span>
                  <span className="text-gray-600 text-[10px]">{selectedObject.type}</span>
                </h3>
                
                {selectedObject.type === 'Mesh' && (
                  <>
                    <h4 className="text-gray-300 text-xs font-medium mb-2">Dimensions</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="text-gray-500 text-[10px] block mb-1">Width (X)</label>
                        <input
                          type="number"
                          min="0.1"
                          step="0.1"
                          value={selectedObject.meshSize.width}
                          onChange={(e) => onUpdateProperty(selectedObject.id, 'meshSize', { ...selectedObject.meshSize, width: parseFloat(e.target.value) || 1 })}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-gray-300 text-xs focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-gray-500 text-[10px] block mb-1">Height (Y)</label>
                        <input
                          type="number"
                          min="0.1"
                          step="0.1"
                          value={selectedObject.meshSize.height}
                          onChange={(e) => onUpdateProperty(selectedObject.id, 'meshSize', { ...selectedObject.meshSize, height: parseFloat(e.target.value) || 1 })}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-gray-300 text-xs focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-gray-500 text-[10px] block mb-1">Depth (Z)</label>
                        <input
                          type="number"
                          min="0.1"
                          step="0.1"
                          value={selectedObject.meshSize.depth}
                          onChange={(e) => onUpdateProperty(selectedObject.id, 'meshSize', { ...selectedObject.meshSize, depth: parseFloat(e.target.value) || 1 })}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-gray-300 text-xs focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                    
                    <h4 className="text-gray-300 text-xs font-medium mb-2 mt-4 pt-2 border-t border-gray-700">Transform</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="text-gray-500 text-[10px] block mb-1">Position X</label>
                        <input
                          type="number"
                          step="0.1"
                          value={selectedObject.transform.position[0]}
                          onChange={(e) => onUpdateProperty(selectedObject.id, 'transform', { ...selectedObject.transform, position: [parseFloat(e.target.value) || 0, selectedObject.transform.position[1], selectedObject.transform.position[2]] })}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-gray-300 text-xs focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-gray-500 text-[10px] block mb-1">Position Y</label>
                        <input
                          type="number"
                          step="0.1"
                          value={selectedObject.transform.position[1]}
                          onChange={(e) => onUpdateProperty(selectedObject.id, 'transform', { ...selectedObject.transform, position: [selectedObject.transform.position[0], parseFloat(e.target.value) || 0, selectedObject.transform.position[2]] })}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-gray-300 text-xs focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-gray-500 text-[10px] block mb-1">Position Z</label>
                        <input
                          type="number"
                          step="0.1"
                          value={selectedObject.transform.position[2]}
                          onChange={(e) => onUpdateProperty(selectedObject.id, 'transform', { ...selectedObject.transform, position: [selectedObject.transform.position[0], selectedObject.transform.position[1], parseFloat(e.target.value) || 0] })}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-gray-300 text-xs focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </>
        )}
      </div>

      <div className="p-4 border-t border-gray-700">
        <button
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all flex items-center justify-center gap-2"
          onClick={() => {
            const newId = Math.max(...objects.map(o => o.id)) + 1;
            const newObject = {
              id: newId,
              name: 'Box',
              type: 'Mesh',
              meshSize: { width: 1, height: 1, depth: 1 },
              transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
              material: { color: 0x0f3460 },
              visible: true,
              locked: false,
            };
            // This should trigger a callback from parent to add object
            onSelectObject(newId);
          }}
        >
          <IconPlus size={16} />
          Add Layer
        </button>
      </div>
    </aside>
  );
}

export default LayersPanel;
