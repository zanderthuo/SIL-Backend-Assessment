import mongoose from 'mongoose';

const PhotoSchema = new mongoose.Schema({
    album_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        required: true
    },
    photo_title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Photo', PhotoSchema);