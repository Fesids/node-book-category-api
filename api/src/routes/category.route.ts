import {Router} from "express";
import { CreateCategory, DeleteCategory, GetAllCategories, GetCategory, UpdateCategory } from "../controller/Category.controller";


const router = Router();

router.post("/new", CreateCategory);
router.get("/all", GetAllCategories);
router.get("/all/:id", GetCategory);
router.put("/all/:id", UpdateCategory);
router.delete("/all/:id", DeleteCategory);

export const CategoryRouter = router;
