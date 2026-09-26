import { useState } from 'react';
import { IconRefreshCw, IconSettings, IconEye, IconEyeOff, IconPalette } from './Icon.jsx';

function RightPanel() {
  const [selectedObject, setSelectedObject] = useState(null);

  const properties = {
    name: 'Object',
    color: '#0f3460',
    opacity: 1,
    visible: true,
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    materials: {
      roughness: 0.5,
      metalness: 0.1,
    },
  };

  return (
    <aside className="absolute right-0 top-0 bottom-0 w-80 bg-gray-900/90 backdrop-blur-sm border-l border-gray-700 flex flex-col">
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        <h2 className="text-white font-semibold text-lg">Properties</h2>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-all">
            <IconRefreshCw size={16} />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-all">
            <IconSettings size={16} />
          </button>
        </div>
      </div>

      {!selectedObject ? (
        <div className="flex-1 flex items-center justify-center p-8 text-center">
          <div className="text-gray-400">
            <div className="mb-2">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto opacity-50">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <p className="text-sm">Select an object to edit its properties</p>
          </div>
        </div>
      ) : (
        <>
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-white font-medium">{properties.name}</h3>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Visibility */}
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Visible</span>
              <button
                onClick={() => properties.visible = !properties.visible}
                className={`w-12 h-6 rounded-full transition-all ${
                  properties.visible ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-all ${
                    properties.visible ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Transform */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
                <span className="text-xs font-medium uppercase">Transform</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {['Position', 'Rotation', 'Scale'].map((label) => (
                  <div key={label} className="space-y-1">
                    <label className="text-gray-500 text-xs">{label}</label>
                    <div className="space-y-1">
                      {[0, 1, 2].map((i) => (
                        <input
                          key={i}
                          type="number"
                          className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-gray-300 text-sm focus:outline-none focus:border-blue-500"
                          defaultValue={properties[label.toLowerCase()]}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <IconPalette size={14} />
                <span className="text-xs font-medium uppercase">Materials</span>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-gray-500 text-xs block mb-1">Color</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={properties.color}
                      onChange={(e) => (properties.color = e.target.value)}
                      className="w-10 h-8 bg-gray-800 rounded cursor-pointer"
                    />
                    <span className="text-gray-300 text-sm font-mono">{properties.color}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-gray-500 text-xs block mb-1">Roughness</label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={properties.materials.roughness}
                      onChange={(e) =>
                        (properties.materials.roughness = parseFloat(e.target.value))
                      }
                      className="w-full bg-gray-800 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs block mb-1">Metalness</label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={properties.materials.metalness}
                      onChange={(e) =>
                        (properties.materials.metalness = parseFloat(e.target.value))
                      }
                      className="w-full bg-gray-800 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Opacity */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <IconEye size={14} />
                <span className="text-xs font-medium uppercase">Opacity</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={properties.opacity}
                onChange={(e) => (properties.opacity = parseFloat(e.target.value))}
                className="w-full bg-gray-800 rounded-lg"
              />
            </div>
          </div>
        </>
      )}
    </aside>
  );
}

export default RightPanel;
