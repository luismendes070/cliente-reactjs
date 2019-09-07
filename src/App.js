import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{"id": 1, "nome": "Lui"}, {"id": 2, "nome": "Mr Delete Me"}]
        };
    }

    componentDidMount() {
        var website = "https://boiling-gorge-20815.herokuapp.com/api/contatos";

        fetch(website).
            then(response => response.json()).
        then( data =>
            this.setState({items:data})
        )
    }

    render() {

        return (
            <div>
                {
                    this.state.items.map( (item) =>
                        <div>
                            <span>{item.id}</span>
                            <span>{item.nome}</span>
                        </div>
                    )
                }
            </div>
        );
    }
}


export default App;

