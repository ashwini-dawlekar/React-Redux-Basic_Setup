import React, { PropTypes } from 'react'

class Hello extends React.Component {
    componentDidMount(){
        this.props.helloWorld();
    }
    render() {
        // const listItems = this.props.User.map((user) =>
        //     <tr>
        //         <td>
        //             <a href="#/userDetails">{user.name}</a>
        //         </td>
        //     </tr>
        // );
        // return (
        //     <table>{listItems}</table>
        // );
        return(
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                </tr>
                </thead>
                <tbody>
                {this.props.User.map((data, key) => {
                    return (
                        <tr key={key}>
                            <td>
                                <a href="#/userDetails">{data.name}</a>
                            </td>
                            <td>{data.city}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }

}
Hello.propTypes = {
    User: PropTypes.array,
}

export default Hello
