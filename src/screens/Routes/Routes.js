import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { colors } from '../../config';

const list = [
  {
    id: 1,
    name: 'Amy Farha',
    subtitle: 'Vice President',
  },
  {
    id: 2,
    name: 'Chris Jackson',
    subtitle: 'Vice Chairman',
  },
];

class Routes extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <SafeAreaView>
          {list.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              subtitle={l.subtitle}
              chevron
              onPress={() => navigation.navigate('RouteDetail', { id: l.id })}
            />
          ))}
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default Routes;
