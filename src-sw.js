// Importation de workbox depuis un CDN
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

// Ajout de code personnalisé
console.log('this is my custom service worker');

//Ajout d'un placeholder 
workbox.precaching.precacheAndRoute([]);