# GENERAL

Token Name: CoinPays
Token Symbol: CPY
Token Decimal: 18
Token Total Supply: 100_000_000

More info : 
https://docs.coinpays.io
https://docs.coinpays.io/cpy-token
https://docs.coinpays.io/tokenomics

# FUNCTIONS

## totalSupply()

totalSupply() → uint256

Returns the amount of tokens in existence.

## balanceOf(account)

balanceOf(address account) → uint256

Returns the amount of tokens owned by account.

## transfer(recipient, amount)

transfer(address recipient, uint256 amount) → bool

Moves amount tokens from the caller’s account to recipient.

Returns a boolean value indicating whether the operation succeeded.

Emits a Transfer event.

## allowance(owner, spender)

allowance(address owner, address spender) → uint256

Returns the remaining number of tokens that spender will be allowed to spend on behalf of owner through transferFrom. This is zero by default.

This value changes when approve or transferFrom are called.

## approve(spender, amount)

approve(address spender, uint256 amount) → bool

Sets amount as the allowance of spender over the caller’s tokens.

Returns a boolean value indicating whether the operation succeeded.

## transferFrom(sender, recipient, amount)

transferFrom(address sender, address recipient, uint256 amount) → bool

Moves amount tokens from sender to recipient using the allowance mechanism. amount is then deducted from the caller’s allowance.

Returns a boolean value indicating whether the operation succeeded.

Emits a Transfer event.

# EVENTS

Transfer(from, to, value)

Approval(owner, spender, value)

OwnershipTransferred(previous, new)

# CONSTRUCTOR

constructor(string _name, string _symbol, uint8 _decimals, uint256 _totalSupply)

Sets the values for name, symbol, decimals and total supply. All three of these values are immutable: they can only be set once during construction.

# ARC20

Implementation of the IARC20 interface.

This implementation is agnostic to the way tokens are created. This means that a supply mechanism has to be added in a derived contract using _mint. Technically the same as ARC20, although there is no change.

# IARC20

Interface of the ERC20 standard as defined in the EIP. Does not include the optional functions. Technically the same as IARC20, although there is no change.
