import { ShoppingCartSharp } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Rating, Tooltip, Typography } from '@mui/material'
import { useState } from 'react';
const products = [
    {
        "name": "Boat Rockerz 400",
        "price": 999,
        "color": [
            { "name": "Carbon Black", "color": "#000000" },
            { "name": "Lush Green", "color": "#00FF00" },
            { "name": "Ocean Blue", "color": "#0000FF" }
        ],
        "img": "https://www.mivi.in/cdn/shop/files/DuoPodsi7-Black.png?v=1718271286&width=360",
        "rating": 4.3,
        "description": "High-quality on-ear Bluetooth headphones with deep bass and a comfortable fit."
    },
    {
        "name": "Boat Rockerz 550",
        "price": 1499,
        "color": [
            { "name": "Active Black", "color": "#000000" },
            { "name": "Fiery Red", "color": "#FF0000" },
            { "name": "Cool Grey", "color": "#808080" }
        ],
        "img": "https://www.mivi.in/cdn/shop/files/i2_blk_1.png?v=1717661867&width=360",
        "rating": 4.5,
        "description": "Over-ear Bluetooth headphones with noise isolation and long battery life."
    },
    {
        "name": "Boat Airdopes 441",
        "price": 1999,
        "color": [
            { "name": "Spirit Lime", "color": "#32CD32" },
            { "name": "Bold Black", "color": "#000000" },
            { "name": "Vivid Red", "color": "#FF0000" }
        ],
        "img": "https://www.mivi.in/cdn/shop/files/black_18.png?v=1716026711&width=360",
        "rating": 4.7,
        "description": "True wireless earbuds with IPX7 water resistance and powerful sound."
    },
    {
        "name": "Boat Stone 1200",
        "price": 2999,
        "color": [
            { "name": "Midnight Blue", "color": "#000080" },
            { "name": "Sunset Red", "color": "#FF4500" },
            { "name": "Forest Green", "color": "#228B22" }
        ],
        "img": "https://www.mivi.in/cdn/shop/files/36.png?v=1704170664&width=360",
        "rating": 4.6,
        "description": "Portable Bluetooth speaker with 14W output and 9 hours of playtime."
    },
    {
        "name": "Boat Rockerz 255 Pro+",
        "price": 1299,
        "color": [
            { "name": "Navy Blue", "color": "#000080" },
            { "name": "Electric Yellow", "color": "#FFFF00" },
            { "name": "Metallic Grey", "color": "#A9A9A9" }
        ],
        "img": "https://www.mivi.in/cdn/shop/files/SuperPodsDueto-Black.png?v=1719215422&width=360",
        "rating": 4.4,
        "description": "Bluetooth earphones with fast charging and magnetic earbuds."
    }
];


function ProductList() {
    return (
        <section className='px-10 py-28 w-full'>
            <Grid
                container
                justifyContent='center'
                alignItems='stretch'
                rowSpacing={6}
                columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
            >
                {products.map((product, index) => (
                    <Grid item key={product.name + index}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </section>
    );
}

export default ProductList



export const Product = (prop) => {
    const [pick, setColor] = useState(prop.product.color[0].color);
    return (
        <Card className='inShow' sx={{ width: 350, height: '100%', paddingTop: 2 }}>
            <CardMedia
                sx={{
                    height: 200,
                    backgroundSize: 'contain',
                    filter: 'drop-shadow(0 50px 20px #0009)',
                }}
                image={prop.product.img}
                title={prop.product.name}
            />
            <CardContent className='mx-1'>
                <Typography gutterBottom fontWeight='700' variant="h6" component="div">
                    {prop.product.name}
                </Typography>
                <Rating name={prop.product.name} value={prop.product.rating} precision={0.1} readOnly />
                <Typography variant="h6" component='p' fontSize='mono' fontWeight='600'>
                    ₹{prop.product.price}
                    <Typography color='text.secondary' component='span' fontWeight='600' className='line-through ml-2'  >  ₹{prop.product.price + 500}</Typography>
                </Typography>
                <Divider className='my-3' />
                <Typography variant="body1" fontSize='12px' color="text.secondary">
                    {prop.product.description}
                </Typography>
                <div className='flex items-center gap-2 mt-3'>
                    {prop.product.color.map((color,index) => (
                        <Tooltip key={color.name} title={color.name} placement='top'>
                            <div className={pick === color.color ? ' p-1 bg-yellow-400 rounded-full' : 'p-1 rounded-full'}>
                                <Typography component='div' onClick={() => setColor(color.color)} className='w-6 h-6 cursor-pointer rounded-full' style={{ backgroundColor: color.color }}></Typography>
                            </div>
                        </Tooltip>
                    ))}
                </div>
            </CardContent>
            <CardActions className='flex justify-end mx-2 my-1'>
                <Button variant='outlined' color='secondary' endIcon={<ShoppingCartSharp />}>Add To Cart </Button>
            </CardActions>
        </Card>
    )
}