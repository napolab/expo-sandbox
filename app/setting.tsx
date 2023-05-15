import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

const Setting = () => {
  return (
  <View style={{ marginTop: 50 }}>
    <Link href="/" asChild >
      <Pressable>
        {({ hovered, pressed }) => (
          <Text>Home</Text>
        )}
      </Pressable>
    </Link>
    </View>
  )
}

export default Setting 