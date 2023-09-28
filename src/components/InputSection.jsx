import {useState ,  useEffect} from 'react';
import './InputSection.css';
import DetailCard from './DetailCard';
import YearDropDown from './YearDropdown';

// Component for entire input section
function GetInput(){
    
    const[fullDetail , setFullDetail] = useState([]);
    const[filteredData , setFilteredData] = useState([]);
    const [selectedYear , setYear] = useState();    
    const [details , setDetails] = useState(
        {title:'',
        money:'',
        date:'' , } );

    useEffect(() => { getYear(selectedYear);  }, [fullDetail]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value });
        
      };
        
    const handleSubmit = (e) => {
      e.preventDefault();
      document.getElementById("storeForm").reset();         
      setFullDetail(()=>(            
        [...fullDetail , details]));            
    };

    function getYear(year){        
    if(year)             
      setFilteredData(fullDetail.filter((eachData)=>{let datezs = new Date(eachData.date); console.log(datezs.getFullYear()); return datezs.getFullYear() == year;}))           
      else{setFilteredData(fullDetail);}
    }

  
    return(
        <>
        <div class = 'inputSection'>
        <form id = "storeForm" class = "storeDataForm" onSubmit = {handleSubmit}>
        <label for="title">Title: </label>
        <input defaultValue = "" type="text " id="title" name="title" onChange = {handleInputChange}  maxLength="30" required/>
        <label for="amount">Amount: </label>
        <input defaultValue="" type="number" id="amount" name="money" min = "1" onChange = {handleInputChange} required />
        <label for="date">Date: </label>
        <input defaultValue="" type="date" id="date" name="date" onChange = {handleInputChange} required/>
        <br/><br/>
        <input class = "submitButton" type= "submit" value = "Add Expense"/>
      </form>
      </div>
      <br/>
      <br/>
      
      {/* Child Component for year filter */}
      <YearDropDown {...{setYear , getYear} }/>
      <div >
      {filteredData.map((item , index)=>[
        <DetailCard key = {index} props = {item}/>

      ])}

      </div>     
      </>
        );
}

export default GetInput;