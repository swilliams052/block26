import React from 'react'


export default function ContactRow(props) {
    return (
      <tr>
        <td>{props.contact.name}</td>
        <td>{props.contact.email}</td>
        <td>{props.contact.phone}</td>
      </tr>
    );
  }
  

