var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {className: 'app'}, 
            React.createElement('button', {onClick: this.decrement}, '-'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+'),
        );
    },

    getDefaultProps: function () {
        console.log('Domyślna wartość propsów')
    },

    componentWillMount: function () {
        console.log('Metoda wywoływana bezpośrednio przed wywołaniem metody render')
    },

    renderowanie: function () {
        console.log('Metoda zwraca potrzebny do wyświetlenie komponent')
    },

    componentDidMount: function () {
        console.log('Metoda wywoływana od razu po wywołaniu metody render')
    },

    componentWillReceiveProps: function () {
        console.log('Metoda zostanie wywołana gdy komponent otrzyma nowe właściwości')
    },

    shouldComponentUpdate: function () {
        console.log('Metoda wywoływana przed kolejnym renderowaniem, sprawda czy trzeba czy trzeba przerysowywać komponent')
    },

    renderowanie: function () {
        console.log('Jeśli metoda shoultComponentUpdate zwróci "true" to nastepuję przerysowanie komponentu')
    },

    componentDidUpdate: function () {
        console.log ('Ostatnia metoda wywołująca się zaraz po przerysowaniu komponentu, analogicznie działa do componentDidMount')
    },

    componentWillUnmount: function () {
        console.log ('Metoda słuzy np do odpinania timerów, bądź nasłuchiwania zdarzeń na elementach DOM')
    },

});

var counters = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
)

ReactDOM.render(counters, document.getElementById('app'));