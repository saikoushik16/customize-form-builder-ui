import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './DataTable';


const TableHeader = () => {
    return (
        <thead className="thead-dark">
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
        </thead>
    );
};

const TableBody = props => {
    const rows = props.characterData.map( (row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={()=> props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        );
    });

 return <tbody>{rows}</tbody>;
};


class FormList extends Component {

    constructor(props) {
        super(props);
        this.state = { formsCollection: [] };
    }

    componentDidMount() {
        axios.get('http://axilweb-assignment.do/api/documents')
            .then(res => {
                console.log("Get documents:",res.data);
                this.setState({ formsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    removeForm = id => {
        const { formsCollection } = this.state;
        this.setState({
            formsCollection : formsCollection.filter((frm, i) => {
                return i !== formsCollection.findIndex(v => v.id === id);
            }),
        });
    };

    editForm = id => {
        console.log('edit Form: ', id);
        // const { characters } = this.state;

        // this.setState({
        //     characters : characters.filter((character, i) => {
        //         return i !== id;
        //     }),
        // });
    };

    dataTable() {
        return this.state.formsCollection.map((data, i) => {
            return <DataTable obj={data} key={i} editForm={this.editForm} removeForm={this.removeForm} />;
        });
    };

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <TableHeader/>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default FormList;
