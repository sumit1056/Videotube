import { Router } from "express";

import {
        changeCurrentPassword,
        getCurrentUser,
        getUserChannelProfile,
        getWatchHistory,
        loginUser,
        logoutUser,
        refreshAccessToken,
        registerUser,
        updateAccountDetails,
        updatedAvatar,
        updatedCoverImage
    } from "../controllers/user.controller.js";

import {upload} from "../middlewares/multer.middlewares.js";
import { vertifyJwt } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)

router.route("/login").post(loginUser)

//secure routes
router.route("/logout").post(vertifyJwt, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)

router.route("/change-password").post(vertifyJwt, changeCurrentPassword)
router.route("/getCurrent-user").get(vertifyJwt,getCurrentUser)
router.route("/update-account").patch(vertifyJwt, updateAccountDetails)

router.route("/avatar").patch(vertifyJwt,upload.single("avatar"), updatedAvatar)
router.route("/coverImage").patch(vertifyJwt,upload.single("coverImage"),updatedCoverImage)

router.route("/c/:username").get(vertifyJwt, getUserChannelProfile)
router.route("/history").get(vertifyJwt,getWatchHistory)


export default router