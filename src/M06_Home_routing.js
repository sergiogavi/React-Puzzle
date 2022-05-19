import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';




const estils = StyleSheet.create({
  contenidor: {
    flex: 1,
    backgroundColor: '#0f0'
  }
});

export class M06_Home extends React.Component {

  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Pantalla Home</Text>
         
          <Button
            title="Anar a Camera"
            onPress={() => this.props.navigation.navigate('App')}
          />
           <Button
            title="Ayuda"
            onPress={() => this.props.navigation.navigate('Ayuda')}
          />
            <Button
            title="Juego"
            onPress={() => this.props.navigation.navigate('Juego')}
          />

            <Button
            title="Puntuaciones"
            onPress={() => this.props.navigation.navigate('Puntuaciones')}
          />
         <Button
            title="Anar a Mapes"
            onPress={() => this.props.navigation.navigate('Mapes')}
          />
          <Button
            title="Anar a SQLite"
            onPress={() => this.props.navigation.navigate('SQLite')}
          />
        </View>
      );

    }
}