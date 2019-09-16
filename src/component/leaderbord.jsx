import React from 'react';
//eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


class Leaderbord extends React.Component {
    render() {
        return(
            <div id="leaderbord">
                <table className="border border-primary">
                <thead className="border border-primary">
                    <tr>
                        <th>Naam</th>
                        <th>&nbsp; Highscore</th>
                    </tr>
                </thead>
                <tbody>
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
