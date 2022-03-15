import React, { Component } from 'react';
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Image,
  ScrollView,
  Modal
} from 'react-native';
import CounterFunction from './Components/CounterFunction';
import CounterClass from './Components/CounterClass';
import styles from './Components/Styles';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input : "",
      modalVisible: false,
      images : [],
      mainImage: "",
    }
  }

  vibrate = () => {
    Vibration.vibrate(10);
  }

  openModal = (image) => {
    this.vibrate();
    this.setState({modalVisible:true});
    this.setState({mainImage:image})
  }

  componentDidMount = () => {
    fetch("http://192.168.1.68:3001/images",{method:'GET'}).then(res => res.json())
      .then(data => {
        this.setState({images:data});
      }
    );
  }

  enviar = () => {
    fetch("http://192.168.1.68:3001/enviar", {
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        input : this.state.input
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Modal visible={this.state.modalVisible} animationType="slide" transparent={true}>
          <View style={[styles.fullSize, styles.center]}>
            <View style={[styles.modal, styles.lightBackground, styles.rounded]}>
              <Image style={[styles.fullSize, styles.rounded]} source={{ uri:this.state.mainImage }} />
              <View style={[styles.rightTop, {padding:5}]}>
                <TouchableOpacity style={[styles.button, styles.greenBackground, styles.rounded]}>
                  <Text style={styles.lightColor}>Download</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.redBackground, styles.rounded]} onPress={()=>{this.setState({modalVisible:false})}}>
                  <Text style={styles.lightColor}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.header}>
          <TextInput onChangeText={(e)=>{this.setState({input:e})}} style={[styles.textInput, styles.lightBackground, styles.rounded]} placeholder='Digite aqui...' />
          <TouchableOpacity onPress={()=>{this.enviar()}} style={[styles.button, styles.yellowBackground, styles.rounded]}>
            <Text>OK</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={styles.cardContainer}>
            <View style={[styles.card, styles.lightBackground, styles.center, styles.rounded]}>
              <Text>Uso do state em função</Text>
              <CounterFunction ButtonAction={this.vibrate} ButtonStyle={[styles.button,styles.yellowBackground,styles.rounded]} NumberStyle={styles.h1} />
            </View>

            <View style={[styles.card, styles.lightBackground, styles.center, styles.rounded]}>
              <Text>Uso do state em classe</Text>
              <CounterClass ButtonAction={this.vibrate} ButtonStyle={[styles.button,styles.yellowBackground,styles.rounded]} NumberStyle={styles.h1} />
            </View>

            {this.state.images.map((imgs, index) => 
              <View key={index} style={styles.imagesContainer}>
                <Image style={[styles.fullSize, styles.rounded]} source={{uri:imgs.url}} />
                <TouchableOpacity onPress={()=>{this.openModal(imgs.url)}} style={[styles.button,styles.yellowBackground,styles.rounded,styles.rightBottom]}>
                  <Text>Ver mais</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>

      </View>
    );
  }
}