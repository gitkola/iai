import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={[styles.container]}>
      <Text style={[styles.highlight]}>
        {__DEV__ ? 'Debug mode' : 'Release mode'}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  highlight: {
    fontWeight: '700',
  },
});

export default App;
