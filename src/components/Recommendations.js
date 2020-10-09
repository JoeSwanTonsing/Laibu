import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//components
import RecommendedItem from '../components/RecommendedItem';

export default function Recommendations({navigation, sectionTitle, items}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{sectionTitle}</Text>
        <TouchableOpacity style={styles.moreBTN}>
          <Text style={styles.moreBTNText}>More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.recommendedItemContainer}>
        {items.map((item) => (
          <RecommendedItem key={item.id} navigation={navigation} item={item} />
        ))}
      </View>
    </View>
  );
}

const styles = {
  scrollViewStyle: {
    padding: 7,
    paddingTop: 10,
  },
  container: {
    padding: 5,
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  moreBTN: {
    paddingHorizontal: 15,
  },
  moreBTNText: {
    color: '#3D5A80',
  },
  recommendedItemContainer: {
    backgroundColor: '#fff',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#d7d7d7',
  },
};
