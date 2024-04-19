const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    shippingInfo: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        phoneNo: {
            type: String,
            required: true,
        },
        postalCode: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    orderItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
                // _id: false,
            },
            quantity: {
                type: Number,
                required: true,
                default: 1,
            },
        },
    ],
   
    paymentInfo: {
        id: {
            type: String,
            required: true,
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        status: {
            type: String,
        },
        paidAt: {
            type: Date,
        },
        itemsPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        taxPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        shippingPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        totalPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        couponAvailable: {
            type: Boolean,
            default: false,
        },
        couponValue: {
            type: Number,
            default: 0.0,
        },
        orderStatus: {
            type: String,
            required: true,
            default: "processing",
        },
        deliveredAt: {
            type: Date,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
});

module.exports = mongoose.model("Order", orderSchema);