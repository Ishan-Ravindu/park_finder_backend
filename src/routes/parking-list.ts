import { Router, Request, Response } from 'express';
import { parkingLots } from '../type';
import * as yup from "yup";
import sortParkingLotsByDistance from '../utils/sort';

const router = Router();

const schema = yup.object({
  latitude: yup.number().required(),
  longitude: yup.number().required(),
}).required();


router.get('/parking-list', (req:Request , res:Response) => {

  try {
    schema.validateSync(req.body);
    sortParkingLotsByDistance(parkingLots, req.body.latitude, req.body.longitude);
    return res.status(200).json(parkingLots)

  } catch (error) {
    if(error instanceof yup.ValidationError){
      return res.status(422).json({ errors: error.message });
    }else{
      return res.status(500).json({ errors: "Internal server error" });
    }
  }

});

export default router;