import React from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function ItemDetailsScreen({navigation, route}) {
  const {item} = route.params;

  const {id, title, author, authorImage, price, rating, year, image} = item;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.introContent}>
            <View style={styles.thumbnailContainer}>
              <Image style={styles.thumbnail} source={{uri: image}} />
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.titleText} numberOfLines={1}>
                {title}
              </Text>
              <Text style={styles.authorText} numberOfLines={1}>
                {author}
              </Text>
              <Text style={styles.yearText}>{year}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buyBTN}>
            <Text style={styles.buyBTNText}>Buy Now</Text>
            <Text style={styles.buyBTNText}>
              {'\u20B9'}
              {price}
            </Text>
          </TouchableOpacity>
          <View style={styles.aboutSection}>
            <Text style={styles.titleText}>Description:</Text>
            <Text style={styles.descriptionText}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 4,
    borderColor: '#d1d1d1',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  introContent: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#d1d1d1',
    borderBottomRadius: 1,
    marginBottom: 15,
  },
  thumbnailContainer: {
    flex: 1,
    marginRight: 5,
    backgroundColor: 'red',
  },
  thumbnail: {
    height: 100,
    resizeMode: 'cover',
  },
  descriptionContainer: {
    flex: 3,
    marginLeft: 5,
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
    fontWeight: 'bold',
  },
  yearText: {
    color: 'grey',
  },
  buyBTN: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#5cb85c',
    backgroundColor: '#5cb85c',
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  buyBTNText: {
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: 10,
  },
  aboutSection: {
    borderTopColor: '#d1d1d1',
    borderTopWidth: 1,
    paddingTop: 10,
  },
  descriptionText: {
    marginTop: 10,
    textAlign: 'justify',
  },
};
