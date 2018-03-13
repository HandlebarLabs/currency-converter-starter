import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';
import { ThemeConsumer } from '../components/Theme';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
});

class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handlePressTheme = (themeColor, changeThemeColor) => {
    changeThemeColor(themeColor);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ThemeConsumer>
        {({ changeThemeColor }) => (
          <ScrollView>
            <StatusBar translucent={false} barStyle="default" />
            <ListItem
              text="Blue"
              onPress={() => this.handlePressTheme(styles.$blue, changeThemeColor)}
              selected
              checkmark={false}
              iconBackground={styles.$blue}
            />
            <Separator />
            <ListItem
              text="Orange"
              onPress={() => this.handlePressTheme(styles.$orange, changeThemeColor)}
              selected
              checkmark={false}
              iconBackground={styles.$orange}
            />
            <Separator />
            <ListItem
              text="Green"
              onPress={() => this.handlePressTheme(styles.$green, changeThemeColor)}
              selected
              checkmark={false}
              iconBackground={styles.$green}
            />
            <Separator />
            <ListItem
              text="Purple"
              onPress={() => this.handlePressTheme(styles.$purple, changeThemeColor)}
              selected
              checkmark={false}
              iconBackground={styles.$purple}
            />
            <Separator />
          </ScrollView>
        )}
      </ThemeConsumer>
    );
  }
}
export default Themes;
