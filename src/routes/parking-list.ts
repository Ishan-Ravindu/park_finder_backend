import { Router, Request, Response } from 'express'
import { parkingLots } from '../type'
import * as yup from 'yup'
import sortParkingLotsByDistance from '../utils/sort'

const router = Router()

const schema = yup
  .object({
    latitude: yup.number().required(),
    longitude: yup.number().required()
  })
  .required()

router.get('/parking-center', (req: Request, res: Response) => {
  try {
    schema.validateSync(req.query)
    sortParkingLotsByDistance(parkingLots, Number(req.query.latitude), Number(req.query.longitude))
    return res.status(200).json(parkingLots)
  } catch (error) {
    console.log(error)
    if (error instanceof yup.ValidationError) {
      return res.status(422).json({ errors: error.message })
    } else {
      return res.status(500).json({ errors: 'Internal server error' })
    }
  }
})

export default router
