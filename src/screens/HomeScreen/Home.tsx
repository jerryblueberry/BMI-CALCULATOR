/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamsList} from '../../../StackNavigator';
import Gender from '../../components/GenderComponent/Gender';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'Home'>;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = ({navigation}: HomeScreenProps): React.JSX.Element => {
  // console.log('Home');
  const {container, subContainer, txtHeader} = styles;
  return (
    <View style={container}>
      <View style={subContainer}>
        <Text style={txtHeader}>BMI Calculator</Text>
      </View>

      {/*  Gender Component */}
      <Gender />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  subContainer: {
    alignItems: 'center',
  },
  txtHeader: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'condensedBold',
    letterSpacing: 1,
  },
});
