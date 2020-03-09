import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import * as serviceWorker from './serviceWorker';
//import { breakStatement } from '@babel/types';

// class Menu extends React.Component{
//     render() {
//         return <div className="menu"> 
//             <img src='/CalPolyLogo.png' alt='Cal Poly Logo'/>
//             <h1>CLUB SPORTS HUB</h1>
//             <a class="active" href="#home">LOGIN</a>
//             <a href="#news">FORMS</a>
//             <a href="#contact">SPORTS</a>
//             <a href="#about">CALENDAR</a>
//             <a href="#home">HOME</a>
//         </div>; 
//     }
// }

// class Title extends React.Component {
//     render() {
//       return <div className="title"> 

//       <h3>CAL POLY CLUB SPORTS</h3>
//     </div> 
//     }
//   }

// class PlaceHolderImage extends React.Component{
//     render(){
//         return <div className="placeholderImage">
//             <img src='/PlaceHolderImage.jpg' alt= 'Placeholder'></img>
//         </div>;
//     }
// }

// class Info extends React.Component{
//     // TODO: Make text wrap instead of having breaks
//     render(){
//         return <div className="info"> 
//             <div id="rectangle" ></div>
//             <h1>TEAM OF THE WEEK</h1>
//             <h2>WOMEN'S <br/>RUGBY</h2>
//             <h3>Follow them and <br/>
//                 come to their home <br/>
//                 game on Saturday <br/>
//                 February 8th!</h3>
//             <img src='/PlaceHolderImage.jpg' alt='Team of the week'></img>
//             <a href="https://instagram.com">
//             <img src='/instagram.png' class='instagramIcon' alt='Instagram'></img>
//             </a>
//         </div>
//     }
// }

// class HomePage extends React.Component{
//     render(){
//         return <div>
//             <Menu/>
//             <Title/>
//             <PlaceHolderImage/>
//             <Info/>
//         </div>;
//     }
// }

//---------------------------------------------
class Login extends React.Component{
    constructor() {
        super();
        this.state = {
          username: '',
          password: '',
          error: '',
        };
    
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
      }
    
      dismissError() {
        this.setState({ error: '' });
      }
    
      handleSubmit(evt) {
        evt.preventDefault();
    
        if (!this.state.username) {
          return this.setState({ error: 'Username is required'});
        }
    
        if (!this.state.password) {
          return this.setState({ error: 'Password is required' });
        }
    
        return this.setState({ error: '' });
      }
    
      handleUserChange(evt) {
        this.setState({
          username: evt.target.value,
        });
      };
    
      handlePassChange(evt) {
        this.setState({
          password: evt.target.value,
        });
      }
    
      render() {
        //<img src='/login.jpg' alt= 'LoginImage'></img>
        return (
          <div className="login">
            <form onSubmit={this.handleSubmit}>
              {
                this.state.error &&
                <h3 data-test="error" style={{color:'red', fontFamily: 'Roboto', fontStyle:'bold'}} onClick={this.dismissError} >
                  {this.state.error}
                </h3>
              }
              <label classname= 'label'>User Name</label><br/>
              <input type="text" style={{borderColor:'black', borderWidth:1, backgroundColor: 'rgba(196, 196, 196, 0.9)'}} data-test="username" value={this.state.username} onChange={this.handleUserChange}/>
              <br/>
              <label>Password</label><br/>
              <input type="password" style={{borderColor:'black', borderWidth:1, backgroundColor: 'rgba(196, 196, 196, 0.9)'}} data-test="password" value={this.state.password} onChange={this.handlePassChange}/>
              <br/><br/>
              <input type="submit" value="LOGIN" data-test="submit" />
              <br/><br/>
              <label>New User </label><br/><br/>
              <label>Forgot Password</label>

            </form>
          </div>
        );
      }
}


//ReactDOM.render(<HomePage/>, document.getElementById('root'));


ReactDOM.render(<Login/>, document.getElementById('root'));

serviceWorker.unregister();
