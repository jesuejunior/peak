import React from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component {
    render(){
        return(<div> 
                <h1> Navbar </h1>
                <div> test </div>
               </div>
        )
    }

}

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
