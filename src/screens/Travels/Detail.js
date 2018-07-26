import React, { Component } from 'react';
import { StyleSheet, ScrollView, Dimensions, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { colors } from '../../config';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Detail extends Component {
  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <SafeAreaView>
          <Text>{id}</Text>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: colors.background,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Detail;
