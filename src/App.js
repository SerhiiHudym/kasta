import React from 'react';
import './App.css';

import logo from './kasta-logo.png';
import pci from './pci.png';
import mc from './mc.png';
import visa from './visa.png';
import check from './check-green.png';

import {
	Paper,
	TextField,
	Tooltip, Button,
	Radio,
	Checkbox,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	FormControlLabel
} from '@material-ui/core';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
			dialogOpened: false,
			numberError: false,
			expError: false,
			nameError: false,
			cvvError: false,
			numberTip: '',
			expTip: '',
			nameTip: '',
			cvvTip: '',
			height: window.innerHeight.toString() + 'px'
		}
	}

	handleInputCardNumber(e) {
		if (e.target.value.length === 16 && this.state.numberError === true) {
			this.setState({
				numberError: false,
				numberTip: ''
			})
		}

		if (e.target.value.length > 16) {
			e.target.value = e.target.value.slice(0, 16);
		}

		this.setState({
			cardNumber: e.target.value
		})
	}

	handleExpDate(e) {
		if (e.target.value.length > 0 && this.state.expError === true) {
			this.setState({
				expError: false,
				expTip: ''
			})
		}

		this.setState({
			expDate: e.target.value
		})
	}

	handleInputCardHolder(e) {
		if (e.target.value.length > 0 && this.state.nameError === true) {
			this.setState({
				nameError: false,
				nameTip: ''
			})
		}

		e.target.value = e.target.value.toUpperCase()
		this.setState({
			cardHolder: e.target.value
		})
	}

	handleCVV(e) {
		if (e.target.value.length === 3 && this.state.cvvError === true) {
			this.setState({
				cvvError: false,
				cvvTip: ''
			})
		}

		if (e.target.value.length > 3) {
			e.target.value =  e.target.value.slice(0, 3);

			this.setState({
				cardCVV: e.target.value
			})
		}
		this.setState({
			cardCVV: e.target.value
		})
	}

	handleClick() {
		let counter = 0;

		if (this.state.cardNumber === undefined || this.state.cardNumber === '' || this.state.cardNumber.length < 16) {
			this.setState({
				numberError: true,
				numberTip: 'Невірна картка',
			})
		} else {
			counter +=1;
		}

		if (this.state.expDate === undefined || this.state.expDate === '') {
			this.setState({
				expError: true,
				expTip: 'Невірний термін',
			})
		} else {
			counter +=1;
		}

		if (this.state.cardHolder === undefined || this.state.cardHolder === '') {
			this.setState({
				nameError: true,
				nameTip: 'Введіть ПІБ власника картки',
			})
		} else {
			counter +=1;
		}

		if (this.state.cardCVV === undefined || this.state.cardCVV === '' || this.state.cardCVV.length < 3) {
			this.setState({
				cvvError: true,
				cvvTip: 'Введіть CVV',
			})
		} else {
			counter +=1;
		}

		if (counter === 4) {
			this.setState({
				dialogOpened: true
			})
		}

	}

	handleCloseDialog() {
		this.setState({
			dialogOpened: false
		})
	}

	render() {
		return (
			<div className="wrapper" style={{height: this.state.height}}>
				<div style={{width: '500px'}}>
					<header>
						<div className="header-logo">
							<img className="header-logo-img" src={logo} alt="Kasta Logo"></img>
						</div>
						<div className="header-right">
							<div className="header-right-toPay">До оплати</div>
							<div className="header-right-sum">123 284 грн</div>
						</div>
					</header>
					<main>
						<Paper className="paper" elevation={5}>
							<div style={{color: '#3F51B5', display: 'flex'}}>
								<Radio
									value="a"
									name="radio-button-demo"
									checked
									color="primary"
								/>
								<div>
									<div style={{marginTop: '15%'}}>Нова картка</div>
									<div style={{marginTop: '3%', fontSize: '0.8em', color: '#77869B'}}>Visa, MasterCard</div>
								</div>
							</div>
							<hr className="hr1" />
							<div style={{display: 'flex', justifyContent: 'space-around'}}>
								<div style={{width: '65%'}}>
									<div style={{marginBottom: '2%'}}>Номер картки</div>
									<TextField
										style={{
											paddingBottom: '5px',
											appearance: 'none'
										}}
										type='number'
										fullWidth
										onChange={(e) => this.handleInputCardNumber(e)}
										variant="outlined"
										placeholder="#### #### #### ####"
										error={this.state.numberError}
										helperText={this.state.numberTip}
									/>
								</div>
								<div className="w27">
									<div style={{marginBottom: '4%'}}>Термін дії</div>
									<TextField
										fullWidth
										onChange={(e) => this.handleExpDate(e)}
										variant="outlined"
										placeholder="MM / PP"
										error={this.state.expError}
										helperText={this.state.expTip}
									/>
								</div>
							</div>
							<div style={{display: 'flex', justifyContent: 'space-around', marginTop: '3%'}}>
								<div style={{width: '65%'}}>
									<div style={{display: 'flex', marginBottom: '2%'}}>Власник карти <Tooltip arrow placement="top" title="Фамілія і ім'я людини, на яке випущена карта. Для іменних карт - нанесено на карту."><div className="tooltip">?</div></Tooltip></div>
									<TextField
										fullWidth
										onChange={(e) => this.handleInputCardHolder(e)}
										variant="outlined"
										placeholder="CARDHOLDER NAME"
										error={this.state.nameError}
										helperText={this.state.nameTip} // "Введіть ПІБ власника картки"
									/>
								</div>
								<div  style={{width: '27%'}}>
									<div style={{display: 'flex', marginBottom: '4%'}}>CVV <Tooltip arrow placement="top" title="3 цифри, зображених на зворотній стороні карти."><div className="tooltip">?</div></Tooltip></div>
									<TextField
										maxLength="2"
										variant="outlined"
										placeholder="XXX"
										error={this.state.cvvError}
										helperText={this.state.cvvTip}
										onChange={(e) => this.handleCVV(e)}
									/>
								</div>
							</div>
							<hr style={{borderTop: "1px dashed #E9EDF1", borderBottom: '0px', marginTop: '5%', marginBottom: '1%'}} />

							<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1%'}}>
								<FormControlLabel
									style={{marginRight: '0'}}
									control={
										<Checkbox
											checked={true}
											value="checked"
											color="primary"
										/>
									}
								/>
								<div>Запам'ятати цю картку</div>
								<Tooltip arrow placement="top" title="Картка буде прив'язана до акаунту і Вам не потрібно буде заповнювати інформацію знову."><div className="tooltip">?</div></Tooltip>
							</div>
							<div style={{display: 'flex', justifyContent: 'center', marginBottom: '3%'}}>
								<Button variant="contained" color="secondary" style={{textTransform: 'none', width: '70%'}} onClick={() => this.handleClick()}>
									Оплатити 123 284 грн
								</Button>
							</div>
							<div style={{display: 'flex', justifyContent: 'center', marginBottom: '7%', color: '#E1E6EC'}}>На виконання платежу 00:12:33</div>
						</Paper>
					</main>
					<footer>
						<div className="footer-verifying">
							<img src={pci} alt="PCI" className="footer-images" />
							<img src={mc} alt="MasterCard" className="footer-images" />
							<img src={visa} alt="Visa" className="footer-images" />
						</div>
						<div className="kasta-pay-logo-block">
							<img src={logo} alt="Kasta Pay" className="kasta-pay-logo" /><div className="kasta-pay-logo-addition">Pay</div>
						</div>
					</footer>
				</div>
				
				<Dialog
					open={this.state.dialogOpened}
					onClose={() => this.handleCloseDialog()}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title" style={{display: 'flex', justifyContent: 'center'}}>{"Оплата пройшла успішно!"}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description" style={{display: 'flex', justifyContent: 'center'}}>
							<img src={check} width="25%" alt="Success!" />
						</DialogContentText>
					</DialogContent>
					<DialogActions style={{display: 'flex', justifyContent: 'center'}}>
						<Button onClick={() => this.handleCloseDialog()} color="primary">
							Ok
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		)
	}
}

export default App;
