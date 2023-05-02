import {Router} from "express"
import { UpdateCategory } from "../controller/Category.controller";
import { CreatePost,GetAllPosts, GetPost, DeletePost } from "../controller/Post.controller";

const router = Router();

router.post("/new", CreatePost);
router.get("/all", GetAllPosts);
router.get("/all/:id", GetPost);
router.put("/all/update/:id", UpdateCategory);
router.delete("/all/delete/:id", DeletePost);

export const PostRouter = router;