const React = require('react')

class Edit extends React.Component {
    render(){
        const {title, _id, entry, shipIsBroken} = this.props.log
        return (
            <>
                <h1>Edit This Ship</h1>
                <nav>
                    <a href="/logs">View Logs</a>
                </nav>
                <form method="POST" action="/logs">
                    Title: <input type="text" name="title" defaultValue={title}></input><br/>
                    Entry: <input type="text" name="entry" defaultValue={entry}></input><br />
                    Ship Is Broken: <input type="checkbox" name="shipIsBroken" defaultChecked={shipIsBroken}/> <br />
                    <input type="submit" value="Edit Log" />
                </form>
            </>
        )
    }
}

module.exports = Edit