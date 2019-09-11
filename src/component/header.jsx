import React from 'react';

class Header extends React.Component {

     state = {
         tijd: 60
     }

    aftellen() {
        console.log(this.state.tijd);
    }

    render() {
        return(
            <div className="row">
                <div className="bg-primary col-sm-12 text-white"><p id="tijd">Tijd: <span id="counting">{this.state.tijd}</span></p></div>
                <p></p>
            </div>
        )

    }
}

export default Header