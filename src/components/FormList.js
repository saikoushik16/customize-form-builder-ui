import axios from 'axios';
import DataTable from './DataTable';
import React, { Component } from 'react';

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

class FormList extends Component {

    constructor(props) {
        super(props);
        this.state = { formsCollection: [] };
    }
    async componentDidMount() {
        const res = await axios.get('http://axilweb-assignment.do/api/documents');
        this.setState({ formsCollection: res.data });
    };

    removeForm = async (id) => {
        const { formsCollection } = this.state;
        const res = await axios.delete('http://axilweb-assignment.do/api/documents/'+id)
        console.log("deleted document:",{id, res});
        this.setState({
            formsCollection : formsCollection.filter((frm, i) => {
                return i !== formsCollection.findIndex(v => v.id === id);
            }),
        });
    };

    editForm = id => {
        this.props.history.push("/edit/"+id);
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
