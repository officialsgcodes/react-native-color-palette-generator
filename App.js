import {View, Text, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Clipboard from '@react-native-clipboard/clipboard';

const App = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    generateColors();
  }, []);

  // #FT54FR
  const getColor = () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .toUpperCase()
      .padStart('2', 0);

  const generateColors = () => {
    let color_temp = [];

    for (let i = 0; i < 3; ++i) {
      const red_color = getColor();
      const green_color = getColor();
      const blue_color = getColor();

      color_temp = [...color_temp, `#${red_color}${green_color}${blue_color}`];
    }

    setColors(color_temp);
  };

  return (
    <View>
      <FlatList
        data={colors}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              Clipboard.setString(item);
              alert(`Color copied - ${item}`);
            }}
            style={{
              backgroundColor: item,
              height: Dimensions.get('window').height / 3,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 22, color: 'white'}}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '28%',
          borderRadius: 10,
          elevation: 5,
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: 'white',
        }}
        onPress={generateColors}>
        <Text style={{fontSize: 19, color: 'black'}}>Generate Colors</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
