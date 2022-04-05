const viewer = document.getElementById('viewer');
const scrollView = document.getElementById('scroll-view');

/**
 * Set the worker path to the static `core` folder
 */
Core.setWorkerPath('/pdfjsexpress/core');

/**
 * Replace this with your actual license key
 */
const licenseKey = 'Insert commercial license key here after purchase';

const docViewer = new Core.DocumentViewer();

/**
 * Add some global variables for "PDFJSDocumentType.js" to use.
 * 
 * These are normally set by the default UI.
 */
window.documentViewer = docViewer;
window.WebViewer = {};
window.WebViewer['l'] = () => licenseKey

/**
 * Set the divs that the viewer will mount to
 */
docViewer.setScrollViewElement(scrollView);
docViewer.setViewerElement(viewer);

/**
 * Load your document and enable annotations
 */
docViewer.loadDocument('/pdfjs-express.pdf');
docViewer.setOptions({ enableAnnotations: true });

/**
 * Bind events in your UI
 */
document.getElementById('rotate').onclick = () => {
  docViewer.rotateClockwise()
}

document.getElementById('zoom-in').onclick = () => {
  docViewer.zoomTo(docViewer.getZoom() + 0.25);
}

document.getElementById('zoom-out').onclick = () => {
  docViewer.zoomTo(docViewer.getZoom() - 0.25);
}