import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './Discounts.styles';
//import { DiscountsWrapper } from './Discounts.styles';

const Discounts = (props) => (
  <View style={styles.DiscountsWrapper}>
    <Text>Test content</Text>
  </View>
);

Discounts.propTypes = {
  // bla: PropTypes.string,
};

Discounts.defaultProps = {
  // bla: 'test',
};

export default Discounts;
