import React from 'react';
import PropTypes from 'prop-types';
import createReactContext from 'create-react-context';

const ThemeContext = createReactContext({
  themeColor: '#4F6D7A',
});

export class ThemeProvider extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };

  state = {
    themeColor: '#4F6D7A',
  };

  changeThemeColor = (themeColor) => {
    this.setState({ themeColor });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          themeColor: this.state.themeColor,
          changeThemeColor: this.changeThemeColor,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const ThemeConsumer = ThemeContext.Consumer;
