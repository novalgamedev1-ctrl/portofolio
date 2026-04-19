// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
//const { Xendit } = require('xendit-node');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // tambah ini

// Impor Xendit
// Buat instance Xendit
//const x = new Xendit({
//  apiKey: 'xnd_development_8OgpsQ5Iyx9kaap2ewoQCtXjOIJIQVP1YKjK9DMMXn6dCm05zcV8E7DYIySss91'
//});

//const { Invoice } = x;



// // Endpoint buat bikin invoice
// app.post('/create-invoice', async (req, res) => {
//   try {
//     const { amount, payerEmail } = req.body;

//     if (!amount) return res.status(400).json({ error: 'Amount is required' });

//     const externalID = `mysoya-${Date.now()}`;

//     const invoice = await Invoice.createInvoice({
//       externalID,
//       amount,
//       payerEmail: payerEmail || 'customer@example.com',
//       successRedirectURL: 'http://localhost:5500/success.html',
//       failureRedirectURL: 'http://localhost:5500/failed.html',
//       currency: 'IDR',
//     });

//     res.json({
//       id: invoice.id,
//       status: invoice.status,
//       qrCodeURL: invoice.qr_code_url,
//       invoiceURL: invoice.invoice_url,
//       externalID: invoice.external_id
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// Jalankan server
// Jalankan server
app.get('/', (req, res) => {
    res.json({ message: 'Server is running!' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
