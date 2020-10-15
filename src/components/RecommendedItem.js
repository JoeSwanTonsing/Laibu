import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';

export default function RecommendedItem({navigation, item}) {
  const {id, title, author_name, price, rating, year, thumbnail} = item;

  function getYear() {
    if (year !== '' || year !== null) {
      return <Text style={styles.yearText}>Year Published: {year}</Text>;
    }
    return null;
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push('Details', {item_id: id})}>
      <Image style={styles.thumbnailImage} source={{uri: thumbnail}} />
      <View style={styles.itemDetails}>
        <Text style={styles.titleText} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.authorText} numberOfLines={1}>
          {author_name}
        </Text>
        {getYear()}
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
    justifyContent: 'space-between',
  },
  titleText: {
    fontWeight: 'bold',
    color: '#293241',
    fontSize: 16,
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
