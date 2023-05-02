import {Response, Request} from "express"
import { Post, PostInput } from "../models/Post.model";

export const CreatePost = async (req:Request, res:Response) =>{
    const {title, description, body, category} = req.body;
    
    if(!title || !description || !body || !category){
        return res.status(422).json({message: "The fields title, description, body, category"});

    }

    const postInput: PostInput = {
        title,
        description,
        body,
        category
    };

    const postCreated = await Post.create(postInput);

    return res.status(201).json({data: postCreated});


}

export const GetAllPosts = async (req:Request, res:Response) =>{
    const posts = await Post.find().populate("category").sort("-createdAt").exec();

    return res.status(200).json(posts)
}

export const GetPost = async (req: Request, res:Response) =>{
    const {id} = req.params;

    const post = await Post.findOne({_id:id}).populate("category").exec();

    if(!post){
        res.status(422).json({message: `post with user ${id} not found`});
    }

    return res.status(200).json({data: post});


}

export const updatePost = async (req:Request, res:Response) =>{
    const {id} =  req.params;
    const {title, description, body, category} = req.body;

    const post = await Post.findOne({_id:id});

    if(!post){
        return res.status(404).json(`category with id ${id} not found`);

    }

    if(!title || !description){
        return res.json(422).json({message: "the fields name and description are required"});
    }



    //Post.updateOne({_id:id}, {title, description, body, category});
    await Post.updateOne({_id:id}, {title, description, body, category}, {
        new: true
    })

    const postUpdated = await Post.findById(id);
    
    
    return res.status(200).json({data: postUpdated})
}

export const DeletePost = async (req:Request, res:Response) =>{
    const {id} = req.params;

    await Post.findByIdAndDelete(id);

    return res.status(200).json({message: `post with id ${id} was deleted`});
}