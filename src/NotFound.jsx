let textTerrain = new TextTerrain(renderer.capabilities.getMaxAnisotropy());
scene.add(textTerrain);

// Start the actions with staggered delays
textTerrain.actions.forEach((action, index) => {
  action(index * 50); // Stagger start times by 50ms
});
