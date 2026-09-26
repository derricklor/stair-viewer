# Stair Viewer - 3D Browser App for Staircase Planning

## Introduction

A web-based 3D application designed for architects, builders, and homeowners to visualize, plan, and design staircases. The app enables users to create custom staircase designs with realistic 3D visualization, calculate dimensions, check building code compliance, and export plans for construction.

## Main Ideas

- **Interactive 3D Visualization**: Real-time 3D rendering of staircases using WebGL, allowing users to rotate, zoom, and inspect designs from any angle
- **Parametric Design**: Intuitive controls for adjusting key parameters (rise, run, treads, risers) while maintaining design integrity
- **Material Library**: Support for various materials (wood, metal, glass) with realistic textures and lighting
- **Measurement & Calculations**: Automatic calculation of total rise, run, and material quantities

## Software Stack

### Frontend
- **React.js** - Component-based UI framework
- **Three.js** - 3D rendering and scene management
- **TailwindCSS** - Utility-first styling

### Build Tools
- **Vite** - Fast build tool and dev server

## Features

### Core Features
- [ ] **Staircase Designer**
  - [ ] Define number of steps
  - [ ] Adjust individual riser height and tread depth
  
- [ ] **3D Viewport**
  - [ ] Orbit controls (rotate, pan, zoom)
  - [ ] Real-time lighting and shadows
  - [ ] Toggle between wireframe, solid, and material modes
  
- [ ] **Material Selection**
  - [ ] Pre-built material library
  - [ ] Custom material upload
  - [ ] Real-time texture preview
  
- [ ] **Measurements Panel**
  - [ ] Total rise and run
  - [ ] Stringer length
  - [ ] Material quantity estimates (treads, risers, stringers)

### Advanced Features
- [ ] **Templates & Presets**
  - [ ] Common staircase types (industrial, residential, commercial)
  - [ ] Custom template creation

### UI/UX Enhancements
- [ ] **Image Snapshots** - High-resolution renders for sharing
- [ ] **Preset/Filled Models as Templates** - Pre-built staircase models to start from
- [ ] **Scroll-Based Component Layer Viewer** - Photoshop-style layer management (scrollable list)
- [ ] **Panel/Button Style Component Adder** - Drag-and-drop or click-to-add components from side panel
- [ ] **Right-Side Properties Panel** - Context-sensitive editing panel for selected objects
- [ ] **Orbit Controls with WASD + Mouse** - WASD for movement, mouse clicks for rotation
- [ ] **Auto-Rotate with Speed Slider** - Constant spin around model with adjustable speed

