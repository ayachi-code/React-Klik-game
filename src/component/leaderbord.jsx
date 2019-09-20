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
        let gebruikers = {naam: [],Highscores: []}
        let gebruikers_per = {}
        console.log("Highscore en username halen uit database")
        let database = Firebase.database();
        let ref = database.ref('gebruiker');
        ref.on('value',(data) => {
            Object.keys(data.val()).forEach((gebruiker) => {
                gebruikers.naam.push(data.val()[gebruiker].Naam);
                gebruikers.Highscores.push(data.val()[gebruiker].Score);
            });
            for (let key in gebruikers.naam && gebruikers.Highscores) {
                console.log(gebruikers.naam[key] + " " + gebruikers.Highscores[key]);
                gebruikers_per[gebruikers.naam[key]] = gebruikers.Highscores[key]
            }
            let gebruikers_per_keys = Object.keys(gebruikers_per);
            gebruikers_per_keys.sort((a,b) => {
               return gebruikers_per[b] - gebruikers_per[a];
            })
            gebruikers_per_keys = gebruikers_per_keys.slice(0,5)
            console.log(gebruikers_per_keys);
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
