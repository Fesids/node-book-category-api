import moongose, {Schema, Model, Document} from "mongoose"

type PostDocument = Document & {
    title: string;
    description: string;
    body: string;
    category: string;
}

type PostInput = {
    title: PostDocument["title"];
    description: PostDocument["description"];
    body: PostDocument["body"];
    category: PostDocument["category"];
}

const PostSchema = new Schema(
    {
        title:{
            type: Schema.Types.String,
            require: true
        },
        description:{
            type: Schema.Types.String,
            require: false
        },
        body:{
            type: Schema.Types.String,
            require: false
        },
        category:{
            type: Schema.Types.ObjectId,
            ref: "Category",
            require: true,
            index: true
        },
    },

    {
        collection: "posts",
        timestamps: true
    },
);

const Post: Model<PostDocument> = moongose.model<PostDocument>("Post", PostSchema);

export {Post, PostInput, PostDocument};