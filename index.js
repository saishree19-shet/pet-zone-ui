const express = require('express');
const app = express();

app.use(express.json()); // To read JSON data from POST requests

const dataItems = [
    { id: 1, title: "iPhone 16 Pro", description: "Apple company phone", price: 120000 },
    { id: 2, title: "Samsung S24", description: "Samsung company phone", price: 90000 }
];

// GET: All items
app.get('/items', (request, response) => {
    response.json({ status: 200, message: "Items fetched successfully", data: dataItems });
    console.log("Items API called");
});

// GET: Items with discount
app.get('/discount', (request, response) => {
    const discountPercent = 10;
    const discountedItems = dataItems.map(item => ({
        ...item,
        discount: `{discountPercent}%`,
        discountedPrice: item.price - (item.price * discountPercent / 100)
    }));
    response.json({ status: 200, message:`${discountPercent}% discount, data: discountedItems `})
    console.log("Discount API called");
});

// POST: Add new item
app.post('/items', (request, response) => {
    const newItem = request.body;
    dataItems.push(newItem);
    response.json({ status: 201, message: "Item added successfully", data: newItem });
    console.log("New item added:", newItem);
});

// Start the server
app.listen(9000, () => {
    console.log("Server created on port 9000");
});