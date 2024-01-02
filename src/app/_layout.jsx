import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';

import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

SplashScreen.preventAutoHideAsync();

const Root = () => {
  const [fontsLoaded, fontError] = useFonts({
    interLight: Inter_300Light,
    interRegular: Inter_400Regular,
    interMedium: Inter_500Medium,
    interSemiBold: Inter_600SemiBold,
    interBold: Inter_700Bold,
    interBlack: Inter_900Black,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack onLayoutRootView={onLayoutRootView}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Home',
        }}
      />
    </Stack>
  );
};

export default Root;
