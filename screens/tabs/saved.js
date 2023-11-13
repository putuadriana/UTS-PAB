import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Box, Center, NativeBaseProvider } from 'native-base';

const SavedScreen = () => {
  const [savedItems, setSavedItems] = useState([
    {
      id: 1,
      title: 'Piggies Cake',
      descriptions: ['Regular Cake', 'RP. 350.000'],
      image: require('../../assets/regular4.jpeg')
    },
    {
      id: 2,
      title: 'Coams Cake',
      descriptions: ['Small Cake', 'RP. 159.000'],
      image: require('../../assets/small1.jpeg')
    },
    {
      id: 3,
      title: 'Dreina Cake',
      descriptions: ['Medium Cake', 'RP. 290.000'],
      image: require('../../assets/medium3.jpeg')
    },
  ]);

  const toggleBookmark = (itemId) => {
    setSavedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, bookmarked: !item.bookmarked } : item
      )
    );
  };

  return (
    <NativeBaseProvider>
      <Center marginTop={10}>
      <Text style={{ fontSize: 30, marginBottom: 16, fontWeight: 'bold', color: '#89580A'}}>Saved Items</Text>
        {savedItems.map((item) => (
          <Box
            key={item.id}
            flexDirection="row"
            alignItems="center"
            marginTop={5}
            backgroundColor="white"
            borderRadius={8}
            padding={8}
            width={350}
            height={160}
            shadow={5}
            onPress={() => toggleBookmark(item.id)}
          >
            <Image source={item.image} style={{ width: 80, height: 80, marginRight: 15 }} />
            <View>
              <Text fontSize={16} marginBottom={2} fontWeight="bold" color="black">
                {item.title}
              </Text>
              <Text style={{fontSize:12, color:"#89580A", marginBottom:10}}>
                {item.descriptions[0]}
              </Text>
              <Text style={{fontSize: 12, fontWeight:"bold"}}>
                {item.descriptions[1]}
              </Text>
            </View>
            <Ionicons
              style={{ marginLeft: 'auto' }}
              name={item.bookmarked ? 'bookmark' : 'bookmark-outline'}
              size={28}
              color={item.bookmarked ? 'black' : 'black'}
              onPress={() => toggleBookmark(item.id)}
            />
          </Box>
        ))}
      </Center>
    </NativeBaseProvider>
  );
}

export default SavedScreen;