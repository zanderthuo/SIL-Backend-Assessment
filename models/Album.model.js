import mongoose from 'mongoose';

const AlbumSchema = new mongoose.Schema({
    album_title: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

}, { timestamps: true });

export default mongoose.model('Album', AlbumSchema);