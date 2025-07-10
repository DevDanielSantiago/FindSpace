import React, {useEffect, useRef} from 'react';
import {Animated, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './styles';

export interface SkeletonProps {
  width: number;
  height: number;
  borderRadius: number;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export function Skeleton({
  width,
  height,
  borderRadius,
  style,
  children,
}: SkeletonProps) {
  const backgroundColor = '#E1E4E8';
  const highlightColor = '#F7F8FA';

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ).start();
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  return (
    <View
      style={[
        styles.skeleton,
        {width, height, borderRadius, backgroundColor},
        style,
      ]}>
      <Animated.View
        style={[StyleSheet.absoluteFill, {transform: [{translateX}]}]}>
        <LinearGradient
          colors={['transparent', highlightColor, 'transparent']}
          style={styles.gradient}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
        />
      </Animated.View>
      {children}
    </View>
  );
}
