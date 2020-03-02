import React from 'react';
// import logo from './logo.svg';
import './App.css';
import logo from './kasta-logo.png';
import pci from './pci.png';
import mc from './mc.png';
import visa from './visa.png';
import { Paper, Input, TextField, Tooltip, Button, Radio, Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { grey } from '@material-ui/core/colors';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', paddingTop: '5%', backgroundColor: '#7E7E7E'}}>
        <div style={{width: '500px'}}>
          <header style={{display: 'flex', justifyContent: 'space-between', backgroundColor: "#2A2C30", borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
            <div style={{marginLeft: '2%', marginTop: '-1.7%'}}>
              <img style={{width: '30%'}} src={logo} alt="Kasta Logo"></img>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
              <div style={{color: '#737373'}}>До оплати</div>
              <div style={{color: '#CAD3DD'}}>123 284 грн</div>
            </div>
          </header>
          <div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#FFFFFF', paddingBottom: '5%'}}>
            <Paper elevation={3} style={{width: '95%', marginTop: "2%"}}>
              <div>
                <div style={{color: '#3A88FD'}}>Нова картка</div>
                {/* <br /> */}
                Visa, MasterCard
              </div>
              <hr style={{borderTop: "1px dashed #E9EDF1", borderBottom: '0px'}} />
              <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div style={{width: '65%'}}>
                  <div>Номер картки</div>
                  <TextField
                    style={{
                      paddingBottom: '5px'
                      // width: '60%'
                      // height: '30%'
                    }}
                    fullWidth
                    // required
                    // id="filled-required"
                    // label="Required"
                    // defaultValue="Hello World"
                    // variant="filled"
                    variant="outlined"
                    placeholder="#### #### #### ####"
                  />
                </div>
                <div style={{width: '27%'}}>
                  <div>Термін дії</div>
                  <TextField
                    fullWidth
                    // required
                    // id="filled-required"
                    // label="Required"
                    // defaultValue="Hello World"
                    // variant="filled"
                    variant="outlined"
                    placeholder="MM / PP"
                  />
                </div>
              </div>
              <div style={{display: 'flex'}}>
                <div style={{width: '65%'}}>
                  <div>Власник карти</div>
                  <TextField
                    fullWidth
                    // required
                    // id="filled-required"
                    // label="Required"
                    // defaultValue="Hello World"
                    // variant="filled"
                    variant="outlined"
                    placeholder="CARDHOLDER NAME"
                  />
                </div>
                <div  style={{width: '27%'}}>
                  <div style={{display: 'flex'}}>CVV <div style={{borderRadius: "50%", backgroundColor: 'grey', color: 'white', width: '17px', height: '17px', display: 'flex', justifyContent: 'center'}}>?</div></div>
                  <TextField
                    // required
                    // id="filled-required"
                    // label="Required"
                    // defaultValue="Hello World"
                    // variant="filled"
                    variant="outlined"
                    placeholder="XXX"
                  />
                </div>
              </div>
              <hr style={{borderTop: "1px dashed #E9EDF1", borderBottom: '0px'}} />

              {/* <hr style={{borderTop: "1px dashed #E9EDF1", borderBottom: '0px'}} /> */}
              <div style={{display: 'flex', justifyContent: 'center'}}>
                Запам'ятати цю картку
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={state.checkedB}
                    checked={true}
                    // onChange={handleChange('checkedB')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Primary"
              />
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <Button variant="contained" color="secondary">
                  Оплатити 123 284 грн
                </Button>
              </div>
              {/* <button>Оплатити 123 284 грн</button> */}
              <div style={{display: 'flex', justifyContent: 'center'}}>На виконання платежу 00:11:51</div>
            </Paper>
          </div>
          <footer>
            <div style={{backgroundColor: '#FAFAFA', display: 'flex', justifyContent: 'space-around', paddingTop: '3%', paddingBottom: '3%'}}>
              <img src={pci} style={{width: '12%'}} />
              <img src={mc} style={{width: '12%'}} />
              <img src={visa} style={{width: '12%'}} />
            </div>
            <div style={{borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', backgroundColor: '#2A2C30', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={logo} style={{width: '15%'}} /><div style={{color: '#FFFFFF', marginTop: '1.9%', marginLeft: '2px', fontSize: '1.2em', fontWeight: '700'}}>Pay</div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
