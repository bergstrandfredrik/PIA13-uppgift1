import { Text, View, Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={{backgroundColor:"lightblue", flex: 1}}>
      <View style={{backgroundColor: "red", height: 150, justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontSize: 50}}>
          Röd
          </Text>
        </View>
      <View style={{flexDirection: "row"}}>
        <View style={{backgroundColor: "green", flex: 1, height: 150}}>
          <Text style={{fontSize: 50}}>
            Grön
            </Text>
            </View>
        <View style={{backgroundColor: "yellow", flex: 1, height: 150}}></View>
      </View>
      <View style={{flex: 1, flexDirection: "row"}}>
        <View style={{backgroundColor: "red", flex: 4, height: 100}}></View>
        <View style={{backgroundColor: "black", flex: 1, height: 100}}></View>
      </View>
      <View style={{flex: 1}}></View>
      <View style={{ height: 80, backgroundColor: "orange", justifyContent: "center", alignItems: "flex-end"}}>
        <Text style={{fontSize: 50}}>
          Orange
          </Text>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
