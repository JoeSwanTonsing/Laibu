import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.itemLeft}>
              <Icon
                name="person-circle-outline"
                size={30}
                style={styles.titleIcon}
              />
              <Text style={styles.titleText}>Profile</Text>
            </View>
            <Icon name="chevron-forward" size={30} style={styles.rightIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.itemLeft}>
              <Icon
                name="person-circle-outline"
                size={30}
                style={styles.titleIcon}
              />
              <Text style={styles.titleText}>Profile</Text>
            </View>
            <Icon name="chevron-forward" size={30} style={styles.rightIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  scrollViewStyle: {},
  menuContainer: {
    margin: 7,
    paddingTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 4,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleIcon: {
    marginRight: 6,
    color: '#3D5A80',
  },
  titleText: {
    marginLeft: 6,
    fontSize: 18,
    color: '#3D5A80',
  },
  rightIcon: {
    color: '#3D5A80',
  },
};
