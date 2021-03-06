import React from 'react';
import '../styles/Styles.css'

class Board extends React.Component {
   


    handleFire(xC, yC){ 
        this.props.handler(xC, yC);
    }

    getClasses(xC, yC) {
         let classes = ' ';
         if (this.props.board[xC][yC] === '*'){
            classes += 'miss noHover';
         }
         if (this.props.board[xC][yC] === '!'){
            classes += 'sunken noHover';
         }
         if (this.props.board[xC][yC] === '@'){
            classes += 'hit noHover';
         } 
         if (this.props.board[xC][yC] === '#'){
            classes += 'sunkenBorder noHover';
         } 
         if (typeof this.props.board[xC][yC] === 'object' && this.props.isCpu === false){
            classes += 'ship';
         } 

        return classes;
    
    }

    getDisabled(xC, yC) {
        if (this.props.board[xC][yC] === '*' || this.props.board[xC][yC] === '!' || this.props.board[xC][yC] === '@' || this.props.board[xC][yC] === '#'){
            return true
        } else return false;
    }



    render(){

        
        return(
            <div className='col-xs' style= {{minWidth: '424px', width: '424px', height:'400px', minHeight:'400px'}}>
                {this.props.board.map((row, i) => row.map((col, j) => {
                    return (
                        this.props.isCpu ?  
                        <button disabled={this.getDisabled(i, j)} className={'col boardButton' + this.getClasses(i, j)} onClick={() => this.handleFire(i, j)} style= {{maxWidth :'40px', maxHeight:'40px'}}></button>
                         :
                         <button onDrop={(e)=>this.props.dropper(e, i, j)} onDragOver={(e) => e.preventDefault()} className={'col boardButton' + this.getClasses(i, j)}></button>
                    )
                }))}
            </div>
        )
    }


}

export default Board;
