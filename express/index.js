const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
const http = require('http');
const server = http.createServer(app);
app.use(express.json());

const apartmentsCardStorage = [
  {
    id: 1,
    name: "Trejo Beautiful Escape",
    price: 175,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    place: "Mexico Greenway 21 k",
    image: "https://skyview.ru/upload/resize_cache/iblock/f49/1148_700_1/pve10j7i8j7pd3lgrip8ogubdyb9m9dr.webp"
  },
  {
    id: 2,
    name: "Super Sea",
    price: 225,
    guests: 3,
    bedrooms: 2,
    bathrooms: 1,
    place: "Atlanta Sorich 11 a",
    image: "https://s7.stc.all.kpcdn.net/family/wp-content/uploads/2022/11/top-chto-takoe-apartamenty-960x540-1-960x540.jpg"
  },
  {
    id: 3,
    name: "Roof Hotel",
    price: 150,
    guests: 1,
    bedrooms: 1,
    bathrooms: 1,
    place: "Italy Rukshwell 7 d",
    image: "https://novostroycity.ru/uploads/journal_entries/1602508947.jpg"
  },
  {
    id: 4,
    name: "Home Hotel",
    price: 225,
    guests: 3,
    bedrooms: 2,
    bathrooms: 1,
    place: "Atlanta Sorich 11 a",
    image: "https://www.palladaran.ru/uploads/images/apartamenty-v-gostinice.jpg"
  },
  {
    id: 5,
    name: "Emerald Hotel",
    price: 150,
    guests: 1,
    bedrooms: 1,
    bathrooms: 1,
    place: "Italy Rukshwell 7 d",
    image: "https://content.cdn-cian.ru/realty/articles/content/36585/3982790.jpg"
  },
  {
    id: 6,
    name: "Hotel Beautiful City",
    price: 150,
    guests: 1,
    bedrooms: 1,
    bathrooms: 1,
    place: "Italy Rukshwell 7 d",
    image: "https://mainadmin.novostroyki.shop/media/imagemanager/43242_ee445a56ae509627ddd968ecef5c63f1.jpg"
  },
  {
    id: 7,
    name: "Rooftop Hotel",
    price: 225,
    guests: 3,
    bedrooms: 2,
    bathrooms: 1,
    place: "Atlanta Sorich 11 a",
    image: "https://design.pibig.info/uploads/posts/2023-03/1678914150_design-pibig-info-p-apartamenti-s-terrasoi-dizain-instagram-21.jpg"
  },
  {
    id: 8,
    name: "Hotel By The Sea",
    price: 150,
    guests: 1,
    bedrooms: 1,
    bathrooms: 1,
    place: "Italy Rukshwell 7 d",
    image: "https://34travel.me/media/posts/58a2cc7492d13-hotels.jpg"
  },
  {
    id: 9,
    name: "Big Hotel",
    price: 150,
    guests: 1,
    bedrooms: 1,
    bathrooms: 1,
    place: "Italy Rukshwell 7 d",
    image: "https://design.pibig.info/uploads/posts/2023-03/1678914161_design-pibig-info-p-apartamenti-s-terrasoi-dizain-instagram-2.jpg"
  }
];

const flipperCardStorage = [
  {
    image: "https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/4/53/756069837119534.jpg"
  },
  {
    image: "https://static4.banki.ru/ugc/9c/bb/d5/6c/10993780.jpg"
  },
  {
    image: "https://s0.rbk.ru/v6_top_pics/media/img/6/75/754678189948756.jpeg"
  },
  {
    image: "https://static.news.ru/photo/1e0b066e-9b27-11ee-a3f5-02420a0000c9_1024.jpg"
  },
  {
    image: "https://b1.m24.ru/c/1926535.jpg"
  }
];

app.get('/', (req, res) => {
  res.send('My backend!!!Test');
});

app.get('/flipperCardStorage', (req, res) => {
  setTimeout(() => {
    return res.json(flipperCardStorage);
  }, 3000)
});

app.get('/apartmentsCardStorage', (req, res) => {
  setTimeout(() => {
    if (req.query && req.query.name) {
      return res.json(apartmentsCardStorage.filter(item => item.name.toLowerCase().includes(req.query.name.toLowerCase())))
    }
    res.json(apartmentsCardStorage)
  }, 3000)
})

app.get('/apartmentsCardStorage/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const cardItem = apartmentsCardStorage.find(item => item.id === id);
  setTimeout(() => {
    return res.json(cardItem);
  }, 3000)
});

app.post('/apartmentsCardStorage', (req, res) => {
  const newCardItem = req.body
  apartmentsCardStorage.push(newCardItem)
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})