import React from 'react';
//eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Firebase from 'firebase';

class Leaderbord extends React.Component {

    constructor(props) {
        super(props);
        this.laden = this.laden.bind(this);
    }

    update_leaderbord(gebruikers,top5) {
        //console.log(top5[i] + " " + gebruikers[top5[i]])
        document.getElementById("1").innerText = top5[0]
        document.getElementById("2").innerText = gebruikers[top5[0]]
        document.getElementById("3").innerText = top5[1]
        document.getElementById("4").innerText = gebruikers[top5[1]]
        document.getElementById("5").innerText = top5[2]
        document.getElementById("6").innerText = gebruikers[top5[2]]
        document.getElementById("7").innerText = top5[3]
        document.getElementById("8").innerText = gebruikers[top5[3]]
        document.getElementById("9").innerText = top5[4]
        document.getElementById("10").innerText = gebruikers[top5[4]]
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
            //eslint-disable-next-line
            for (let key in gebruikers.naam && gebruikers.Highscores) {
                //console.log(gebruikers.naam[key] + " " + gebruikers.Highscores[key]);
                gebruikers_per[gebruikers.naam[key]] = gebruikers.Highscores[key]
            }
            let gebruikers_per_keys = Object.keys(gebruikers_per);
            gebruikers_per_keys.sort((a,b) => {
               return gebruikers_per[b] - gebruikers_per[a];
            })
            gebruikers_per_keys = gebruikers_per_keys.slice(0,5)
            this.update_leaderbord(gebruikers_per,gebruikers_per_keys);
            //console.log(gebruikers_per_keys);
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
                        <th id="1"></th>
                        <th id="2"></th>
                    </tr>
                    <tr>
                        <th id="3"></th>
                        <th id="4"></th>
                    </tr>
                    <tr>
                        <th id="5"></th>
                        <th id="6"></th>
                    </tr>
                    <tr>
                        <th id="7"></th>
                        <th id="8"></th>
                    </tr>
                    <tr>
                        <th id="9"></th>
                        <th id="10"></th>
                    </tr>
                </tbody>
                    </table>
                </div>
        );
    }
}

export default Leaderbord;
