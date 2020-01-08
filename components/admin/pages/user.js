import React, { Component } from 'react'
import Title from '../components/title';
import { db } from "../../../firebaseConfig";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: [],
        }
    }

    getData = () => {
        let colref = db.collection('Users');
        let details = [];

        colref.get().then((docs) => {
            let ids = [];
            docs.forEach((x, i) => {
                ids.push(x.id)
            })

            ids.forEach((id, i) => {
                colref.doc(id).get().then((doc) => {
                    let data = doc.data();
                    details.push({
                        doc: id,
                        id: id,
                        name: data.name,
                        phone: data.phone,
                        email: data.email,
                        checked: data.active,
                    })
                    if (id === ids[ids.length - 1]) {
                        this.setState({
                            userDetails: details,
                        })
                    }
                })
            })
        })
    }

    disableUser = (e, doc, i) => {
        const { checked } = e.target;
        let userDetails = this.state.userDetails;
        userDetails[i].checked = !userDetails[i].checked;
        db.collection('Users').doc(doc).update({
            active: checked,
        }).then(() => {
            if (checked) {
                alert('Account Activated.')
            }
            else{
                alert('Account Disabled.')
            }
        })
        this.setState({
            userDetails: userDetails,
        })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div id='user'>
                <Title title='Users' />
                <div className='container-fluid p-3'>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="user-table-tab" data-toggle="tab" href="#user-table" role="tab" aria-controls="user-table"
                                aria-selected="true">Users</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active border p-4" id="user-table" role="tabpanel" aria-labelledby="user-table-tab">
                            <div className='table-responsive text-nowrap'>
                                <table className="table table-hover text-center">
                                    <caption>List of Users</caption>
                                    <thead className='bg-info text-white'>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.userDetails.map((x, i) => {
                                            return (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{x.name}</td>
                                                    <td>{x.email}</td>
                                                    <td>{x.phone}</td>
                                                    <td>
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" className="custom-control-input" id="customSwitches" checked={x.checked} onChange={(e) => this.disableUser(e, x.id, i)} />
                                                            <label className="custom-control-label" htmlFor="customSwitches"  >{x.checked ? 'Click To Disable' : 'Click To Active'}</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users;
