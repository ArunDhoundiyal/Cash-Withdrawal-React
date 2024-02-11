import './index.css'

const DenominationItem = proop => {
  const {amount, onClickWithdraw} = proop
  const {value} = amount
  const onClickButton = () => {
    onClickWithdraw(value)
  }

  return (
    <li>
      <li>
        <button className="button" type="button" onClick={onClickButton}>
          {value}
        </button>
      </li>
    </li>
  )
}

export default DenominationItem
