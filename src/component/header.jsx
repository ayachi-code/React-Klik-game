import React from 'react';

class Header extends React.Component {

     state = {
         tijd: 10
     }

    aftellen() {
        console.log(this.state.tijd);
    }

    render() {
        return(
            <div className="d-flex justify-content-center">
                <div className="bg-primary col-sm-12 text-white"><p id="tijd">Tijd: <span id="counting">{this.state.tijd}</span></p></div>
                <p></p>
            </div>
        )

    }
}

export default Header