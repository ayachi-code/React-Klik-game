import React from 'react';
//eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Firebase from 'firebase';

class Leaderbord extends React.Component {

    constructor(props) {
        super(props);
        this.laden = this.laden.bind(this);
    }

    laden() {
        console.log("Highscore en username halen uit database")
        let database = Firebase.database();
        let ref = database.ref('gebruiker');
        ref.on('value',(data) => {
            //console.log(data.val())
            Object.keys(data.val()).forEach((gebruiker) => {
                console.log("Naam: " + data.val()[gebruiker].Naam + ", Score: " + data.val()[gebruiker].Score);
            });
        });
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
