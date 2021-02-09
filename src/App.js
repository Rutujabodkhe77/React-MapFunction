
import  './MyCss.css';
import Rutuja from './Rutuja.js';


function App()
{

  // cons is constant you can't change this
  const allowedState = 
  [
    { MyCar: "BMW", Owner : "ABC" },
    { MyCar: "TESLA", Owner : "ELON " },
    { MyCar: "TATA", Owner : "RATAN TATA " },
   
  ];
  return(
    <div className="rutuja">
       <h1><b>....This is MApFunction....</b></h1>
      <h1>Select Tag (Dropdown)</h1>
      <select>
              {allowedState.map((i, index) => (
                <option key={i.id}>{i.MyCar}</option>
              ))}
      </select>
     
      <h1>  ol Tag (ordered List)</h1>
      <ol>
              {allowedState.map((i, index) => (
                <li key={i.id}>{i.MyCar}</li>
              ))}
      </ol>

      <h1>ul Tag (unordered List)</h1>
      <ul>
              {allowedState.map((i, index) => (
                <li >{i.MyCar}</li>
              ))}
      </ul>

      <h1>Table</h1>
      <table className="MyTable">
                <tr>

                    <td>Sr No</td> 
                    <td>Name</td>
                    <td>Owner Name</td>
                </tr>
                
            {allowedState.map((i, index) => (
                  <tr>
                <td key={i.id}>{index+1}</td>
                <td key={i.id}>{i.MyCar}</td>
                <td key={i.id}>{i.Owner}</td>
                </tr>
              ))}
      </table>
      <Rutuja />
    </div>
  );
}

export default App;