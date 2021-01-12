db.products.insert(
    {
        _id: 1 ,
        name: "Pen",
        price: 1.20 ,
        stock : 60,
        reviews : [
            {
                authoreName: "Sally",
                rating: 5,
                review : 'Best rubber ever!'
            },
            {
                authoreName: "Sonu",
                rating: 5,
                review : 'Awesome'
            }
        ]
    }
)