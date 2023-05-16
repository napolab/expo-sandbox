import { Link, Stack } from 'expo-router'
import { memo, Suspense, useCallback } from 'react'
import { datasource, useReadData, useReset } from 'react-flowder'
import { View, Text, Button } from 'react-native'
import { concatMap, interval, map, merge, of, Subject, throwError, timestamp } from 'rxjs'

import { theme } from '@theme/config'

import type { ErrorBoundaryProps } from 'expo-router'
import type { FC } from 'react'

const any = new Subject<unknown>()
const resource = merge(
  any,
  interval(1000).pipe(
    timestamp(),
    map(({ timestamp }) => timestamp),
  ),
).pipe(
  concatMap((value) => {
    if (value instanceof Error) return throwError(() => value)
    if(typeof value !== "number") return of(0)

    return of(value)
  }),
)
const timer = datasource(() => resource);

const Presenter: FC = () => {
  const error = useCallback(() => {
    any.next(new Error("error dayooo"));
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen options={{ title: 'Overview' }} />
      <Link href="/details">
        <Text style={{ fontFamily: theme.font.NotoSansJP[400] }}>Go to Details</Text>
      </Link>
      <Text style={{ fontFamily: theme.font.NotoSansJP[400] }}>こんばんは</Text>
      <Text>こんばんは</Text>
      <Button title='error' onPress={error} />
      <Component />
    </View>
  )
}

const Component = () => {
  const a = useReadData(timer())

  return (
    <View>
      <Text>timer: {a}</Text>
    </View>
  )
}

const Page: FC = () => (
  <Suspense fallback={<Text>Loading...</Text>}>
    <Presenter />
  </Suspense>
)

export default memo(Page)

export const ErrorBoundary: FC<ErrorBoundaryProps> = (props) => {
  const reset = useReset()
  const handlePress = useCallback(async () => {
    reset()
    await props.retry()
  }, [props, reset])

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text>{props.error.message}</Text>
      <Text onPress={handlePress}>Try Again?</Text>
    </View>
  )
}
