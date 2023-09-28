import './Money.css';
function MoneyBox({props}){
    return (
       <div class = "moneyBox">
       
       {props.money}
       </div>

    );
}
export default MoneyBox;