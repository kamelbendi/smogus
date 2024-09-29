import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './Learning.styles';
//import { LearningWrapper } from './Learning.styles';

const Learning = (props) => (
  <View style={styles.LearningWrapper}>
    <Text>Test content</Text>
  </View>
);

Learning.propTypes = {
  // bla: PropTypes.string,
};

Learning.defaultProps = {
  // bla: 'test',
};

export default Learning;
