import React,{useState} from "react";
import ReactDOM from "react-dom";
import Grid from './grid';
import Modal from 'react-modal';
import "./styles.css";

let initialArr = [];
  for(let i=0;i<6;i++){
    let tempArr=[]
    for(let j=0;j<7;j++){
      tempArr.push(false);
    }
    initialArr.push(tempArr);
  };
console.log(initialArr);

const customStyles = {
  content : {
    top                   : '50px',
    left                  : '50px',
    right                 : '20px',
    bottom                : '20px',
  }
};

const App =()=> {

  const RenderCell=(props)=>{
    const backgroundColor = clickedRows[props.row.id][props.value/20]  ? "green" : "blue"
    return <div style={{ backgroundColor }}>props.value</div>
  } 

  const columns = [
    {key:"id",name:"ROW"},
    { key: "sports", name: "SPORTS",formatter: RenderCell },
    { key: "politics", name: "POLITICS",formatter: RenderCell},
    { key: "countries", name: "COUNTRIES",formatter: RenderCell},
    { key: "something1", name: "SOMETHING1",formatter: RenderCell},
    { key: "something2", name: "SOMETHING2",formatter: RenderCell},
    { key: "something3", name: "SOMETHING3",formatter: RenderCell}
  ];
  
  const rows = [
    { id: 0, sports: 20, politics: 20 ,countries: 20,something1:20, something2:20, something3:20},
    { id: 1, sports: 40, politics: 40 ,countries: 40,something1:40, something2:40, something3:40 },
    { id: 2, sports: 60, politics: 60 ,countries: 60,something1:60, something2:60, something3:60 },
    { id: 3, sports: 80, politics: 80 ,countries: 80,something1:80, something2:80, something3:80 },
    { id: 4, sports: 100, politics: 100 ,countries: 100,something1:100, something2:100, something3:100},
  ];


  const [clickedRows,setClickedRows]  = useState(initialArr);
  const [isModelOpen,setIsModelOpen] = useState(false);
  const handleCellSelect=(cellInfo)=>{
    console.log(cellInfo)
    if(cellInfo.colId===0||clickedRows[cellInfo.rowId][cellInfo.colId]){return ;}
    const newClickedRows = JSON.parse(JSON.stringify(clickedRows));
    newClickedRows[cellInfo.rowId][cellInfo.colId]=true;
    setClickedRows(newClickedRows);
    setIsModelOpen(true);
  };
  
    return (
      <React.Fragment>
      <Grid
      rows={rows}
      clickedRows={clickedRows}
      columns={columns}
      handleCellSelect={handleCellSelect}
      />
      <Modal 
      isOpen={isModelOpen}
      style={customStyles}
      onRequestClose={()=>setIsModelOpen(false)}
      />
      </React.Fragment>
    )
  };

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
