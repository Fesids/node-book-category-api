import moongose, {Schema, Document, Model} from "mongoose";
import { type } from "os";


type CategoryDocument = Document & {
    name: string;
    description: string | null
}
type CategoryInput = {
    name: CategoryDocument['name'];
    description: CategoryDocument['description']
}


const CategorySchema = new Schema(
    {
        name:{
            type: Schema.Types.String,
            require: true,
            unique: true
        },

        description:{
            type: Schema.Types.String,
            default: null
        },
    },
    {
        collection: 'categories',
        timestamps: true
    }
)


const Category: Model<CategoryDocument> = moongose.model<CategoryDocument>("Category", CategorySchema);
Category.createCollection();
export {Category, CategoryInput, CategoryDocument};