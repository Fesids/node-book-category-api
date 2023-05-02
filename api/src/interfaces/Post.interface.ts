import { ICategory } from "./Category.interfaces";

export interface IPost{
    id: String;
    title: String;
    description: String;
    body: String;
    category: ICategory

}