import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function RecommendedItem({navigation}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.thumbnailImage}
        source={{
          uri:
            'https://images.template.net/wp-content/uploads/2014/05/Vintage-Book-Cover-Template.jpg',
        }}
      />
      <View style={styles.itemDetails}>
        <Text style={styles.titleText} numberOfLines={1}>
          Title
        </Text>
        <Text style={styles.authorText} numberOfLines={1}>
          Author
        </Text>
        <Text style={styles.yearText}>Year</Text>
        <Icon style={styles.ratingStars} name="star" />
        <Text style={styles.priceText}>{'\u20B9'} Price</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  thumbnailImage: {
    width: 65,
    height: 100,
    resizeMode: 'contain',
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
