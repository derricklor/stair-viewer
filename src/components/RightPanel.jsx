import { IconPalette, IconEyeOff, IconEye } from './Icon.jsx';

function RightPanel({ 
  object,
  onObjectChange = () => {}
}) {
  const properties = object || {
    id: null,
    name: 'Object',
    type: 'Mesh',
    meshSize: { width: 1, height: 1, depth: 1 },
    transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
    material: { color: '#0f3460', roughness: 0.5, metalness: 0.1 },
    visible: true,
    locked: false,
  };

  const updateProperty = (prop, value) => {
    onObjectChange(object.id, prop, value);
  };

  const updateMeshSize = (prop, value) => {
    onObjectChange(object.id, 'meshSize', { ...properties.meshSize, [prop]: value });
  };

  return (
    <aside id="right-panel" className="absolute right-0 top-0 bottom-0 w-80 bg-gray-900/90 backdrop-blur-sm border-l border-gray-700 flex flex-col">
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        <h2 className="text-white font-semibold text-lg">Properties</h2>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
              <path d="M16 21h5v-5" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </div>
      </div>

      {!object ? (
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
            <p className="text-gray-500 text-xs">{properties.type}</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Visibility */}
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Visible</span>
              <button
                onClick={() => updateProperty('visible', !properties.visible)}
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

            {/* Lock Status */}
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Locked</span>
              <button
                onClick={() => updateProperty('locked', !properties.locked)}
                className={`w-12 h-6 rounded-full transition-all ${
                  properties.locked ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-all ${
                    properties.locked ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Dimensions */}
            {properties.type === 'Mesh' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                  <span className="text-xs font-medium uppercase">Dimensions</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-gray-500 text-xs block mb-1">Width</label>
                    <input
                      type="number"
                      step="0.1"
                      value={properties.meshSize.width}
                      onChange={(e) => updateMeshSize('width', parseFloat(e.target.value))}
                      className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-gray-300 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs block mb-1">Height</label>
                    <input
                      type="number"
                      step="0.1"
                      value={properties.meshSize.height}
                      onChange={(e) => updateMeshSize('height', parseFloat(e.target.value))}
                      className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-gray-300 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs block mb-1">Depth</label>
                    <input
                      type="number"
                      step="0.1"
                      value={properties.meshSize.depth}
                      onChange={(e) => updateMeshSize('depth', parseFloat(e.target.value))}
                      className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-gray-300 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Transform */}
            {properties.type === 'Mesh' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                  <span className="text-xs font-medium uppercase">Transform</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-gray-500 text-xs block mb-1">Position X</label>
                    <input
                      type="number"
                      step="0.1"
                      value={properties.transform.position[0]}
                      onChange={(e) => updateProperty('transform', {
                        ...properties.transform,
                        position: [parseFloat(e.target.value), properties.transform.position[1], properties.transform.position[2]]
                      })}
                      className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-gray-300 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs block mb-1">Position Y</label>
                    <input
                      type="number"
                      step="0.1"
                      value={properties.transform.position[1]}
                      onChange={(e) => updateProperty('transform', {
                        ...properties.transform,
                        position: [properties.transform.position[0], parseFloat(e.target.value), properties.transform.position[2]]
                      })}
                      className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-gray-300 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs block mb-1">Position Z</label>
                    <input
                      type="number"
                      step="0.1"
                      value={properties.transform.position[2]}
                      onChange={(e) => updateProperty('transform', {
                        ...properties.transform,
                        position: [properties.transform.position[0], properties.transform.position[1], parseFloat(e.target.value)]
                      })}
                      className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-gray-300 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

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
                      value={properties.material.color}
                      onChange={(e) => updateProperty('material', { ...properties.material, color: e.target.value })}
                      className="w-10 h-8 bg-gray-800 rounded cursor-pointer"
                    />
                    <span className="text-gray-300 text-sm font-mono">{properties.material.color}</span>
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
                      value={properties.material.roughness}
                      onChange={(e) => updateProperty('material', {
                        ...properties.material,
                        roughness: parseFloat(e.target.value)
                      })}
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
                      value={properties.material.metalness}
                      onChange={(e) => updateProperty('material', {
                        ...properties.material,
                        metalness: parseFloat(e.target.value)
                      })}
                      className="w-full bg-gray-800 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </aside>
  );
}

export default RightPanel;
