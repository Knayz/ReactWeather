let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        };
    },
    handleSearch: function (location) {

        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(
            function (temp) {
                this.setState({
                    location:location,
                    temp: temp,
                    isLoading: false
                });
            }.bind(this),
            function (errorMessage) {
                this.setState({isLoading: false});
                alert(errorMessage);
            }.bind(this)
        );
        /*this.setState({
            location: location,
            temp: 23
        });*/
    },
    render: function () {
        let {isLoading, location, temp} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;