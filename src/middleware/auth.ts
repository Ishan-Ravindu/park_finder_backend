// import { NextFunction, Request, Response } from 'express'
// import firebase from '../config/firebase-config'

// class AuthMiddleware {
//   async decodeToken(req: Request, res: Response, next: NextFunction) {
//     if (!req.headers.authorization) return res.status(400).json({ message: 'No token provided' })

//     const token = req.headers.authorization.split(' ')[1]

//     try {
//       const decodeValue = await firebase.auth().verifyIdToken(token)
//       console.log(decodeValue)
//       if (decodeValue) {
//         return next()
//       }
//     } catch (e) {
//       console.log(e)
//       return res.status(401).json({ message: 'Unauthorized' })
//     }
//   }
// }

// export default new AuthMiddleware()
