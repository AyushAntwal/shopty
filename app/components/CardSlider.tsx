import { Box, Button, Card, Rating, Typography } from '@mui/material'
import React from 'react'
const products = [
    {
        "name": "Boat Rockerz 400 On-Ear Bluetooth Headphones (Carbon Black)",
        "price": 999,
        "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745",
        "rating": 4.3,
        "description": "High-quality on-ear Bluetooth headphones with deep bass and a comfortable fit."
    },
    {
        "name": "Boat Rockerz 550 Over-Ear Bluetooth Headphones (Active Black)",
        "price": 1499,
        "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
        "rating": 4.5,
        "description": "Over-ear Bluetooth headphones with noise isolation and long battery life."
    },
    {
        "name": "Boat Airdopes 441 TWS Earbuds (Spirit Lime)",
        "price": 1999,
        "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917",
        "rating": 4.7,
        "description": "True wireless earbuds with IPX7 water resistance and powerful sound."
    },
    {
        "name": "Boat Stone 1200 Bluetooth Speaker (Midnight Blue)",
        "price": 2999,
        "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141.png?v=1703145765",
        "rating": 4.6,
        "description": "Portable Bluetooth speaker with 14W output and 9 hours of playtime."
    },
    {
        "name": "Boat Rockerz 255 Pro+ Bluetooth Earphones (Navy Blue)",
        "price": 1299,
        "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_131_e7e95f2c-0bb3-492e-89df-613a2cfb792f.jpg?v=1686297917",
        "rating": 4.4,
        "description": "Bluetooth earphones with fast charging and magnetic earbuds."
    }
]


function CardSlider() {
    return (
        <section className='md:px-20 px-0 pt-20 bg-transparent'>
            <Typography variant='h4' className='text-center mb-5 font-serif'>Our Best Sellers</Typography>
            <Box className='flex w-100 overflow-auto pb-20 p-2 hide-scroll gap-5'>
                {products.map((product, index) => (
                    <Card key={product.name} className='relative min-w-52 md:min-w-0  hover:w-80 transition-all duration-500 p-0'>
                        <img src={product.img} alt={product.name} className='h-[300px] w-full object-cover' />
                        <div className='absolute top-0 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100 bg-slate-600/60 text-center w-full h-full text-white'>
                            <div>
                                <h3>{product.name}</h3>
                                <p><Rating name={product.name} value={product.rating} precision={0.1} readOnly /></p>
                                <h6>₹{product.price}</h6>
                                <Button className='mt-3 bg-sky-600 hover:bg-sky-800' sx={{ color: 'white' }}>Get It Now</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </Box>
        </section>
    )
}

export default CardSlider