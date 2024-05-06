import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

const ChatBotComponent = () => {
    const steps = [
        {
            id: "greet",
            message: "Hello, Welcome to our shop",
            trigger: "done",
        },
        {
            id: "done",
            message: "Please enter your name!",
            trigger: "waiting1",
        },
        {
            id: "waiting1",
            user: true,
            trigger: "name",
        },
        {
            id: "name",
            message: "Hi {previousValue}, How can I assist you today?",
            trigger: "menu",
        },
        {
            id: "menu",
            options: [
                { value: "orderStatus", label: "Order Status", trigger: "orderStatus" },
                { value: "productInfo", label: "Product Information", trigger: "productInfo" },
                { value: "account", label: "Account Management", trigger: "account" },
                { value: "payment", label: "Payment and Billing", trigger: "payment" },
                { value: "shipping", label: "Shipping and Delivery", trigger: "shipping" },
                { value: "general", label: "General Inquiries", trigger: "general" },
                { value: "escalate", label: "Escalate my query", trigger: "escalate" },
            ],
        },
        {
            id: "orderStatus",
            message: "Please provide your order number for us to check the status.",
            trigger: "waitingOrderStatus",
        },
        {
            id: "waitingOrderStatus",
            user: true,
            trigger: "orderStatusResult",
        },
        {
            id: "orderStatusResult",
            message: "Your order {previousValue} is currently being processed and is expected to be shipped soon.",
            end: true,
        },
        {
            id: "productInfo",
            message: "Sure, what product are you inquiring about?",
            trigger: "productInfoInput",
        },
        {
            id: "productInfoInput",
            user: true,
            trigger: "productInfoResult",
        },
        {
            id: "productInfoResult",
            message: "The {previousValue} is a great choice! Here are the details...",
            end: true,
        },
        {
            id: "account",
            message: "You can manage your account settings by logging in to your account.",
            end: true,
        },
        {
            id: "payment",
            message: "For payment inquiries, please contact our customer support team.",
            end: true,
        },
        {
            id: "shipping",
            message: "Our standard shipping time is 3-5 business days. For expedited shipping options, please contact us.",
            end: true,
        },
        {
            id: "general",
            message: "For general inquiries or assistance, you can reach out to our customer support team.",
            end: true,
        },
        {
            id: "escalate",
            message: "Your query will be escalated to a higher level of support. Please provide a brief description of your issue.",
            trigger: "waitingEscalate",
        },
        {
            id: "waitingEscalate",
            user: true,
            trigger: "escalateResult",
        },
        {
            id: "escalateResult",
            message: "Your query has been escalated. Our team will contact you for further assistance.",
            end: true,
        },
    ];

    return (
        <Segment className="float-end">
            <ChatBot steps={steps} />
        </Segment>
    );
}

export default ChatBotComponent;
