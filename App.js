import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import {BottomSheetModalProvider, BottomSheetModal} from "@gorhom/bottom-sheet"
import { useRef } from 'react';

export default function App() {
  const bottomRef = useRef(null)
  const snap = ["40%"]
  function handlePress (){
    bottomRef.current.present()
  }
  return (
    <BottomSheetModalProvider>
    <View style={styles.container}>
      <Button title='Go to the page' onPress={handlePress}/>
      <StatusBar style="auto" />

    </View>
    <BottomSheetModal
      ref={bottomRef}
      snapPoints={snap}
      index={0}
      enableDismissOnClose={true}
      >
        <View>
          <Text>Welcome to the bottom sheet</Text>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
