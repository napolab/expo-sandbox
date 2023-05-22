import { registerRootComponent } from 'expo'
import { ExpoRoot } from 'expo-router'

/** @type {import("react").FC} */
export const App = () => {
  const ctx = require.context('./src/app')

  return <ExpoRoot context={ctx} />
}

registerRootComponent(App)
