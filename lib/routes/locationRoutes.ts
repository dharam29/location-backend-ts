import {Router} from 'express';
import {addLocation, updateLocation, locationDetail, locationList, removeLocation} from '../service/location';

const router = Router();


router
  .post(`/location`, addLocation)

  .put(`/location/:locationId`, updateLocation)

  .get(`/location`, locationList)

  .get(`/location/:locationId`, locationDetail)

  .delete(`/location/:locationId`, removeLocation)

  .get(`/health-check`, async (req, res) => {
    res.send('Location api server is healthy');
  });

export default router;
