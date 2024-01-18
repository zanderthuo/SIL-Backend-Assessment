import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    socialId: {
        type: String,
        required: true,
    },

}, { timestamps: true });

export default mongoose.model('User', UserSchema);