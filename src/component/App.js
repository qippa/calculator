import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.clickEvent = this.clickEvent.bind(this);
		this.state = {
			calcul: "",
			value: "",
			result: ""
		};
	}

	clickEvent(e) {
		let newCalcul = this.state.calcul; 
		let newValue = this.state.value;
		let newResult = this.state.result;

		if(isNaN(e) && e !== ".") {
			if(e === "=") {
				newCalcul = ""; 
				newValue = "";
				newResult = eval(eval(this.state.calcul + this.state.value).toFixed(13));
			} else if(e === "C") {
				newCalcul = ""; 
				newValue = "";
				newResult = "";
			} else if(e === "+/-") {
				if(newResult !== "") {
					newValue = eval(newResult * -1);
					newResult = "";
				} else {
					newValue = eval(newValue * -1);
				}
			} else {
				if(newResult !== "") {
					newCalcul = newResult + e;
					newResult = "";
				} else {
					if(newValue === ""){
						newCalcul = newCalcul.replace(/.$/, e);
					} else {
						newCalcul = eval(this.state.calcul + this.state.value) + e;
						newValue = "";
					}
				}
			}
		} else {
			if(newResult !== "") {
				newResult = "";
			}
			newValue += e;
		}

		this.setState({
			calcul: newCalcul,
			value: newValue,
			result: newResult
		});
	}

	render () {
		return (
			<div>
				<div className="screen">
					<div className="calcul">{this.state.calcul}</div>
					<div className="value">{this.state.value}{this.state.result}</div>
				</div>

				<div className="buttons">
					<input type="button" disabled value="(" onClick={ (e) => this.clickEvent("(") }/>
					<input type="button" disabled value=")" onClick={ (e) => this.clickEvent(")") }/>
					<input type="button" value="C" onClick={ (e) => this.clickEvent("C") }/>
					<input type="button" value="/" onClick={ (e) => this.clickEvent("/") }/>
					
					<input type="button" value="7" onClick={ (e) => this.clickEvent("7") }/>
					<input type="button" value="8" onClick={ (e) => this.clickEvent("8") }/>
					<input type="button" value="9" onClick={ (e) => this.clickEvent("9") }/>
					<input type="button" value="X" onClick={ (e) => this.clickEvent("*") }/>

					<input type="button" value="4" onClick={ (e) => this.clickEvent("4") }/>
					<input type="button" value="5" onClick={ (e) => this.clickEvent("5") }/>
					<input type="button" value="6" onClick={ (e) => this.clickEvent("6") }/>
					<input type="button" value="-" onClick={ (e) => this.clickEvent("-") }/>

					<input type="button" value="1" onClick={ (e) => this.clickEvent("1") }/>
					<input type="button" value="2" onClick={ (e) => this.clickEvent("2") }/>
					<input type="button" value="3" onClick={ (e) => this.clickEvent("3") }/>
					<input type="button" value="+" onClick={ (e) => this.clickEvent("+") }/>

					<input type="button" value="+/-" onClick={ (e) => this.clickEvent("+/-") }/>
					<input type="button" value="0" onClick={ (e) => this.clickEvent("0") }/>
					<input type="button" value="," onClick={ (e) => this.clickEvent(".") }/>
					<input type="button" value="=" onClick={ (e) => this.clickEvent("=") }/>
				</div>
			</div>
		);
	};
}

export default App;