const React = require('react');

class Show extends React.Component {
   
    render(){
        const {title, entry, shipIsBroken, _id} = this.props.log
        const capName = title[0].toUpperCase() + title.substring(1)
        return(
        <>
            <h1> {capName} Show Page </h1>
            <nav>
                <a href="/logs">View Logs</a> <br />
                <a href={`/logs/${_id}/edit`}>{`Edit the ${capName}`}</a>
            </nav>
            <p>{capName} is {entry} and {shipIsBroken? 'it\'s broken': 'it\'s not broken'}</p>
        </>
        )
   } 
}

module.exports = Show