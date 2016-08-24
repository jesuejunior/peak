import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes.jsx';

class App extends React.Component {
  render(){
    return(
      <div className='pure-g' >
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(routes, document.getElementById('peakApp'));

export default App;
