import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Home from './Home'
import { useNavigate, useSearchParams } from "react-router-dom"
import { AiOutlineArrowLeft } from 'react-icons/ai'
const PaymentSuccess = () => {

    const seachQuery = useSearchParams()[0]
    const navigate = useNavigate();

    const referenceNum = seachQuery.get("reference")
    return (
        <Box>
            <VStack h="100vh" justifyContent={"center"}>
                <Heading textTransform={"uppercase"}> Order Successfull</Heading>
                <Text>
                    Reference No.{referenceNum}
                </Text>
                    <button onClick={()=>navigate("/")} className='btn btn-outline-success'><AiOutlineArrowLeft className="fs-5 me-2" />Back to shop</button>
                    
            </VStack>
        </Box>
    
    )
}

export default PaymentSuccess