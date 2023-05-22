import { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import type { FC, ReactNode } from 'react'

type Props = {
  children?: ReactNode
}
const SafeArea: FC<Props> = ({ children }) => {
  const insets = useSafeAreaInsets()
  const { top: paddingTop, bottom: paddingBottom, left: paddingLeft, right: paddingRight } = insets

  return <View style={[styles.root, { paddingTop, paddingBottom, paddingLeft, paddingRight }]}>{children}</View>
}

export default memo(SafeArea)

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
