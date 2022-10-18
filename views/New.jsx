const React = require('react')

class New extends React.Component {
    render(){
        return (
            <>
            <h1>Create New Log</h1>
            <nav>
                <a href="/logs">View Logs</a>
            </nav>
            <br></br>
            <form method="POST" action="/logs">
            Title: <input type="text" name="title" placeholder='Title Here'></input><br/>
                Entry: <input type="text" name="entry" placeholder='Entry Here'></input><br/>
                Ship is Broken: <input type="checkbox" name="shipIsBroken"></input><br/>
                <input type="submit" value="Submit Fruit"></input>
            </form>
            </>
        )
    }
}

module.exports = New



                