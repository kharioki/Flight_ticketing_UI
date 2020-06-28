import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default BackgroundCurve = ({style}) => {
  return (
    <View style={style}>
      <View style={styles.viewAbove} />
      <Svg height="50%" width="100%" style={styles.svg} viewBox="0 0 1440 320">
        <Path
          fill="#fb7200"
          d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,192C672,181,768,107,864,96C960,85,1056,139,1152,138.7C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  viewAbove: {
    backgroundColor: '#FB7200',
    height: 350,
  },
  svg: {
    position: 'absolute',
    top: 300,
  },
});
