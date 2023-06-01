function loadPlugins(): void {
  console.log("[Lavicord] plugins loaded!");
}

function unloadPlugins(): void {
  console.log("[Lavicord] plugins unloaded!");
}

interface PluginLoaderType {
  load: () => void,
  unload: () => void
};

const pluginLoader: PluginLoaderType = {
  load: loadPlugins,
  unload: unloadPlugins
}

export default pluginLoader;
