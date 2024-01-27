import config from "../../app/config";
import UserModel from "./user.model";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { TUser } from "./user.interface";

const registerUserToDB = async (data: TUser) => {
  const res = await UserModel.create(data);

  if (!res) {
    throw {
      success: false,
      statusCode: 400,
      message: "Registration failed",
    };
  }
  const payload = {
    _id: res?._id,
    email: res?.email,
    name: res?.name,
    role: res?.role,
  };

  const token = jwt.sign(payload, config.jwt_secret as string, {
    expiresIn: "7h",
  });

  const result = {
    user: {
      _id: res._id,
      username: res?.name,
      email: res?.email,
      role: res?.role,
    },
    token,
  };

  return result;
};
const loginUserToDB = async (data: TUser) => {
  const res = await UserModel.findOne({ email: data?.email });

  if (!res) {
    throw {
      success: false,
      statusCode: 400,
      errorMessage: "User not exist!",
    };
  }

  if (!(await UserModel.isPasswordMatched(data?.password, res?.password))) {
    throw {
      success: false,
      statusCode: 400,
      errorMessage:
        " Your password is wrong! please correct the password and try again!",
    };
  }

  const payload = {
    _id: res._id,
    email: res?.email,
    username: res?.name,
    role: res?.role,
  };

  const token = jwt.sign(payload, config.jwt_secret as string, {
    expiresIn: "7h",
  });

  const result = {
    user: {
      _id: res._id,
      username: res?.name,
      email: res?.email,
      role: res?.role,
    },
    token,
  };

  console.log(token, "token ready");

  return result;
};

export const UserServices = {
  registerUserToDB,
  loginUserToDB,
};
