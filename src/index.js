import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/header';
import Counter from './component/counter';
import Score from './component/score';

class App extends React.Component {

    render() {
        return(
            <div>
            <Header/>
            <Counter/>
            <Score/>
                </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));