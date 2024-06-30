
'use client';
import IconButton from '@mui/material/IconButton';
import { Box, CardContent, CardMedia, Divider, Drawer, Typography, List, ListItem } from '@mui/material';
import { Close } from '@mui/icons-material';
import React from 'react';
export interface DrawerProps {
    open: boolean;
    handleDrawerClose: () => void;
}
const products = [
    {
        name: "Boat Rockerz 400",
        price: 999,
        color: [
            { name: "Carbon Black", color: "#000000" },
            { name: "Lush Green", color: "#00FF00" },
            { name: "Ocean Blue", color: "#0000FF" }
        ],
        img: "https://www.mivi.in/cdn/shop/files/DuoPodsi7-Black.png?v=1718271286&width=360",
        rating: 4.3,
        description: "High-quality on-ear Bluetooth headphones with deep bass and a comfortable fit."
    },
    {
        name: "Boat Stone 1200",
        price: 2999,
        color: [
            { name: "Midnight Blue", color: "#000080" },
            { name: "Sunset Red", color: "#FF4500" },
            { name: "Forest Green", color: "#228B22" }
        ],
        img: "https://www.mivi.in/cdn/shop/files/36.png?v=1704170664&width=360",
        rating: 4.6,
        description: "Portable Bluetooth speaker with 14W output and 9 hours of playtime."
    },
    {
        name: "Boat Rockerz 255 Pro+",
        price: 1299,
        color: [
            { name: "Navy Blue", color: "#000080" },
            { name: "Electric Yellow", color: "#FFFF00" },
            { name: "Metallic Grey", color: "#A9A9A9" }
        ],
        img: "https://www.mivi.in/cdn/shop/files/SuperPodsDueto-Black.png?v=1719215422&width=360",
        rating: 4.4,
        description: "Bluetooth earphones with fast charging and magnetic earbuds."
    }
];
const ShoppingBagDrawer = (props: DrawerProps) => {
    return (
        <Drawer variant="persistent" anchor="right" open={props.open}>
            <Box className="flex justify-between p-5 md:w-[400px] w-screen">
                <Typography variant="h6" component="div" className="font-bold">Your Cart</Typography>
                <IconButton onClick={props.handleDrawerClose}>
                    <Close />
                </IconButton>
            </Box>
            <Divider />
            <List className="flex-1 overflow-hidden max-w-[400px]">
                {products.map((product) => (
                    <ListItem key={product.name} disablePadding sx={{ display: 'block' }}>
                        <Box className="flex px-3">
                            <CardMedia
                                component="img"
                                sx={{ width: '100px', backgroundImage: 'cover' }}
                                image={product.img}
                                alt={product.name}
                            />
                            <CardContent className="w-full px-2 truncate">
                                <Typography className="truncate" gutterBottom variant="body1" component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ₹{product.price}
                                </Typography>
                            </CardContent>
                        </Box>
                        <Divider />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Box className="flex p-2 justify-evenly items-center">
                <div className="flex-1 px-2">
                    <Typography variant="h6" className="font-bold" component="p">₹{products.reduce((acc, item) => acc + item.price, 0)}</Typography>
                    <Typography variant="caption">including all tax*</Typography>
                </div>
                <Divider orientation="vertical" flexItem />
                <Typography className="p-2 mx-1" variant="button" component="button" color="secondary">Confirm Order</Typography>
            </Box>
        </Drawer>
    );
};

export default ShoppingBagDrawer;