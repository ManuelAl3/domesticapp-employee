import React, { Component, useState, useEffect } from 'react';
import {
  View, Button,
  StatusBar,StyleSheet,
  TextInput,Image, Platform,
  Animated,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { BASE_URI } from '../../../config';
import axios, {patch} from 'axios';
import { AuthContext } from '../../context/auth-context';

const ReportScreen = () => {
  const [user, setUser] = React.useState(null);
  const auth = React.useContext(AuthContext);
  React.useEffect(() => {
    setUser(auth.getState().user.data)
  },[]);
  useEffect( async ()=>{
    if(Platform.OS !== 'web'){
      const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if(status !== 'granted'){
        alert('Permission denied!');
      }
    }
  }, [])
  const [value, setValue] = useState(null)
  const [form, setForm] = useState({
    name: "",
  });
  function handleFormChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }
const PickImage = async () =>{
  
  const url = `${BASE_URI}/employees/${user.id}`

  
  const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4,3],
    quality: 1
  })
  console.log(result);
  if (!result.cancelled) {
    let image;
    image.uri = result.uri;
    image.name = "TEST.jpg";
    image.type = image.mime;
    image.dateModified = new Date();
    const formData = new FormData();
    formData.append("cover", image, image.uri);
  
    //formData.append("cover", result.uri);
  
    setValue(result.uri)
    return  patch(url, formData,config)
  }
  
}
  return (
    <View style={{ flex: 1, padding: 30, backgroundColor: '#f5fcff' }}>
      <StatusBar hidden />
      <FloatingLabelInput
          id="name"
          name="name"
          label="Motivo de incapacidad"
          value={form.name}
          onChange={handleFormChange}
        />
      <Button title="Choose Image" onPress={PickImage}/>
      {value && <Image source={{uri: value}} style={{width: 100 , height: 100 }}/>}
    </View>
  );
};

class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
  };

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 200,
    }).start();
  }

  render() {
    const { label, ...props } = this.props;
    const { isFocused } = this.state;
    const style = defaultStyles;
    const animatedLabelStyle = {
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 12],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#888', '#888'],
      }),
    };
    return (
      <View style={{ paddingTop: 18 }}>
        <Animated.Text style={[style.labelStyle,animatedLabelStyle]}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          style={[style.textInput,isFocused&&style.focusedTextInput]}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
          selectionColor={style.selectionColor}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

const defaultStyles = {
  labelStyle: {
    position: 'absolute',
      left: 0,
  },
  textInput: {
      height: 20, 
      fontSize: 15, 
      color: '#000', 
      borderBottomWidth: 1, 
      borderBottomColor: '#aaa'
    },
    focusedTextInput: {
      borderBottomWidth: 2, 
      borderBottomColor: 'red'
    },
    selectionColor: 'red',
}
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
});
export default ReportScreen;
