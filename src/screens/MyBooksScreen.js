import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

//components
import Spinner from '../components/Spinner';
import Recommendations from '../components/Recommendations';

export default function MyBooksScreen({navigation}) {
  const [myBooks, setMyBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const uid = 1;

  function getMyBooks() {
    return axios.get('http://192.168.1.9:80/laibu-api/api/user/books.php', {
      params: {
        user_id: uid,
      },
    });
  }

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getMyBooks()])
      .then(function (results) {
        setMyBooks(results[0].data);
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
          sectionTitle="Your Books"
          items={myBooks}
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
