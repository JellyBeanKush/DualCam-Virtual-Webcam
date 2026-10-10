# DualCam Virtual Webcam

A Windows desktop app foundation for combining two webcam feeds into one output stream with:
- side-by-side composition
- auto-framing / pan-and-zoom stabilization
- adjustable background blur
- live control sliders for finishing and tuning

This project is designed to be a practical foundation for a standalone virtual camera workflow on Windows. It is intentionally separated into two layers:

1. The real-time image processing pipeline (working in the app now)
2. The Windows virtual camera driver layer (DirectShow / camera integration) which must be implemented in native code outside the browser layer

That gives you a working preview and interactive tuning app immediately, while keeping the final virtual webcam output modular and easier to swap in later.

## What this repo includes

- Electron desktop UI for dual-camera capture
- side-by-side preview and output canvas
- adjustable split and zoom controls
- face-based auto-framing and pan smoothing
- background blur controls
- app architecture for future native virtual webcam integration

## What it does not include yet

- a native Windows virtual camera driver installed as a system webcam device

That specific part requires DirectShow / Media Foundation native code and is not realistically fully portable in a pure browser/Electron app. This repo intentionally avoids pretending otherwise and keeps the final output layer isolated.

## Quick start

1. Install Node.js 20+
2. Open terminal in this folder
3. Run:

```bash
npm install
npm start
```

4. Grant webcam permission when the app prompts
5. Use the controls to tune the scene

## Controls

- Camera A / Camera B selection
- Split position (side-by-side composition)
- Zoom
- Pan X / Pan Y
- Smoothness / stabilization
- Blur strength
- Blur cutoff / focus threshold
- Output scale and border

## Project structure

- `main.js` — Electron window and app lifecycle
- `preload.js` — safe bridge for the renderer
- `index.html` — UI layout
- `styles.css` — panel styling
- `renderer.js` — dual-camera handling, composition, auto-framing, blur

## Recommended next step

If you want, the next phase is to turn this into a fully installed Windows virtual webcam by wiring the output canvas into a DirectShow source filter or a custom device driver. That is the only way to make Discord, Zoom, Snap Camera, and other apps detect it as a real camera device.

## License

MIT
