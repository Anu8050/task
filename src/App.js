import React from "react";
import ReactDOM from 'react-dom';
const { createInvoice } = require("./create.js");

class App extends React.Component 
{
  shoot() {
    const invoice = { 
      shipping: {
        name: "Anu",
        address: "Mirle",
        city: "k.r.nagar",
        state: "karnataka",
        country: "india",
        postal_code: 549603
      },
      items: [
        {
          item: "TC 100",
          description: "Toner Cartridge",
          quantity: 2,
          amount: 6000
        },
        {
          item: "USB_EXT",
          description: "USB Cable Extender",
          quantity: 1,
          amount: 2000
        },
        {
            item: "USB",
            description: "Cable ",
            quantity: 1,
            amount: 5000
          }
      ],
      
      subtotal: 9000,
      paid: 0,
      invoice_nr: 1234
    };
    createInvoice(invoice, "invoice.pdf");
  }
  render() {
    return (
      <button onClick={this.shoot}>Click Me!</button>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;