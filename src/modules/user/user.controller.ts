import catchAsync from "../../app/config/utlis/catchAsync";
import { UserServices } from "./user.services";

const registerUser = catchAsync(async (req, res) => {
  const result = await UserServices.registerUserToDB(req?.body);

  res.send({
    statusCode: 201,
    success: true,

    message: "User registered successfully",
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  console.log(req.headers.authorization, "h");
  const result = await UserServices.loginUserToDB(req.body);

  res.send({
    statusCode: 200,
    success: true,

    message: "User login successful",
    data: result,
  });
});

export const USerControllers = {
  registerUser,
  loginUser,
};
