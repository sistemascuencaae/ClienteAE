import React from 'react';
import { Dimensions, StyleSheet, Text, View, Button } from 'react-native';
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

  // Funciones para cambiar de ítem
  const goToNext = () => {
    if (ref.current) {
      ref.current.next();
    }
  };

  const goToPrevious = () => {
    if (ref.current) {
      ref.current.prev();
    }
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        width={width}
        height={100}
        data={data}
        autoPlay={false}
        enabled={false}
        style={styles.carousel}
        renderItem={({ index }) => (
          <View key={index} style={styles.card}>
            <InfoFacturaComponent />
          </View>
        )}
      />

      <View style={styles.buttonsContainer}>
        <Button title="Anterior" onPress={goToPrevious} />
        <Button title="Siguiente" onPress={goToNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
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
    minHeight: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '60%',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PendingBillsScreen;
