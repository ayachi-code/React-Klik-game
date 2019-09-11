import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/header';
import Counter from './component/counter';
import Score from './component/score';
import Footer from './component/footer';

class App extends React.Component {

    render() {
        return(
            <div>
            <Header/>
            <Counter/>
            <Score/>
            <Footer/>
                </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));