import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';

//components
import Spinner from '../components/Spinner';
import Recommendations from '../components/Recommendations';

export default function HomeScreen({navigation}) {
  const [recommendations, setRecommendations] = useState([]);
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function getRecommendations() {
    return axios.get(
      'https://joeswantonsing.github.io/Laibu_DATA/api/recommended.json',
    );
  }

  function getTrending() {
    return axios.get(
      'https://joeswantonsing.github.io/Laibu_DATA/api/trending.json',
    );
  }

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getRecommendations(), getTrending()])
      .then(function (results) {
        setRecommendations(results[0].data);
        setTrending(results[1].data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function renderScreen() {
    return (
      <View>
        <Recommendations
          navigation={navigation}
          sectionTitle="Recommended Books for you"
          items={recommendations}
        />
        <Recommendations
          navigation={navigation}
          sectionTitle="Trending Books"
          items={trending}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollViewStyle}>
        {isLoading ? (
          <View style={styles.spinnerContainer}>
            <Spinner size="large" color="#EA8953" spinnerText="Loading" />
          </View>
        ) : (
          renderScreen()
        )}
      </ScrollView>
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
};
