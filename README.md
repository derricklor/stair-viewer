# Stair Viewer

A 3D browser application for visualizing and designing staircases. Built with React.js, Three.js, and TailwindCSS, this tool provides an interactive environment for architects, builders, and homeowners to explore staircase designs.

## Main Ideas

- **Interactive 3D Visualization**: Real-time 3D rendering using WebGL with orbit controls, allowing users to rotate, zoom, and inspect designs from any angle
- **Parametric Design**: Intuitive controls for adjusting key parameters (rise, run, treads, risers) while maintaining design integrity
- **Layer-Based Workflow**: Photoshop-style layer management for organizing and managing design components
- **Context-Sensitive Editing**: Properties panel that adapts to selected objects for quick adjustments
- **Real-time Lighting**: Soft downward lighting with shadows for realistic visualization

## Features

### Core Features
- **3D Viewport** with orbit controls (WASD + mouse) and auto-rotation
- **Real-time lighting and shadows** for realistic appearance
- **Material library** with pre-built materials (wood, metal, glass)
- **Measurements panel** showing total rise, run, and stringer length
- **Templates & presets** for common staircase types (industrial, residential, commercial)

### UI/UX Enhancements
- **Component library** with drag-and-drop/click-to-add functionality
- **Layer panel** with visibility and lock controls (Photoshop-style)
- **Properties panel** for editing object attributes (transform, materials, opacity)
- **Auto-rotate** with adjustable speed slider
- **High-resolution image snapshots** for sharing

## How to Run

### Prerequisites
- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/derricklor/stair-viewer
cd stair-viewer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or next available port).

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Box.jsx          # 3D box component
│   ├── Icon.jsx         # Custom SVG icons
│   ├── LeftPanel.jsx    # Component library panel
│   ├── LayersPanel.jsx  # Layer management panel
│   ├── RightPanel.jsx   # Properties editor panel
│   └── Scene.jsx        # Main 3D scene
├── assets/              # Static assets
├── App.jsx              # Main application component
├── index.css            # Global styles
└── main.jsx             # Entry point
```

## Technologies

- **React.js** - Component-based UI framework
- **Three.js** - 3D rendering and scene management
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## License
ALL RIGHTS RESERVED
