import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Dimensions } from 'react-native';
import Animated, {
  useAnimatedProps,
  useAnimatedRef,
  useDerivedValue,
  useScrollViewOffset,
} from 'react-native-reanimated';
import type { DerivedValue } from 'react-native-reanimated';
import InfoFacturaComponent from './components/InfoFacturaComponent';

const widthWindow = Dimensions.get('window').width;
export default function PendingBillsScreen() {
  const animatedRef = useAnimatedRef<Animated.ScrollView>();
  // highlight-start
  const offset = useScrollViewOffset(animatedRef);
  const text = useDerivedValue(
    () => `Scroll offset: ${offset.value.toFixed(1)}`
  );
  // highlight-end

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        ref={animatedRef}
        horizontal={true}>
        {Array.from({ length: 10 }).map((_, i) => (
          <View key={i} style={styles.box}>
           <InfoFacturaComponent/>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    minHeight: '88%',
    
  },
  scroll: {
    height: 250,
    marginTop:5,
    marginBottom: 5,
  },
  scrollContent: {
    alignItems: 'center',
  },
  box: {
    minWidth: widthWindow-12,
    minHeight: '100%',
    margin: 5,
    borderRadius: 15,
    backgroundColor: '#bebebe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    textAlign: 'center',
  },
});

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
Animated.addWhitelistedNativeProps({ text: true });

function AnimatedText({ text, ...props }: { text: DerivedValue<string> }) {
  const animatedProps = useAnimatedProps(() => ({
    text: text.value,
    defaultValue: text.value,
  }));
  return (
    <AnimatedTextInput
      editable={false}
      {...props}
      value={text.value}
      animatedProps={animatedProps}
    />
  );
}
