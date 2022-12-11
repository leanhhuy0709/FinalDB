
import {Container, Table, Button} from 'react-bootstrap';
import React, {useState} from 'react';
import NavigationBar from '../../component/NavigationBar/NavigationBar';
import UserListModal from './UserListModal';


function UserList({users}) {
    return (
        <>
        <Container style={{marginTop: "40px"}}>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Mid Name</th>
          <th>Last Name</th>
          <th>BDate</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Rank</th>
          <th>Member ID</th>
          <th>Accumulated Point</th>
          <th>Registration Date</th>
        </tr>
      </thead>
      <tbody>
        {
            users.map((item, idx)=>{
                return (
                <tr key = {idx}>
                    <td>{item.Cus_id}</td>
                    <td>{item.FName}</td>
                    <td>{item.MName}</td>
                    <td>{item.LName}</td>
                    <td>{item.BDate}</td>
                    <td>{item.Email}</td>
                    <td>{item.Gender}</td>
                    <td>{item.Age}</td>
                    <td>{item.Rank}</td>
                    <td>{item.Mem_id}</td>
                    <td>{item.Accumulated_point}</td>
                    <td>{item.Registration_date}</td>
                </tr>
                );
            })
        }
      </tbody>
        </Table>
        </Container>
        </>
    )
}

export default UserList;
