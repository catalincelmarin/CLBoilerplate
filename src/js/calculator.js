import React,{Component} from 'react';
import {NavLink} from "react-router-dom";

export default class Calculator extends Component{
    constructor(props) {
        super(props);
        this.state={
            number:'',
            prevNumber:'',
            currNumber:'',
            operator:'',
            numberMemory:0,
            list:[],
        }
    }

    handleNumber(e){
        let no=this.state.number;
        this.setState({
            number:no+e.target.value
        })
    }

    handleZeroNumber(e){
        let no=this.state.number;
        if (this.state.number!==''){
            this.setState({
                number:no+e.target.value
            })
        }
    }

    handleDecimal(e){
        let no=this.state.number;
        if (this.state.number.indexOf('.')===-1){
            this.setState({
                number:no+e.target.value
            })
        }
    }

    handleClear(){
        this.setState({
            number:''
        })
    }

    handlePlus(){
        this.state.prevNumber=this.state.number;
        this.setState({
            number:'',
            operator:'plus',
        })
    }

    handleMinus(){
        this.state.prevNumber=this.state.number;
        this.setState({
            number:'',
            operator:'minus'
        })
    }

    handleMultiply(){
        this.state.prevNumber=this.state.number;
        this.setState({
            number:'',
            operator:'multiply'
        })
    }

    handleDivide(){
        this.state.prevNumber=this.state.number;
        this.setState({
            number:'',
            operator:'divide'
        })
    }

    handlePercent(){
        this.state.prevNumber=this.state.number;
        this.setState({
            number:parseFloat(this.state.prevNumber)/100
        })
    }

    handleSignChange(){
        if(this.state.number.length>0 || typeof this.state.number==='number'){
            this.setState({
                number:-1*parseFloat(this.state.number)
            })}
    }

    handleEqual(){
        this.state.currNumber=this.state.number;
        if (this.state.operator==='plus'){
            this.setState({
                number:parseFloat(this.state.prevNumber)+parseFloat(this.state.currNumber)
            })
        }else if (this.state.operator==='minus'){
            this.setState({
                number:parseFloat(this.state.prevNumber)-parseFloat(this.state.currNumber)
            })
        }else if (this.state.operator==='multiply'){
            this.setState({
                number:parseFloat(this.state.prevNumber)*parseFloat(this.state.currNumber)
            })
        }else if (this.state.operator==='divide'){
            this.setState({
                number:parseFloat(this.state.prevNumber)/parseFloat(this.state.currNumber)
            })
        }
    }

    render() {
        return (
            <div className={'calculatorWrapper'}>
                <div className={'calculatorUpper'}>
                    <button className={'calcHome'}><NavLink className={'navlink'} to={'/'}>Home</NavLink></button>
                    <div>{this.state.number}</div>
                </div>
                <div className={'calculatorBody'}>
                    <div>
                        <div className="calculatorButton"><button onClick={this.handleClear.bind(this)}>C</button></div>
                        <div className="calculatorButton"><button onClick={this.handleSignChange.bind(this)}>+/-</button></div>
                        <div className="calculatorButton"><button value={'%'} onClick={this.handlePercent.bind(this)}>%</button></div>
                        <div className="calculatorButton-colores"><button value={'÷'} onClick={this.handleDivide.bind(this)}>÷</button></div>
                    </div>
                    <div>
                        <div className="calculatorButton"><button value={7} onClick={this.handleNumber.bind(this)}>7</button></div>
                        <div className="calculatorButton"><button value={8} onClick={this.handleNumber.bind(this)}>8</button></div>
                        <div className="calculatorButton"><button value={9} onClick={this.handleNumber.bind(this)}>9</button></div>
                        <div className="calculatorButton-colores"><button value={'X'} onClick={this.handleMultiply.bind(this)} >X</button></div>
                    </div>
                    <div>
                        <div className="calculatorButton"><button value={4} onClick={this.handleNumber.bind(this)}>4</button></div>
                        <div className="calculatorButton"><button value={5} onClick={this.handleNumber.bind(this)}>5</button></div>
                        <div className="calculatorButton"><button value={6} onClick={this.handleNumber.bind(this)}>6</button></div>
                        <div className="calculatorButton-colores"><button value={'-'} onClick={this.handleMinus.bind(this)}>-</button></div>
                    </div>
                    <div>
                        <div className="calculatorButton"><button value={1} onClick={this.handleNumber.bind(this)}>1</button></div>
                        <div className="calculatorButton"><button value={2} onClick={this.handleNumber.bind(this)}>2</button></div>
                        <div className="calculatorButton"><button value={3} onClick={this.handleNumber.bind(this)}>3</button></div>
                        <div className="calculatorButton-colores"><button value={'+'} onClick={this.handlePlus.bind(this)}>+</button></div>
                    </div>
                    <div>
                        <div className="calculatorButton-large"><button value={0} onClick={this.handleZeroNumber.bind(this)}>0</button></div>
                        <div className="calculatorButton-small"><button value={'.'} onClick={this.handleDecimal.bind(this)}>.</button></div>
                        <div className="calculatorButton-small-colores"><button value={'='} onClick={this.handleEqual.bind(this)}>=</button></div>
                    </div>
                </div>
            </div>
        )
    }
}