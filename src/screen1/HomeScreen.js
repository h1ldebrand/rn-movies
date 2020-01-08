import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { searchChange, getMovies } from '../actions'

import { Header, ImageCard, SearchBar } from '../components/uikit'
import { STARGATE_DETAILS } from '../routes';

const HomeScreen = props => {
  const { navigation, movie, searchChange, getMovies, data } = props
  const [visibleSearchBar, setVisibleSearchBar] = useState(false)

  const onChange = text => {
    searchChange(text)
  }

  useEffect(() => {
    getMovies(movie)
  }, [movie])

  return (
    <SafeAreaView style={{flex: 1}}>
        {
          visibleSearchBar
          ? <SearchBar
            colorRight="#fff"
            iconRight="magnify"
            placeholder="Search"
            onChangeText={onChange}
            value={movie}
            onPressRight={() => setVisibleSearchBar(false)}
            onBlur={() => setVisibleSearchBar(true)}
          />
          : <Header 
              title="Star Gate"
              colorRight="#fff"
              iconRight="magnify"
              onPress={() => navigation.openDrawer()}
              onPressRight={() => setVisibleSearchBar(true)}
            />
        }
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
                        src={item.show.image}
                        onPress={() => navigation.navigate(
                            STARGATE_DETAILS,
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

export default connect(state => ({
  movie: state.search.movie,
  data: state.search.data,
}), { searchChange, getMovies })(HomeScreen);

const styles = StyleSheet.create({
  list: {
    flex: 1,
    margin: 10
  }
})