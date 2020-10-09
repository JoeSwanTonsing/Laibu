import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function RecommendedItem({navigation, item}) {
  const {id, title, author, price, rating, year, image} = item;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push('Details', {item: item})}>
      <Image style={styles.thumbnailImage} source={{uri: image}} />
      <View style={styles.itemDetails}>
        <Text style={styles.titleText} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.authorText} numberOfLines={1}>
          {author}
        </Text>
        <Text style={styles.yearText}>{year}</Text>
        <Icon style={styles.ratingStars} name="star" />
        <Text style={styles.priceText}>
          {'\u20B9'}
          {price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  thumbnailImage: {
    height: 100,
    resizeMode: 'cover',
    marginRight: 10,
    flex: 1,
  },
  itemDetails: {
    marginLeft: 5,
    flex: 3,
  },
  titleText: {
    fontWeight: 'bold',
    color: '#293241',
    fontSize: 16,
    flex: 1,
  },
  authorText: {
    color: 'grey',
    fontSize: 15,
  },
  yearText: {
    color: 'grey',
  },
  ratingStars: {
    color: '#C9CBA3',
    fontSize: 18,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EA8953',
  },
};
