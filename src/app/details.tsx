import { useRouter } from 'expo-router'
import { useCallback } from 'react'
import { View, Text } from 'react-native'

export default function Details() {
  const router = useRouter()
  const handlePress = useCallback(() => {
    router.back()
  }, [router])

  return (
    <View>
      <Text onPress={handlePress}>Details Screen</Text>
    </View>
  )
}
