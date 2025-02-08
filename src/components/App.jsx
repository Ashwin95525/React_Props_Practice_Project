import React from "react";
import Card from "./ReusableComponent";
import contacts from "../contacts.js";

function App() {
  return (
    <div>
      <h1 className="heading"> Contacts </h1>
      <Card
        name={contacts[0].name}
        tel={contacts[0].phone}
        img={contacts[0].imgURL}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        tel={contacts[1].phone}
        img={contacts[1].imgURL}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        tel={contacts[2].phone}
        img={contacts[2].imgURL}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
