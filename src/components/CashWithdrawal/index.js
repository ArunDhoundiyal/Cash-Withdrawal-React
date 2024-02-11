import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onClickWithdraw = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="user-name-container">
            <span className="s-round-logo">S</span>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="style-balance">Your Balance</p>
            <div>
              <p className="total-amount">{balance} </p>
              <br />
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="style-withdraw">Withdraw</p>
          <p className="style-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="button-container">
            {denominationsList.map(numberArray => (
              <DenominationItem
                onClickWithdraw={this.onClickWithdraw}
                amount={numberArray}
                key={numberArray.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
