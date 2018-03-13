import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { ThemeConsumer } from '../components/Theme';
import { AlertConsumer } from '../components/Alert';

import { changeCurrencyAmount, swapCurrency, getInitialConversion } from '../actions/currencies';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    lastConvertedDate: PropTypes.object,
    isFetching: PropTypes.bool,
    currencyError: PropTypes.string,
    alertWithType: PropTypes.func,
  };

  componentWillMount() {
    this.props.dispatch(getInitialConversion());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currencyError && !this.props.currencyError) {
      this.props.alertWithType('error', 'Error', nextProps.currencyError);
    }
  }

  handleChangeText = (text) => {
    this.props.dispatch(changeCurrencyAmount(text));
  };

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
  };

  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency());
  };

  handleOptionsPress = () => {
    this.props.navigation.navigate('Options');
  };

  render() {
    let quotePrice = '...';
    if (!this.props.isFetching) {
      quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    }

    return (
      <ThemeConsumer>
        {({ themeColor }) => (
          <Container backgroundColor={themeColor}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <Header onPress={this.handleOptionsPress} />
            <KeyboardAvoidingView behavior="padding">
              <Logo tintColor={themeColor} />
              <InputWithButton
                buttonText={this.props.baseCurrency}
                onPress={this.handlePressBaseCurrency}
                defaultValue={this.props.amount.toString()}
                keyboardType="numeric"
                onChangeText={this.handleChangeText}
                textColor={themeColor}
              />
              <InputWithButton
                editable={false}
                buttonText={this.props.quoteCurrency}
                onPress={this.handlePressQuoteCurrency}
                value={quotePrice}
                textColor={themeColor}
              />
              <LastConverted
                date={this.props.lastConvertedDate}
                base={this.props.baseCurrency}
                quote={this.props.quoteCurrency}
                conversionRate={this.props.conversionRate}
              />
              <ClearButton onPress={this.handleSwapCurrency} text="Reverse Currencies" />
            </KeyboardAvoidingView>
          </Container>
        )}
      </ThemeConsumer>
    );
  }
}

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    isFetching: conversionSelector.isFetching,
    currencyError: state.currencies.error,
  };
};

const ConnectedHome = connect(mapStateToProps)(Home);

export default props => (
  <AlertConsumer>{context => <ConnectedHome {...context} {...props} />}</AlertConsumer>
);
