
const data = {
    users:[
        {
            name: 'mathias',
            email:'admin@example.com',
            password:'test',
            isAdmin: true
        },
        {
            name: 'david',
            email:'peon@example.com',
            password: 'test',
            isAdmin: false
        }
    ],
    products : [
        {
            
            name :'Lego Star Wars',
            slug : 'lego-star-wars',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRGzYXRXX7hg7O-zeQaKCsKZ99WvrK4AbxA&usqp=CAU',
            category: 'StarWars',
            description:'LEGO',            
            price:99,
            countInStock:10,
            rating:1,
            numReviews : 5,
            
        },
        {
            
            name :'Lego city',
            slug : 'lego-city',
            image:'https://static.fnac-static.com/multimedia/Images/FR/MDM/bf/91/f0/15765951/1540-1.jpg',
            category: 'city', 
            description:'LEGO',           
            price:120,
            countInStock:0,
            rating:4,
            numReviews : 12,
            
        },
        {   
            
            name :'Lego Creator',
            slug : 'lego-creator',
            image:'https://m.media-amazon.com/images/I/91tfTIoSBxL._AC_SX425_.jpg',
            category: 'Creator',            
            description:'LEGO',
            price:170,
            countInStock:4,
            rating:4.5,
            numReviews : 9,
            
        },
    ],
};

export default data;