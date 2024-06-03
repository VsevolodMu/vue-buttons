const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
const http = require('http');
const server = http.createServer(app);
app.use(express.json());

const firstTypeNewsList = [
  {
    id: 0,
    data: '30 march 2024',
    title: 'Feel the beauty of Africa',
    image: 'https://www.apnphotographyschool.com/wp-content/uploads/2018/03/landscape-photography-tips.jpg',
    text: 'Get in touch with all the nature, life, meaning of africa only by reading articles, watching fotos and living the life you can see on "TRAVELER"'
  },
  {
    id: 1,
    data: '31 march 2024',
    title: 'A Journey into the Continent',
    image: 'https://avatars.dzeninfra.ru/get-zen_doc/3540570/pub_5f6f05a3df292d110948487f_5f6f094c63b25d04cd56fc53/scale_1200',
    text: 'Embark on an adventure through the diverse landscapes and rich cultures of Africa. From the majestic savannas of the Serengeti to the bustling markets of Marrakech, Africa captivates with its stunning beauty and compelling history.'
  },
  {
    id: 2,
    data: '31 march 2024',
    title: 'The Diverse Landscapes of Africa',
    image: 'https://druzhniy-center.ru/wp-content/uploads/4/c/f/4cfd2df1f02ed60357cd2226a9db7358.jpeg',
    text: 'Africa, the second largest continent on Earth, is a land of incredible diversity. From the vast Sahara Desert in the north to the lush rainforests of Central Africa and the stunning savannas of East Africa.'
  },
];

const secondTypeNewsList = [
  {
    id: 0,
    date: '26 MARCH 2024',
    title: 'Long time journey',
    image: 'https://img.freepik.com/premium-photo/a-desert-scene-with-camels-and-a-sunset_900396-13267.jpg',
    text: 'Lorem ipsum dolor sit amet, cotuer adipising elit, sed diam nmy nibh euismod tincidunt ut I dolore manga allquam erat vol.Ut wisi enim ad minim veniam nostrud exerct tation ullamcor.'
  },
  {
    id: 1,
    date: '26 MARCH 2024',
    title: 'Above nothing',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vqdFUFR0K6fud0haT9TANU4ctBZb2obxrg&s',
    text: 'Lorem ipsum dolor sit amet, cotuer adipising elit, sed diam nmy nibh euismod tincidunt ut'
  },
  {
    id: 2,
    date: '26 MARCH 2024',
    title: 'Life in a desert',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwa2zQxeJbzjhpJI_kWR85ZigyrCZBie7S-zFC98NKRlcBhS50ive01suE6SFdB0OJvko&usqp=CAU',
    text: 'Lorem ipsum dolor sit amet, cotuer adipising elit, sed diam nmy nibh euismod tincidunt ut I dolore manga allquam erat vol.Ut wisi enim ad minim veniam nostrud exerct tation'
  },
  {
    id: 3,
    date: '26 MARCH 2024',
    title: 'Desert of the livings',
    image: 'https://avatars.mds.yandex.net/i?id=a05f0c69e04535ac11447460d1f453747cab0379-10096959-images-thumbs&n=13',
    text: 'Lorem ipsum dolor sit amet, cotuer adipising elit, sed diam nmy nibh euismod tincidunt ut I dolore manga '
  },
  {
    id: 4,
    date: '26 MARCH 2024',
    title: 'Long long road',
    image: 'https://avatars.mds.yandex.net/i?id=5675895fb1f618ad3f59333ce4d0ab48af9172e4-12434137-images-thumbs&n=13',
    text: 'Lorem ipsum dolor sit amet, cotuer adipising elit, sed diam nmy nibh euismod tincidunt ut I dolore manga allquam erat vol.Ut wisi enim ad minim veniam nostrud exerct tation ullamcor.'
  },
  {
    id: 5,
    date: '26 MARCH 2024',
    title: "Africa's forest",
    image: 'https://avatars.mds.yandex.net/i?id=d2d3ba9f7054ee53452ad99cbc375595ded30b88-9882341-images-thumbs&n=13',
    text: 'Lorem ipsum dolor sit amet, cotuer adipising elit, sed diam nmy nibh euismod '
  },
  {
    id: 6,
    date: '26 MARCH 2024',
    title: 'Desert of survival',
    image: 'https://avatars.mds.yandex.net/i?id=49f59a6582203a1cbf240c2b5a63a266baa11863-12810245-images-thumbs&n=13',
    text: 'Lorem ipsum dolor sit amet, cotuer adipising elit, sed diam nmy nibh euismod tincidunt ut I dolore manga allquam erat vol.Ut wisi enim '
  },
  {
    id: 7,
    date: '26 MARCH 2024',
    title: 'Above nothing',
    image: 'https://avatars.mds.yandex.net/i?id=fea731f4d41cef6f696b8a5faa1a5c040e78e9f8-12481490-images-thumbs&n=13',
    text: 'Lorem ipsum dolor sit amet, cotuer adipising elit, sed diam nmy nibh euismod tincidunt ut I dolore manga allquam erat vol.Ut wisi enim ad minim veniam nostrud exerct tation ullamcor.'
  }
];

app.get('/', (req, res) => {
  res.send('My backend!!!Test');
});

app.get('/firstTypeNews', (req, res) => {
  setTimeout(() => {
    return res.json(firstTypeNewsList);
  }, 3000)
});

app.get('/secondTypeNews', (req, res) => {
  setTimeout(() => {
    if (req.query && req.query.title) {
      return res.json(secondTypeNewsList.filter(item => item.title.toLowerCase().includes(req.query.title.toLowerCase())))
    }
    res.json(secondTypeNewsList)
  }, 3000)
})

app.get('/secondTypeNews/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const newsItem = secondTypeNewsList.find(item => item.id === id);
  setTimeout(() => {
    return res.json(newsItem);
  }, 3000)
});

app.post('/secondTypeNews', (req, res) => {
  const newCard = req.body;
  newCard.id=secondTypeNewsList.length
  secondTypeNewsList.push(newCard);
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})