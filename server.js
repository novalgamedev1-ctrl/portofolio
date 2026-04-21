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


const products = [
  { name:'Website Development', category:'Web', desc:'Landing Page, E-Commerce, Company Profile, Portfolio, Sistem Admin. Full responsive UI/UX + integrasi API.', price:700000, img:'https://cdn-icons-png.flaticon.com/512/1183/1183672.png' },
  { name:'Fullstack Web System', category:'Web', desc:'Sistem web lengkap dengan backend, database, login system, payment gateway, API integration, dan dashboard admin.', price:2000000, img:'https://cdn-icons-png.flaticon.com/512/6674/6674591.png' },
  { name:'Android App (Kotlin)', category:'Mobile', desc:'Aplikasi Android native dengan Kotlin. Toko, katalog, login system, API based app, serta publikasi ke PlayStore.', price:1500000, img:'https://cdn-icons-png.flaticon.com/512/888/888839.png' },
  { name:'SA-MP Script Development', category:'GameDev', desc:'Gamemode SA-MP — job, faction, economy, inventory, turf, housing, business, anti-cheat, MySQL database.', price:350000, img:'https://upload.wikimedia.org/wikipedia/commons/3/3f/Samp_logo.jpg' },
  { name:'SA-MP Custom System', category:'GameDev', desc:'Fitur sesuai kebutuhan server: farming, weapon system, vehicle mod, UCP panel, textdraw UI custom.', price:150000, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjNRVqvSDMIY47Yp6rWienDdEmY6-_09y8A&s' },
  { name:'Discord Bot Builder', category:'Bot', desc:'Bot Discord custom — Moderation, Ticket, Economy, AutoRole, Logging, Music. Integrasi API & database.', price:200000, img:'https://cdn-icons-png.flaticon.com/512/5968/5968756.png' },
  { name:'Weekly Maintenance', category:'Support', desc:'Support maintenance mingguan. Fix bug kecil, optimasi ringan, update minor. Ideal untuk server/website aktif.', price:100000, img:'https://cdn-icons-png.flaticon.com/512/1995/1995470.png' },
  { name:'Monthly Maintenance', category:'Support', desc:'Perawatan project penuh 1 bulan. Bug fixing, update fitur kecil, monitoring, dan konsultasi via chat.', price:350000, img:'https://cdn-icons-png.flaticon.com/512/1828/1828506.png' },
  { name:'Premium Dev Package', category:'Premium', desc:'Dedicated working time + prioritas pengerjaan. Cocok untuk project besar jangka panjang (Web/Android/SA-MP).', price:5500000, img:'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }
];


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

app.get('/api/product', (req, res) => {
    res.json(products);
})
app.get('/', (req, res) => {
    res.json({ message: 'Server is running!' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
