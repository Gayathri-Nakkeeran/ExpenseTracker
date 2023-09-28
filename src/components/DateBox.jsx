// Small box component to display month year and date inside detail card
import './DateBox.css';

// Component declaration --> Have particular card's date as props
function DateBox({props}){
    let date = new Date(props.date);
    //Convert month number to name
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    return(
        <div class = "dateBox"> 
           {/* Month Display */}
           <div class="month">
           {monthNames[date.getMonth()]}
           </div>
           {/* Year display --  or use getFullYear */}
           <div class="year">
           {date.getYear() + 1900}
           </div>          
          {/* Date display */}
          <div class = "date">
          {date.getDate()}
          </div>         
          
        </div>
    );
}
export default DateBox;
