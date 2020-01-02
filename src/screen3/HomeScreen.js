import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet, ScrollView, SafeAreaView } from 'react-native'

import { Header, ImageCard } from '../components/uikit'
import { SPIDER_DETAILS } from '../routes';

const url = 'http://api.tvmaze.com/search/shows?q=spider-man';

export const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([])

  const getData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data)
    } catch (error) {
      console.error(error)
    }
    
  }

  useEffect(() => {
    getData(url)
  }, [])
  return (
    <SafeAreaView style={{flex: 1}}>
        <Header 
          title="Spider Man"
          leftIcon="ios-menu"
          leftColor="#fff"
          onPress={() => navigation.openDrawer()}
        />
          <ScrollView>
            <FlatList
              style={styles.list}
              data={data}
              keyExtractor={item => item.show.id.toString()}
              horizontal={false}
              numColumns={2}
              renderItem={({item}) => (
                  <ImageCard
                    title={item.show.name}
                    src={item.show.image.original}
                    onPress={() => navigation.navigate(
                        SPIDER_DETAILS,
                        (item)
                    )}
                  />
              )}
            />
          </ScrollView>
    </SafeAreaView>
  );
};

HomeScreen.navigationOptions = {
    headerMode: 'none'
  }

const styles = StyleSheet.create({
  list: {
    flex: 1,
    margin: 10
  }
})