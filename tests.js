const assert = require('assert');
const balancedBrackets = require('./challenge');

describe('Tests', () => {
  it('balanced_parenthesis_and_square_brackets', () => {
    // Failure message:
    // Method called: balancedBrackets('(hello)[world]')
    assert(balancedBrackets('(hello)[world]') === true);
  });

  it('balanced_brackets', () => {
    // Failure message:
    // Method called: balancedBrackets('{}')
    assert(balancedBrackets('{}') === true);
  });

  it('nested_balanced_brackets', () => {
    // Failure message:
    // Method called: balancedBrackets('[({}{}{})([])]')
    assert(balancedBrackets('[({}{}{})([])]') === true);
  });

  it('unbalanced_with_no_closing', () => {
    // Failure message:
    // Method called: balancedBrackets('(hello')
    assert(balancedBrackets('(hello') === false);
  });

  it('unbalanced_incorrect_nesting', () => {
    // Failure message:
    // Method called: balancedBrackets('([)]')
    assert(balancedBrackets('([)]') === false);
  });

  it('unbalanced_closing_before_opening', () => {
    // Failure message:
    // Method called: balancedBrackets(')(')
    assert(balancedBrackets(')(') === false);
  });
});
