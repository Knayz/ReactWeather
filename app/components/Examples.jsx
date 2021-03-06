let React = require('react');
let {Link} = require('react-router');

let Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples Component</h1>
            <p>Here are a few example locations to try out</p>
            <ol>
                <li>
                    <Link to="/?location=Philadelphia">Philadelphia, PA</Link>
                </li>
                <li>
                    <Link to="/?location=Pavlovo">Pavlovo</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;