import { IconRefreshCw, IconSettings } from './Icon.jsx';

function OrbitControlsPanel({ autoRotate, setAutoRotate, autoRotateSpeed, setAutoRotateSpeed }) {
  return (
    <aside id="orbit-controls-panel" 
    className="absolute bottom-0 left-4 right-4 h-24 bg-gray-900/95 backdrop-blur-sm border border-gray-700 flex flex-col px-4 py-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-white font-semibold text-sm flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            <path d="M2 12h20"/>
          </svg>
          Orbit Controls
        </h2>
      </div>
      
      <div className="flex-col items-center justify-between gap-4">
        {/* Auto Rotate Toggle */}
        <div className="flex items-center gap-3 flex-1">
          <span className="text-gray-300 text-sm whitespace-nowrap">Auto Rotate</span>
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`w-12 h-6 rounded-full transition-all ${autoRotate ? 'bg-blue-600' : 'bg-gray-600'
              } relative`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transition-all ${autoRotate ? 'translate-x-6' : 'translate-x-0.5'
                }`}
            />
          </button>
        </div>
        
        {/* Auto Rotate Speed Slider */}
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="text-gray-300 text-xs whitespace-nowrap">Speed</span>
            <input type="range"
              min="0"  max="2" step="0.1"
              value={autoRotateSpeed}
              onChange={(e) => setAutoRotateSpeed(parseFloat(e.target.value))}
              disabled={!autoRotate}
              className="w-32 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <span className="text-gray-300 text-xs w-10 text-right">
              {autoRotateSpeed.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default OrbitControlsPanel;
