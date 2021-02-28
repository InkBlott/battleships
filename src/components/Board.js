import React from 'react';
import '../styles/Styles.css'
import classNames from 'classnames'



class Board extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            board: props.boardMaker.board,
        }

    }

    
    
    
    // handleFire(xC, yC){ 
    //     let turn = true;
    //     if(typeof this.state.board[xC][yC] !== 'object'){
    //         turn = false;
    //     }
    //     this.props.player.fire(this.props.boardMaker, xC, yC);
    //     while(turn ===false) {
    //         this.props.enemy.fire(this.props.pBoard);
    //         if(typeof this.)

    //     }
    //     this.setState({board: this.props.boardMaker.board});      
    // }

    handleFire(xC, yC){ 
        this.props.handler(xC, yC);
        this.setState({board: this.props.boardMaker.board})   
    }

    getClasses(xC, yC) {
         let classes = ' ';
         if (this.state.board[xC][yC] === '*'){
            classes += 'miss noHover';
         }
         if (this.state.board[xC][yC] === '!'){
            classes += 'sunken noHover';
         }
         if (this.state.board[xC][yC] === '@'){
            classes += 'hit noHover';
         } 
         if (this.state.board[xC][yC] === '#'){
            classes += 'sunkenBorder noHover';
         } 
        return classes;
    }

    getDisabled(xC, yC) {
        if (this.state.board[xC][yC] === '*' || this.state.board[xC][yC] === '!' || this.state.board[xC][yC] === '@' || this.state.board[xC][yC] === '#'){
            return true
        } else return false;
    }

     render(){

        
        return(
            <div className='container' style= {{minWidth: '424px', width: '424px', height:'400px', minHeight:'400px'}}>
                {this.state.board.map((row, i) => row.map((col, j) => {
                    return (
                        this.props.isCpu ?  
                        <button hover={false} disabled={this.getDisabled(i, j)} className={'col boardButton' + this.getClasses(i, j)} onClick={() => this.handleFire(i, j)} style= {{maxWidth :'40px', maxHeight:'40px'}}></button>
                         :
                         <button className='col boardButton'>{this.state.board[i][j]}</button>
                    )
                }))}
            </div>
        )
    }


}

export default Board;
