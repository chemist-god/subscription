import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Subscription Name is required'],
        unique: true,
        trim: true,
        lowercase: true,
        minLength: [3, 'Subscription Name must be at least 3 characters long'],
        maxLength: [50, 'Subscription Name must be at most 50 characters long']
    },
    price: {
        type: Number,
        required: [true, 'Subscription Price is required'],
        min: [0, 'Subscription Price must greater than 0'],
    },
    currency: {
        type: String,
        required: [true, 'Currency is required'],
        enum : ['USD','GHC','EUR','ETH','BTC'],
    },
    frequency: {
        type: String,
        required: [true, 'choose your subscription frequency '],
        enum : ['daily','weekly','monthly','yearly'],
    },
    category: {
        type: String,
        required: [true, 'Subscription Category is required'],
        enum : ['sports','news','entertainment','technology','fashion','food','health','politics'],
    },
    paymentMethod: {
        type: String,
        required: [true, 'Payment Method is required'],
        enum : ['credit card','debit card','paypal','crypto currency'],
        trim: true,
    },
    status: {
        type: String,
        required: [true, 'Subscription Status is required'],
        enum : ['active','expired','pending','cancelled'],
        trim: true,
        default: 'active',
    },
    description: {
        type: String,
        required: [true, 'Subscription Description is required'],
        trim: true,
        lowercase: true,
        minLength: [3, 'Subscription Description must be at least 3 characters long'],  
        maxLength: [50, 'Subscription Description must be at most 50 characters long'],
    },
} , { timestamps: true });

subscriptionSchema.pre('save', function(next) {
    this.name = this.name.toLowerCase();
    this.description = this.description.toLowerCase();
    next();
});