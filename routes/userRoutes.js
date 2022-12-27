import express from "express"
import authController from "../controllers/authController.js"

const router = express.Router()

router.post("/signup", authController.signup)
router.post("/login", authController.login)
router.get('/logout', authController.logout)

router.post("/forgotPassword", authController.forgotPassword)
router.post("/resetPassword/:resetToken", authController.resetPassword)

router.use(authController.protect, authController.restrictTo("user"))

router.post("/updateMyPassword", authController.updatePassword)

export default router