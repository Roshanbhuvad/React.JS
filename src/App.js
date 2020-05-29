import React, { Component} from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
    //We are going to create a constructor function
    constructor(props) {
        super(props);
// We are gonna start by defining the state of this application below 
        this.state = {
            items: [],   // Which is an array of the data we,re gonna fetch from the API
            isLoaded: false, //When the items have been loaded from the API endpoints
        }
    }
//componentDidMount method runs after the render method, then updates the render method
    componentDidMount() {
        //Inside this method we're gonna create the actual API call
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json()) //we're gonna get the resource
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                });
            });
    }
  render() {

    var { isLoaded, items } = this.state;

    if(!isLoaded) {
        return <div>Loading...</div>;
    }

    else {

    return (
    <div className="App">
         
         <ul>
            {items.map(item => (
                <li key={item.id}> 
                    Name: {item.name} | Email: {item.email}
                </li>

                ))};
            </ul>
    </div>
  );
        }
    }
}


export default App;
// you can see now we're actually getting the data from the API and we're outputting(localhost:300) it in the application through the render method 