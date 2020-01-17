import React from 'react';

const Grid=({rows,columns,clickedRows,handleCellSelect})=>{
    const RenderRowHeaders=()=>{
        return  columns.map((column)=>{
        return<div style={{borderWidth:'2px',width:'100%',justifyContent:'center',display:'flex',borderStyle:'groove'}} key={column.key}>{column.name}</div>
        })
    }
   const  RenderData=()=>{
        return rows.map(row=>{
            return (
                <div key={row.id} style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                {columns.map((column,index)=>{
                    let backgroundColor='white'
                    if(clickedRows[row.id][index]){
                        backgroundColor='#929191'
                    }
                return <div key={`${row.id}${column.key}`} 
                onClick={()=>handleCellSelect({rowId:row.id,colId:index})}
                style={{display:'flex',width:'100%',backgroundColor:backgroundColor,
                justifyContent:'center',borderStyle:'groove'}}>
                    {row[column.key]}</div>
                })}
                </div>
            )     
        })
    }
return(
    <React.Fragment>
        <div style={{display:'flex',width:'100%',flexDirection:'row',justifyContent:'space-around'}}>
        {RenderRowHeaders()}
        </div>
        {RenderData()}
    </React.Fragment>
)
}

export default Grid