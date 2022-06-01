import React from 'react'

export default function ContactCard({contact}) {
  return (
    <div>
        <h3>{contact.company}</h3>
        <p>{contact.country}</p>
        <p>{contact.first_name} {contact.last_name}</p>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>

        


        <button>Order from</button>
    </div>
  )
}
