import { useState } from 'react';
import { IconPlus, IconBox } from './Icon.jsx';

function LeftPanel({ boxSize = { width: 1, height: 1, depth: 1 } }) {
  const [selectedType, setSelectedType] = useState(null);

  const componentTypes = [
    { id: 'box', name: 'Box', icon: <IconBox size={18} /> },
  ];

  return (
    <aside id="left-panel" className="absolute left-0 top-0 bottom-0 w-64 bg-gray-900/90 backdrop-blur-sm border-r border-gray-700 flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-white font-semibold text-lg">Components</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {componentTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                selectedType === type.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {type.icon}
              <span>{type.name}</span>
              {selectedType === type.id && (
                <IconPlus size={14} className="ml-auto" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-gray-400 text-sm font-medium mb-3">Templates</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all">
              <IconBox size={18} />
              <span>Basic Staircase</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all">
              <IconBox size={18} />
              <span>Industrial Stair</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all">
              <IconBox size={18} />
              <span>Residential Stair</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default LeftPanel;
