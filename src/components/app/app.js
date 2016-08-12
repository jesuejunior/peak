import React from 'react';
import ReactDOM from 'react-dom';

class PeakApp extends React.Component {
    render(){
        const now = new Date();
        return (
            <div>
                <h1> APP </h1>
                <p> Current time: {now.toLocaleTimeString()} </p>
            </div>
        );
    }    
    
}

ReactDOM.render(<PeakApp />, document.getElementById('peakApp'));
