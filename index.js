const express = require('express');
const app = express();
app.use(express.json())
const dataItems = [
    { id: 1, title: "iPhone 16 Pro", description: "Apple company phone", price: 120000 },
    { id: 2, title: "Samsung S24", description: "Samsung company phone", price: 90000 }
];

app.get('/items', (request, response) => {
    response.json({ status: 200, message: "Items fetched successfully", data: dataItems });
    console.log("Items API called");
});

app.get('/discount', (request, response) => {
    const discountPercent = 10;
    const discountedItems = dataItems.map(item => ({
        ...item,
        discount: `${discountPercent}%`,
        discountedPrice: item.price - (item.price * discountPercent / 100)
    }));
    response.json({ status: 200, message: `Items fetched successfully with ${discountPercent}% discount`, data: discountedItems });
    console.log("Discount API called");
});
 app.post('/address',(request,response)=>{
    const name=request.body.name;
    const address=request.body.address;
    const pincode=request.body.pincode;
    const city=request.body.city;
    const state=request.body.state;
    const country=request.body.country;
    address={
        name:name,
        address:address,
        pincode:pincode,
        city:city,
        state:state,
        country:country
    }
    response.send('udpated address succesfully')
    

 })
 app.delete('/address',(request,response)=>{
    address=[]
    response.send('deleted successfully')
 })
    
 
app.listen(9000, () => {
    console.log("Server created on port 9000");
});