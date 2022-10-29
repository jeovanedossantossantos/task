import { registerRootComponent } from 'expo';
import * as ScreenOrientation from 'expo-screen-orientation';
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}

changeScreenOrientation()
registerRootComponent(App);
