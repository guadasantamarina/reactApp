import { images } from "../assets /Images";

export const Products = [
    {   id: 1,
        name: "L.A",
        img: images[0],
        category: 'caps',
        description: "Vintage light blue cap, 'L.A' printed",
        color: "Light blue",
        size: "Regular",
        onsale: false,
        price: 5,
        stock: 10,
        initial: 1
    },
    
    {   id:2,
        name:'Happy Face',
        img: images[1], 
        category:'caps',
        description: 'Vintage gray cap with a smiley face printed',
        color: 'Grey',
        size: 'Regular',
        price: 5,
        stock: 15,
        initial: 1

    },

    {   id:3,
        name:'Vans',
        img: images[2], 
        category:'caps',
        description: 'Black Vans cap',
        color: 'Black',
        size: 'Regular',
        price: 7,
        stock: 8,
        initial: 1

    },

    {   id:4,
        name:'Saturn',
        img: images[3], 
        category:'winter',
        description: 'Black Wool Winter Hat, ',
        color: 'Black',
        size: 'Regular',
        price: 10,
        stock: 13,
        initial: 1

    },

    {   id:5,
        name:'F*ck You',
        img: images[4], 
        category:'winter',
        description: 'Black Wool Winter Hat, ',
        color: 'Black',
        size: 'Regular',
        price: 10,
        stock: 8,
        initial: 1

    },

    {   id:4,
        name:'Pacsun',
        img: images[5], 
        category:'winter',
        description: 'Bright Green Wool Winter Hat, ',
        color: 'Bright Green',
        size: 'Regular',
        price: 10,
        stock: 15,
        initial: 1

    },
]