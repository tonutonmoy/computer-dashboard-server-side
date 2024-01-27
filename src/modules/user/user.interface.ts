import { Model, Types } from "mongoose";

export interface TUser {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface UserModel extends Model<TUser> {
  isUserExistsByCustomId(id: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}
