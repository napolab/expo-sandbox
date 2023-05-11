import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { useCallback } from 'react'
import { Text, Button } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import SafeArea from '@components/safe-area'

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { FC } from 'react'

type RootStackParamList = {
  Home: {
    id: string
  }
  Setting: undefined
}

const Home: FC<NativeStackScreenProps<RootStackParamList, "Home">> = (({ navigation, route }) => {
  const handleClick = useCallback(() => {
    navigation.push('Setting')
  }, [navigation])

  return (
    <SafeArea>
      <StatusBar style="dark" />
      <Text style={{ width: '100%' }}>Home</Text>
      <Text style={{ width: '100%' }}>{route.params.id}</Text>
      <Button title="button" onPress={handleClick} />
    </SafeArea>
  )
})

const Setting: FC<NativeStackScreenProps<RootStackParamList, "Setting">> = ({ navigation }) => {
  const handleClick = useCallback(() => {
    navigation.push('Home', { id: Date.now().toString() })
  }, [navigation])

  return (
    <SafeArea>
      <StatusBar style="dark" />
      <Text>Setting</Text>
      <Button title="button" onPress={handleClick} />
    </SafeArea>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} initialParams={{ id: '' }} />
          <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
