/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, Button, AppState, Clipboard } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage';
import fs from 'react-native-fs';
import PictureList from './app/components/PictureList';
import CameraDialog from './app/components/CameraDialog';

export default class App extends Component {
  state = {
    pictureList: [
      {
        id: '1',
        url: 'https://s03.video.glbimg.com/x720/7530370.jpg'
      },
      {
        id: '2',
        url: 'https://s03.video.glbimg.com/x720/7530370.jpg'
      },
      {
        id: '3',
        url: 'https://s03.video.glbimg.com/x720/7530370.jpg'
      }
    ],
    isModalOpen: false
  }

  async componentDidMount() {
    AppState.addEventListener('change', this.appStateOnChange);
    const netInfo = await NetInfo.getConnectionInfo();
    console.log(netInfo);
    console.log(await Clipboard.getString());
    await AsyncStorage.setItem('key', 'texto teste');
    console.log(await AsyncStorage.getItem('key'));
    const path = fs.DocumentDirectoryPath + '/text.txt';
    //fs.writeFile(path, 'texto dentro do arquivo', 'utf8');
    const content = await fs.readFile(path, 'utf8');
    console.log('Arquivo: ', content);
  }

  appStateOnChange = nextState => {
    console.log(nextState);
  }

  onPictureSelect = item => {

  }

  openModal = () => {
    this.setState({isModalOpen: true});
  }

  closeModal = (response) => {
    this.setState({isModalOpen: false});
  }

  render() {
    const { state } = this;
    return (
      <View style={styles.container}>
        <PictureList list={state.pictureList} onClick={this.onPictureSelect}/>
        <View style={styles.footer}>
          <Button 
            onPress={this.openModal}
            title="Nova Foto"
            color="green"
          />
        </View>
        <CameraDialog isOpen={state.isModalOpen} onClose={this.closeModal}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  footer: {
    padding: 15,
    backgroundColor: '#CACACA',
    width: '100%',
    textAlign: 'center'
  }
});
