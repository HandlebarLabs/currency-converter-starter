export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
export const SWAP_CURRENCY = 'SWAP_CURRENCY';

export const changeCurrencyAmount = amount => ({
  type: CHANGE_CURRENCY_AMOUNT,
  amount: parseFloat(amount),
});

export const swapCurrency = () => ({
  type: SWAP_CURRENCY,
});
