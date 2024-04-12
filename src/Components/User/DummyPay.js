import React from 'react';
import { Box, Stack } from "@chakra-ui/react";
import Card from './Card';
import axios from "axios";

const DummyPay = () => {

    const checkoutHandler = async (amount) => {
      console.log(window)
        try {
            // Fetching payment key
            const { data: { key } } = await axios.get("http://localhost:3000/payment/getkey");

            // Initiating payment checkout
            const { data: { order } } = await axios.post("http://localhost:3000/payment/checkout", {
                amount
            });

            // Configuring Razorpay options
            const options = {
                key,
                amount: order.amount,
                currency: "INR",
                name: "6 Pack Programmer",
                description: "Tutorial of RazorPay",
                image: "https://avatars.githubusercontent.com/u/25058652?v=4",
                order_id: order.id,
                callback_url: "http://localhost:3000/payment/paymentverification",
                prefill: {
                    name: "Gaurav Kumar",
                    email: "gaurav.kumar@example.com",
                    contact: "9999999999"
                },
                notes: {
                    "address": "Razorpay Corporate Office"
                },
                theme: {
                    "color": "blue"
                }
            };

            // Creating and opening Razorpay instance
            const razor = new window.Razorpay(options);
            razor.open();
        } catch (error) {
            console.error("Error during payment checkout:", error);
            // Handle errors gracefully (e.g., display error message to the user)
        }
    }

    return (
        <Box>
            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
                <Card amount={5000} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"} checkoutHandler={checkoutHandler} />
                <Card amount={3000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />
            </Stack>
        </Box>
    );
}

export default DummyPay;
