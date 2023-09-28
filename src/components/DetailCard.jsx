import DateBox from './DateBox';
import MoneyBox from './Money';
import './DetailCard.css';
function DetailCard({props}){
    console.log(props);
    return (
        <div class = "DetailCard">
            <div class = 'nextnext'>
        <DateBox props = {props}/>
        <div class= "Expensetitle">
        <p class = "overflow">{props.title}  </p>     
        </div>
        </div>
        
        <MoneyBox props = {props} />
        
        </div>
    );
}
export default DetailCard;