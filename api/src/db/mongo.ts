import mongoose, {Schema, Document, Model}from 'mongoose';



type category = Document & {
    name: string;
    description: string | null;
}


const postSchema = new Schema(
    {
        title:{
            type: String,
            default: "",

        },

        img: {
            type: String,
            default: ""
        },

        body:{
            type: String,
            default: "",

        }, 
        createdAt:{
            type: Date,
            default: Date.now
        },
        updatedAt:{
            type: Date,
            default: Date.now
        }
    }
)

export const MongoPost = mongoose.model("Post", postSchema);