# Stair Viewer - 3D Browser App for Staircase Planning

## Introduction

A web-based 3D application designed for architects, builders, and homeowners to visualize, plan, and design staircases. The app enables users to create custom staircase designs with realistic 3D visualization, calculate dimensions, and explore design options interactively.

## Main Ideas

- **Interactive 3D Visualization**: Real-time 3D rendering of staircases using WebGL, allowing users to rotate, zoom, and inspect designs from any angle
- **Parametric Design**: Intuitive controls for adjusting key parameters (rise, run, treads, risers) while maintaining design integrity
- **Material Library**: Support for various materials (wood, metal, glass) with realistic textures and lighting
- **Measurement & Calculations**: Automatic calculation of total rise, run, and material quantities
- **Layer-Based Workflow**: Photoshop-style layer management for organizing design components
- **Context-Sensitive Editing**: Properties panel that adapts to selected objects for quick adjustments

## Software Stack

### Frontend
- **React.js** - Component-based UI framework
- **Three.js** - 3D rendering and scene management
- **TailwindCSS** - Utility-first styling

### Build Tools
- **Vite** - Fast build tool and dev server

## Features

### Core Features
- [x] **3D Viewport**
  - [x] Orbit controls (rotate, pan, zoom)
  - [x] Real-time lighting and shadows
  - [x] Toggle between wireframe, solid, and material modes
  
- [x] **Material Selection**
  - [x] Pre-built material library
  - [x] Real-time texture preview
  
- [x] **Measurements Panel**
  - [x] Total rise and run
  - [x] Stringer length
  - [x] Material quantity estimates (treads, risers, stringers)

### Advanced Features
- [x] **Templates & Presets**
  - [x] Common staircase types (industrial, residential, commercial)
  - [x] Custom template creation

### UI/UX Enhancements
- [ ] **Image Snapshots** - High-resolution renders for sharing
- [x] **Preset/Filled Models as Templates** - Pre-built staircase models to start from
- [x] **Scroll-Based Component Layer Viewer** - Photoshop-style layer management (scrollable list)
- [x] **Panel/Button Style Component Adder** - Click-to-add components from side panel
- [x] **Right-Side Properties Panel** - Context-sensitive editing panel for selected objects
- [x] **Orbit Controls with WASD + Mouse** - WASD for movement, mouse clicks for rotation
- [x] **Auto-Rotate with Speed Slider** - Constant spin around model with adjustable speed

