/* eslint-disable prettier/prettier */
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Gender = (): React.JSX.Element => {
  const {
    container,
    txtGender,
    imgContainer,
    imgWidth,
    containerGender,
    imgView,
    userGenderTxt,
  } = styles;
  const [gender, setGender] = useState<string>('');

  const handleMalePressed = () => {
    setGender('male');
  };
  const handleFemalePressed = () => {
    setGender('female');
  };
  return (
    <View style={container}>
      <Text style={txtGender}>{gender}</Text>
      <View style={imgContainer}>
        <Pressable onPress={handleMalePressed}>
          <View
            style={[
              containerGender,
              gender === 'male' && styles.selectedBorder,
            ]}>
            <View style={imgView}>
              <Image
                style={imgWidth}
                source={{
                  uri: 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-7/512/Male-icon.png',
                }}
              />
            </View>
            <Text style={userGenderTxt}>Male</Text>
          </View>
        </Pressable>

        {/*  Female */}
        <Pressable onPress={handleFemalePressed}>
          <View
            style={[
              containerGender,
              gender === 'female' && styles.selectedBorder,
            ]}>
            <View style={imgView}>
              <Image
                style={imgWidth}
                source={{
                  uri: 'https://static.vecteezy.com/system/resources/previews/000/630/638/original/vector-female-sign-icon-illustration.jpg',
                }}
              />
            </View>
            <Text style={userGenderTxt}>Female</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Gender;

const styles = StyleSheet.create({
  container: {},
  txtGender: {fontSize: 21},
  imgContainer: {
    marginVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerGender: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  imgView: {
    width: 60,
    height: 60,
    padding: 10,
  },
  imgWidth: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  userGenderTxt: {
    fontSize: 21,
    color: '#fff',
    fontWeight: 'condensedBold',
  },
  selectedBorder: {
    borderWidth: 3,
    borderColor: 'blue',
    borderRadius: 12,
  },
});
