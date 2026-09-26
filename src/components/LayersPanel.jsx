import { useState } from 'react';
import { IconEye, IconEyeOff, IconLock, IconUnlock, IconLayers, IconTrash2, IconPlus } from './Icon.jsx';

const layerTypes = ['Mesh', 'Light', 'Camera', 'Group'];

function LayersPanel() {
  const [layers, setLayers] = useState([
    { id: 1, name: 'Box', type: 'Mesh', visible: true, locked: false },
    { id: 2, name: 'Light 1', type: 'Light', visible: true, locked: false },
    { id: 3, name: 'Light 2', type: 'Light', visible: true, locked: false },
  ]);
  const [selectedLayerId, setSelectedLayerId] = useState(1);

  return (
    <aside className="absolute left-0 top-0 bottom-0 w-56 bg-gray-900/90 backdrop-blur-sm border-r border-gray-700 flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-white font-semibold text-lg flex items-center gap-2">
          <IconLayers size={18} />
          Layers
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        <div className="space-y-1">
          {layers.map((layer) => (
            <div
              key={layer.id}
              className={`relative flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                selectedLayerId === layer.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              onClick={() => setSelectedLayerId(layer.id)}
            >
              <button
                className={`p-1 rounded hover:bg-gray-600 transition-all ${
                  layer.visible ? 'text-white' : 'text-gray-500'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setLayers(
                    layers.map((l) =>
                      l.id === layer.id ? { ...l, visible: !l.visible } : l
                    )
                  );
                }}
              >
                {layer.visible ? <IconEye size={14} /> : <IconEyeOff size={14} />}
              </button>

              <button
                className={`p-1 rounded hover:bg-gray-600 transition-all ${
                  layer.locked ? 'text-white' : 'text-gray-500'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setLayers(
                    layers.map((l) =>
                      l.id === layer.id ? { ...l, locked: !l.locked } : l
                    )
                  );
                }}
              >
                {layer.locked ? <IconLock size={14} /> : <IconUnlock size={14} />}
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  {layer.type === 'Mesh' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>}
                  {layer.type === 'Light' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>}
                  {layer.type === 'Camera' && <IconLayers size={14} />}
                </div>
                <span className="text-sm truncate">{layer.name}</span>
              </div>

              <button
                className="p-1 rounded hover:bg-gray-600 opacity-50 hover:opacity-100 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setLayers(layers.filter((l) => l.id !== layer.id));
                }}
              >
                <IconTrash2 size={14} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-gray-800 rounded-lg">
          <h3 className="text-gray-400 text-xs font-medium mb-2">Layer Properties</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Type</span>
              <span className="text-gray-300">{layerTypes.find((t) => t === layers.find((l) => l.id === selectedLayerId)?.type)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Order</span>
              <span className="text-gray-300">{layers.length}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-700">
        <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all flex items-center justify-center gap-2">
          <IconPlus size={16} />
          Add Layer
        </button>
      </div>
    </aside>
  );
}

export default LayersPanel;
