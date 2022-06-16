import { Router } from 'express'
import * as moviesCtrl from '../controllers/movies.js'

const router = Router()


router.get('/new', moviesCtrl.new)

router.get('/', moviesCtrl.index)

router.post('/', moviesCtrl.create)

export {
  router
}
