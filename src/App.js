import React from 'react';
import './App.css';

class MasterForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentStep: 1,
      email : '',
      username: '',
      password: ''
    }
  }

  next(){
    let currentStep = this.state.currentStep;
    this.setState({currentStep: currentStep + 1});
  }

  prev(){
    let currentStep = this.state.currentStep;
    this.setState({currentStep: currentStep - 1});
  }

  previousButton(){
    let currentStep = this.state.currentStep;
    if (currentStep > 1) {
      return (
        <button 
          className='btn btn-secondary' 
          type='button' 
          onClick={this.prev.bind(this)}
        >Previous</button>
      )
    }
    return null;
  }

  nextButton(){
    let currentStep = this.state.currentStep;
    if (currentStep < 3){
      return (
        <button
          className='btn btn-primary float-right' 
          type='button' 
          onClick={this.next.bind(this)}
        >Next</button>
      )
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration details:\n
            Email: ${email}\n
            Username: ${username}\n
            Password: ${password}`);
  }

  render(){
    return (
      <div className='wizard'>
        <h1>React Wizard Form🧙</h1>
        <p>Step {this.state.currentStep}</p>
        <form onSubmit={this.handleSubmit}>
          <StepOne currentStep={this.state.currentStep} handleChange={this.handleChange} email={this.state.email}/>
          <StepTwo currentStep={this.state.currentStep} handleChange={this.handleChange} username={this.state.username}/>
          <StepThree currentStep={this.state.currentStep} handleChange={this.handleChange} password={this.state.password}/>
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </div>
    );
  }
}

class StepOne extends React.Component{
  render(){
    if (this.props.currentStep === 1){
      return (
        <div className='form-group'>
          <input 
            className='form-control'
            placeholder='Email'
            id='email'
            name='email'
            type='text'
            value={this.props.email}
            onChange={this.props.handleChange}
          />  
        </div>
      );
    }
    return null;
  }
}

class StepTwo extends React.Component{
  render(){
    if (this.props.currentStep === 2){
      return (
        <div className='form-group'>
          <form>
            <input 
              className='form-control'
              placeholder='Username'
              id='username'
              name='username'
              type='text'
              value={this.props.username}
              onChange={this.props.handleChange}
            />
          </form>
        </div>
      );
    }
    return null;
  }
}

class StepThree extends React.Component{
  render(){
    if (this.props.currentStep === 3){
      return (
        <React.Fragment>
          <div className='form-group'>
            <form>
              <input 
                className='form-control'
                placeholder='Password'
                id='password'
                name='password'
                type='text'
                value={this.props.password}
                onChange={this.props.handleChange}
              />
            </form>
          </div>
          <button
            className='btn btn-success float-right'>
            Sign Up
          </button>
        </React.Fragment>
      );
    }
    return null;
  }
}

export default MasterForm;
