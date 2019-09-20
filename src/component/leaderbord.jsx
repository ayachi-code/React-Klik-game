import React from 'react';
//eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


class Leaderbord extends React.Component {

    constructor(props) {
        super(props);
        this.laden = this.laden.bind(this);
    }

    laden() {
        console.log("Highscore en username halen uit database")
    }

    render() {
        return(
            <div id="leaderbord" onLoad={this.laden()}>
                <table className="border border-primary">
                <thead className="border border-primary">
                    <tr>
                        <th>Naam</th>
                        <th>&nbsp; Highscore</th>
                    </tr>
                </thead>
                <tbody id="Scorens">
                    <tr>
                        <th>Bilal</th>
                        <th>&nbsp; 120</th>
                    </tr>    
                </tbody>
                    </table>
                </div>
        );
    }
}

export default Leaderbord;
