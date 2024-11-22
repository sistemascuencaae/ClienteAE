import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import InfoFacturaComponent from './components/InfoFacturaComponent';

// Configura el logger para desactivar el modo estricto
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;


const PendingBillsScreen: React.FC = () => {
  const ref = React.useRef<ICarouselInstance>(null);


  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        width={width}
        height={100}
        data={data}
        style={ styles.carousel }
        //onProgressChange={progress}
        renderItem={({ index }) => (<View key={1} style={styles.card}>
          <InfoFacturaComponent/>
        </View>)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  carousel: {
    height: '100%',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#bebebe',
    minHeight: '100%'
    
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PendingBillsScreen;



// import React from 'react';
// import { StyleSheet, Dimensions } from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
// } from 'react-native-reanimated';
// import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
// import InfoFacturaComponent from './components/InfoFacturaComponent';
// import { Text } from 'react-native-paper';

// const { width } = Dimensions.get('window'); // Obtiene las dimensiones de la pantalla
// const ITEM_WIDTH = width - 40; // Ajuste para márgenes laterales
// const ITEM_COUNT = 10;

// export default function PendingBillsScreen() {
//   const offset = useSharedValue(0); // Controla el desplazamiento actual del carrusel
//   const currentIndex = useSharedValue(0); // Índice actual del carrusel

//   // Manejo del gesto de arrastre horizontal
//   const panGesture = Gesture.Pan()
//     .onUpdate((event: any) => {
//       // Actualiza el desplazamiento en tiempo real
//       const newOffset = -currentIndex.value * ITEM_WIDTH + event.translationX;
//       offset.value = Math.max(
//         Math.min(newOffset, 0), // No desplazarse a la izquierda más allá del primer ítem
//         -(ITEM_COUNT - 1) * ITEM_WIDTH // No desplazarse a la derecha más allá del último ítem
//       );
//     })
//     .onEnd((event: any) => {
//       // Calcula el nuevo índice basado en la velocidad del gesto y el desplazamiento
//       const velocityThreshold = 200; // Velocidad mínima para considerar un "swipe rápido"
//       const shouldMoveNext =
//         event.velocityX < -velocityThreshold || event.translationX < -ITEM_WIDTH / 2;
//       const shouldMovePrev =
//         event.velocityX > velocityThreshold || event.translationX > ITEM_WIDTH / 2;

//       if (shouldMoveNext && currentIndex.value < ITEM_COUNT - 1) {
//         currentIndex.value += 1; // Ir al siguiente ítem
//       } else if (shouldMovePrev && currentIndex.value > 0) {
//         currentIndex.value -= 1; // Ir al ítem anterior
//       }

//       // Ajusta el desplazamiento al nuevo índice
//       offset.value = withTiming(-currentIndex.value * ITEM_WIDTH, { duration: 300 });
//     });

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <GestureDetector gesture={panGesture}>
//         <Animated.View style={styles.scrollContainer}>
//           {Array.from({ length: ITEM_COUNT }, (_, i) => {
//             // Estilo animado para cada ítem
//             const animatedStyle = useAnimatedStyle(() => ({
//               transform: [{ translateX: offset.value + i * ITEM_WIDTH }],
//             }));

//             return (
//               <Animated.View key={i} style={[styles.box, animatedStyle]}>
//                 <Text>{`Factura ${i + 1}`}</Text>
//                 <InfoFacturaComponent />
//               </Animated.View>
//             );
//           })}
//         </Animated.View>
//       </GestureDetector>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   scrollContainer: {
//     width: ITEM_WIDTH,
//     height: 200,
//     overflow: 'hidden',
//     flexDirection: 'row',
//   },
//   box: {
//     width: ITEM_WIDTH,
//     height: 200,
//     backgroundColor: '#d1d1d1',
//     marginHorizontal: 10,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
