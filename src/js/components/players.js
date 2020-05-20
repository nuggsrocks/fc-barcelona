import React from "react";

class Players extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            output: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.runFunction = this.runFunction.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    runFunction() {
        let name = this.state.input;
        let playerDirectory = [
            ["FRENKIEDEJONG", "Frenkie de Jong", "21", "Midfielder"],
            ["LIONELMESSI", "Lionel Messi", "10", "Forward"],
            ["LUISSUAREZ", "Luis Su\xE1rez", "9", "Forward"],
            ["IVANRAKITIC", "Ivan Rakitic\u0301", "4", "Midfielder"],
            ["MARCANDRETERSTEGEN", "Marc-Andr\xE9 ter Stegen", "1", "Goalkeeper"],
            ["NELSONSEMEDO", "N\xE9lson Semedo", "2", "Defender"],
            ["GERARDPIQUE", "Gerard Piqu\xE9", "3", "Defender"],
            ["SERGIOBUSQUETS", "Sergio Busquets", "5", "Midfielder"],
            ["JEANCLAIRTODIBO", "Jean-Clair Todibo", "6", "Defender"],
            ["ARTHUR", "Arthur", "8", "Midfielder"],
            ["OUSMANEDEMBELE", "Ousmane Dembel\xE9", "11", "Forward"],
            ["NETO", "Neto", "13", "Goalkeeper"],
            ["CLEMENTLENGLET", "Cl\xE9ment Lenglet", "15", "Defender"],
            ["MOUSSAWAGUE", "Moussa Wagu\xE9", "16", "Defender"],
            ["ANTOINEGRIEZMANN", "Antoine Griezmann", "17", "Forward"],
            ["JORDIALBA", "Jordi Alba", "18", "Defender"],
            ["CARLESALENA", "Carles Ale\xF1\xE1", "19", "Midfielder"],
            ["SERGIROBERTO", "Sergi Roberto", "20", "Midfielder"],
            ["ARTUROVIDAL", "Arturo Vidal", "22", "Midfielder"],
            ["SAMUELUMTITI", "Samuel Umtiti", "23", "Defender"],
            ["JUNIORFIRPO", "Junior Firpo", "24", "Defender"]
        ];

        let upper = name.split('} ').join('').toUpperCase();
        let kitNumber = [];
        for (let a = 0; a < playerDirectory.length; a++) {
            if ((playerDirectory[a][0].search(upper) !== -1) ||
                (playerDirectory[a][2].includes(name) && name.length === playerDirectory[a][2].length)) {
                kitNumber.push(
                    playerDirectory[a][1] +
                    " " +
                    "#" +
                    playerDirectory[a][2] +
                    " " +
                    playerDirectory[a][3]
                );

            }

        }
        this.setState({
            output: kitNumber
        })
    }

    render() {
        return (
            <div>
                <h2>
                    Players
                </h2>
                <p className={'barca-text'}>
                    Spanish teams are limited to three players without EU citizenship.
                    The squad list includes only the principal nationality of each player; several non-European players
                    on the squad have dual citizenship with an EU country.
                </p>
                <p className={'barca-text'}>
                    Barcelona has employed many famous players, with
                    five <em className={'competitions'}>FIFA World Player of the Year</em> award winners and
                    six <em className={'competitions'}>Ballon d&apos;Or</em> winners among the previous and current Barcelona
                    players. This makes Bar&ccedil;a the club with the most top player awards received all-time. In 2009,
                    Barcelona won an unprecedented sextuple by winning <em className={'competitions'}>La Liga</em>,
                    the <em className={'competitions'}>Copa del Rey</em>,
                    the <em className={'competitions'}>Supercopa de Espa&ntilde;a</em>,
                    the <em className={'competitions'}>UEFA Champions League</em>,
                    the <em className={'competitions'}>UEFA Supercup</em> and
                    the <em className={'competitions'}>FIFA Club World Cup</em> in one calendar year. The same year, five
                    of their players and their coach were voted onto the <em className={'competitions'}>UEFA Team of the Year</em> 2009.
                </p>
                <h3>Notable Current Players</h3>

                <p className={'barca-text'}>Lionel Messi (<em>Argentina</em>)</p>
                <p className={'barca-text'}>Luis Su&aacute;rez (<em>Uruguay</em>)</p>
                <p className={'barca-text'}>Antoine Griezmann (<em>France</em>)</p>
                <p className={'barca-text'}>Frenkie de Jong (<em>Netherlands</em>)</p>
                <p className={'barca-text'}>Ivan Rakitic&#769; (<em>Croatia</em>)</p>
                <p className={'barca-text'}>Arturo Vidal (<em>Chile</em>)</p>
                <p className={'barca-text'}>Marc-Andr&eacute; ter Stegen (<em>Germany</em>)</p>
                <p className={'barca-text'}>Gerard Piqu&eacute; (<em>Spain</em>)</p>

                <code>Current Manager: Ernesto Valverde</code>


                <div id={'player-number-function'} className={'pt-4'}>
                    <p className={'text-center barca-text'}>Input a current F.C. Barcelona player&apos;s name or number and get
                        their name, kit number, and position.</p>
                    <div id={'input-controls'}>
                        <input id={'barca-player-input'} type={'text'} className={'form-control text-center'}
                               onChange={this.handleChange} value={this.state.input} placeholder={'Enter name here'} />
                        <button id={'barca-player-btn'} className={'btn btn-light'} onClick={this.runFunction}>Find Player</button>
                    </div>
                    <h4 className={'pt-3'} id={'barca-player-function-result'}>{this.state.output}</h4>
                </div>
            </div>
        )
    }
}

export default Players;