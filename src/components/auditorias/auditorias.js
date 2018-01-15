//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, FlatList } from 'react-native';

// create a component
export const Auditorias = () => {
/*_pressButton() {
    Alert.alert('You tapped the button!')
  }*/

        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{height: 24, backgroundColor: 'grey'}} />
            <View style={{height: 60}}>
              <Image style={styles.logo} source={require('./../../../assets/logo.png')} />
              <TouchableHighlight
                style={styles.user}
                onPress={this._pressButton}
                underlayColor= 'transparent'>
                <Image
                  style={styles.userImg}
                  source={require('./../../../assets/user.png')}
                />
              </TouchableHighlight>
            </View>
            <Text style={styles.info}>Selecciona la auditoría que deseas aplicar</Text>
            <FlatList style={styles.container}
              data={[
                {title: 'Título de la auditoría', name: 'Nombre de la empresa'},
                {title: 'Título de la auditoría', name: 'Nombre de la empresa'},
                {title: 'Título de la auditoría', name: 'Nombre de la empresa'},
                {title: 'Título de la auditoría', name: 'Nombre de la empresa'},
                {title: 'Título de la auditoría', name: 'Nombre de la empresa'},
                {title: 'Título de la auditoría', name: 'Nombre de la empresa'},
                {title: 'Título de la auditoría', name: 'Nombre de la empresa'}
              ]}
              renderItem={({item}) =>
                <View style={styles.item}>
                  <View>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemCompany}>{item.name}</Text>
                  </View>
                  <Image
                    style={styles.check}
                    source={require('./../../../assets/unchecked.png')}
                  />
                </View>
              }
            />
            <View style={{alignItems: 'center', flexDirection: 'row', height: 63, justifyContent: 'center'}}>
              <TouchableHighlight
                style={styles.refresh}
                onPress={this._pressButton}
                underlayColor= 'transparent'>
                <Image
                  style={styles.refreshImg}
                  source={require('./../../../assets/refresh.png')}
                />
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.upload}
                onPress={this._pressButton}
                underlayColor= 'transparent'>
                <Image
                  style={styles.uploadImg}
                  source={require('./../../../assets/arrow_up.png')}
                />
              </TouchableHighlight>
            </View>
          </View>
        );
}

// define your styles
const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        height: 29,
        top: 17,
        width: 75
      },
      user: {
        alignSelf: 'flex-end',
        bottom: 10,
        height: 25,
        marginRight: 14,
        width: 30
      },
      userImg: {
        height: '100%',
        width: '100%'
      },
      info: {
        color: '#757779',
        fontSize: 16,
        margin: 20,
        textAlign: 'center'
      },
      container: {
        flex: 1,
        paddingBottom: 25,
        paddingHorizontal: 25,
        paddingTop: 5
      },
      item: {
        alignItems: 'center',
        backgroundColor: '#1aacb4',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        width: '100%'
      },
      itemTitle: {
        color: 'white',
        fontSize: 16
      },
      itemCompany: {
        color: 'white',
        fontSize: 12
      },
      check: {
        alignSelf: 'flex-end',
        height: 35,
        width: 35
      },
      refresh: {
        height: 40,
        marginHorizontal: 8,
        width: 40
      },
      refreshImg: {
        height: '100%',
        width: '100%'
      },
      upload: {
        alignItems: 'center',
        backgroundColor: '#82b430',
        borderRadius: 100,
        flexDirection: 'row',
        height: 35,
        marginHorizontal: 8,
        paddingHorizontal: 14,
        width: 158
      },
      uploadImg: {
        height: 19,
        width: 21
      }
});

//make this component available to the app
export default Auditorias;
