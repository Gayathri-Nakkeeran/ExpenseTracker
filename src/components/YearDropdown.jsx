
import './YearDropdown.css';
function YearFilter({setYear , getYear}){
    function handleChange(event){
        let year = event.target.value;
        setYear(year);
        getYear(year);
            }
      
   
    let yearArray = [];
    for(let i =2000 ; i<2050 ; i++){
        yearArray.push(i);
    }
    let everyItem = (item)=>{
        return<option>{item}</option>;
    };
    return(
        <div class = "searchSpace">

            <h4 class = 'filterText'>Filter by Year</h4>
            <select class = "yearBox" name="year" onChange={handleChange}>
                <option value="">--</option>
                {yearArray.map(everyItem)}
            </select>
            <br/>
            <br/>
        </div>
    );
}

export default YearFilter;