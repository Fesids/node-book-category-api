import {Request, Response} from "express";
import { Category, CategoryInput } from "../models/Category.model";


export const CreateCategory = async (req: Request, res:Response) =>{
    const {description, name} = req.body;

    if(!description || !name){
        return res.status(422).json({
            message: "The fields name and description are required",
        })
    };

    const categoryInput: CategoryInput = {
        name,
        description
    }

    const categoryCreated = await Category.create(categoryInput);

    return res.status(201).json({data: categoryCreated})
}

export const GetAllCategories = async (req:Request, res:Response)=>{

    const categories = await Category.find().sort("-createdAt").exec();

    return res.status(200).json(categories)
}

export const GetCategory = async (req:Request, res:Response) =>{
    const {id} = req.params;

    const category = await Category.findOne({_id: id});

    if(!category){
        res.status(404).json(`category with ${id} not found`);
    }

    res.status(200).json(category);
}

export const UpdateCategory = async (req:Request, res:Response) =>{
    const {id} =  req.params;
    const {name, description} = req.body;

    const category = Category.findOne({_id:id});

    if(!category){
        res.status(404).json(`category with id ${id} not found`);

    }

    if(!name || !description){
        return res.json(422).json({message: "the fields name and description are required"});
    }

    await Category.updateOne({_id:id}, {name, description});

    const categoryUpdated = await Category.findById(id, {name, description});

    return res.status(200).json({data: categoryUpdated})
}

export const DeleteCategory = async (req:Request, res:Response) =>{
    const {id} = req.params;

    await Category.findByIdAndDelete(id);

    return res.status(200).json({message: "Category was deleted successfully"});
    
}