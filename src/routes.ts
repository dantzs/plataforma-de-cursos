import express  from "express";
import { categoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesController";
import { episodesController } from "./controllers/episodesController";
import { authUserConstroller } from "./controllers/authUserController";
import { ensureAuth, ensureAuthViaQuery } from "./middlewares/auth";
import { favoritesController } from "./controllers/favoriteController";
import { likeController } from "./controllers/likeController";




const router = express.Router()

router.post('/auth/register', authUserConstroller.register)
router.post('/auth/login', authUserConstroller.login)

router.get('/categories',ensureAuth, categoriesController.index)
router.get('/categories/:id', ensureAuth, categoriesController.show)
router.get('/courses/featured', ensureAuth, coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get('/courses/search', ensureAuth, coursesController.search)
router.get('/couses/:id', ensureAuth, coursesController.show)
router.get('/episodes/stream', ensureAuthViaQuery, episodesController.stream)
router.get('/favorites', ensureAuth, favoritesController.index)
router.post('/favorites', ensureAuth, favoritesController.create)
router.delete('/favorites/:id', ensureAuth, favoritesController.delete)
router.post('/likes', ensureAuth, likeController.save)
router.delete('/likes/:id',ensureAuth, likeController.delete)


export {router}