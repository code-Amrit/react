import express from 'express'


const app = express();


app.get('/api/products', (req, res)=>{
      const products = [
          { 
              id: 1,
              name: 'table wooden',
              price: 200,
              image: "https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg",

          },{
              id: 2,
              name: 'table glass',
              price: 250,
              image: "https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg",
          },{
              id: 3,
              name: 'table plastic',
              price: 150,
              image: "https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg",
          },{
              id: 4,
              name: 'table metal',
              price: 300,
              image: "https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg",
          },{
              id: 5,
              name: 'table polyester',
              price: 350,
              image: "https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg",
          }
      ]  

// http://localhost:3000/api/products?search=metal //?query parameter bolte hain

if (req.query.search) {
    const filterProducts = products.filter(product => product.name.includes(req.query.search));
    res.send(filterProducts);
    return;
}

      setTimeout(() => {
        res.send(products);
      }, 3000);
})



const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
});