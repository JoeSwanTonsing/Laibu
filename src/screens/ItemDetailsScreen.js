import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

//my components
import Spinner from '../components/Spinner';

export default function ItemDetailsScreen({navigation, route}) {
  const {item_id} = route.params;
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://192.168.1.8/laibu/api/books/', {
        params: {
          book_id: item_id,
        },
      })
      .then((res) => {
        setDetails(res.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [item_id]);

  const {
    title,
    subtitle,
    description,
    price,
    rating,
    year,
    thumbnail,
    pages,
    author_name,
    genre_name,
    genre_type,
  } = details;

  function getSubtitle() {
    if (subtitle !== '' && subtitle != null) {
      return (
        <Text style={[styles.subTitleText, styles.margBot]}>{subtitle}</Text>
      );
    }
    return null;
  }

  function getYear() {
    if (year !== '' && year != null) {
      return (
        <Text style={[styles.yearText, styles.margBot]}>
          Year Published: {year}
        </Text>
      );
    }
    return null;
  }

  function getDescription() {
    if (description !== '' && description != null) {
      return <Text style={styles.descriptionText}>{description}</Text>;
    }
    return <Text style={styles.descriptionText}>Description Unavailable</Text>;
  }

  function getPages() {
    if (pages !== '' && pages != null) {
      return <Text style={styles.pagesText}>{pages} Pages</Text>;
    }
    return null;
  }

  function getPrice() {
    if (price === '0') {
      return (
        <TouchableOpacity style={styles.buyBTN}>
          <Text style={styles.buyBTNText}>Get It For Free!</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={styles.buyBTN}>
          <Text style={styles.buyBTNText}>Buy Now</Text>
          <Text style={styles.buyBTNText}>
            {'\u20B9'}
            {price}
          </Text>
        </TouchableOpacity>
      );
    }
  }

  function getGenreName() {
    if (genre_name !== '' && genre_name != null) {
      return <Text style={styles.genreText}>{genre_name}</Text>;
    }
    return null;
  }

  function getGenreType() {
    if (genre_type !== '' && genre_type !== null) {
      return <Text style={styles.genreText}>{genre_type}</Text>;
    }
    return null;
  }

  function renderDetails() {
    return (
      <View style={styles.content}>
        <View style={styles.introContent}>
          <View style={styles.thumbnailContainer}>
            <Image style={styles.thumbnail} source={{uri: thumbnail}} />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={[styles.titleText, styles.margBot]}>{title}</Text>
            {getSubtitle()}
            <Text style={[styles.authorText, styles.margBot]}>
              {author_name}
            </Text>
            {getYear()}
            {getPages()}
          </View>
        </View>
        <View style={styles.genreContainer}>
          {getGenreType()}
          {getGenreName()}
        </View>
        {getPrice()}
        <View style={styles.aboutSection}>
          <Text style={styles.titleText}>Description:</Text>
          {getDescription()}
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {isLoading ? (
          <View style={styles.spinnerContainer}>
            <Spinner size="large" color="#EA8953" spinnerText="Loading" />
          </View>
        ) : (
          renderDetails()
        )}
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
  subTitleText: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 'bold',
  },
  authorText: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 'bold',
  },
  yearText: {
    color: 'grey',
    fontWeight: 'bold',
  },
  pagesText: {},
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
  genreContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  genreText: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    marginRight: 15,
    marginBottom: 15,
    color: '#fff',
    backgroundColor: '#3D5A80',
  },
  margBot: {
    marginBottom: 7,
  },
};
