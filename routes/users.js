import express from "express";

import {getUsers, createUser,getUser,deleteUser,updateUser,favUser,getFav,deleteFav } from "../controllers/users.js";

const router = express.Router();
router.get('/users', getUsers);
router.post('/user', createUser);
router.get('/user/:id', getUser);
router.delete('/user/:id', deleteUser);
router.patch('/user/:id', updateUser);
router.post('/userfav/:id', favUser);
router.get('/fav',getFav);
router.delete('/fav/:id', deleteFav);
// router.post('/usert/:id', updateUser);




export default router;