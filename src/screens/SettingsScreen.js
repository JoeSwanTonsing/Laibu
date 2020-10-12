import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons';

//my components
import Spinner from '../components/Spinner';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Profile',
    icon: 'person-circle-outline',
    arrow: 'chevron-forward',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Account',
    icon: 'accessibility-outline',
    arrow: 'chevron-forward',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    icon: 'person-circle-outline',
    arrow: 'chevron-forward',
  },
];

const Item = ({title, arrow, icon}) => (
  <TouchableOpacity style={styles.itemStyle}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default function SettingsScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const renderItem = ({item}) => (
    <Item title={item.title} icon={item.icon} arrow={item.arrow} />
  );

  function renderMenu() {
    return (
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.scrollViewStyle}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.spinnerContainer}>
          <Spinner size="large" color="#EA8953" spinnerText="Loading" />
        </View>
      ) : (
        renderMenu()
      )}
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  scrollViewStyle: {
    padding: 7,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  itemStyle: {
    flexDirection: 'row',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    padding: 10,
    marginBottom: 5,
  },
};
