import { ApiError } from "../utils/ApiError";
import asyncHandler from "../utils/asyncHandler";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  const accessToken =
    req.cookies?.accessToken ||
    req.headers("Authorization")?.replace("Bearer ", "");

  if (!accessToken) {
    throw new ApiError(401, "Unauthorized");
  }
  const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
  const foundUser = await User.findById(decodedToken?._id).select(
    "-password -refreshToken"
  );
  if (!foundUser) {
    throw new ApiError(404, "Invalid Access Token");
  }
  req.user = foundUser;
  next();
});
