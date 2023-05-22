import { useFonts, NotoSansJP_400Regular as NotoSansJPRegular } from '@expo-google-fonts/noto-sans-jp'
import { SplashScreen, Stack } from 'expo-router'
import { memo } from 'react'
import { Provider } from 'react-flowder'

import { theme } from '@theme/config'

import type { FC } from 'react'

const Layout: FC = () => {
  const [fontLoaded] = useFonts({
    [theme.font.NotoSansJP[400]]: NotoSansJPRegular,
  })

  if (!fontLoaded ) return <SplashScreen />

  return (
    <Provider>
      <Stack />
    </Provider>
  )
}

export default memo(Layout)
