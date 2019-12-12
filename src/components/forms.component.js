import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { formsCollection: [] };
    }

    componentDidMount() {
        axios.get('http://axilweb-assignment.do/api/documents')
            .then(res => {
                this.setState({ formsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.formsCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}