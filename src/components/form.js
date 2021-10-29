/*import React from "react";

class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            img: '#'
        }
    }


    LaApi = async () => {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
        let data = await res.json()

        console.log(data.sprites.front_default)
        this.setState({
            img: data.sprites.front_default
        })
    }

    hadleName = event => {
        this.setState({
            name: event.target.value
        })
    }

    hadleSubmit = event => {
        var jeje = this.state.name
        console.log(jeje)
        this.LaApi()
        event.preventDefault()
    }


    render(){
        return (
            <div>
                <div className="card text-center">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <form onSubmit={this.hanleSubmit}>
                    <label>Ingresa el nombre del pokemon: </label>
                    <br/>
                    <input
                        type= "text"
                        placeholder= "nombre"
                        value={this.state.name}
                        onChange = {this.hadleName}

                    /><br/><br/>
                    <button type="sumbit" className="btn btn-primary">Sumbit</button>
                    <br/><br/>
                    <img scr={this.state.img} />
                </form>
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
            </div>
            </div>
        );
    }
}

export default Form;*/

