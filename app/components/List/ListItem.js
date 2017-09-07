import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';
import Icon from './Icon';

const ListItem = ({
  text,
  onPress,
  checkmark = true,
  selected = false,
  visible = true,
  customIcon = null,
  iconBackground,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected
        ? <Icon visible={visible} checkmark={checkmark} iconBackground={iconBackground} />
        : <Icon />}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  checkmark: PropTypes.bool,
  selected: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

export default ListItem;
