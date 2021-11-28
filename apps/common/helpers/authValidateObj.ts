import * as Yup from "yup";
import { iLoginParams } from "../../services/apiTypes";

//sign in
export const validateSignInObject:iLoginParams = {
    username:"",
    password:"",
}

export const validateSignInSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Tên tài khoản phải tối thiểu 6 ký tự")
      .max(15, "Tên tài khoản không được quá 15 ký tự")
      .required("Tên đăng nhập không được để trống"),
    password: Yup.string()
      .min(6, "Mật khẩu phải tối thiểu 6 ký tự")
      .max(15, "Mật khẩu không được quá 15 ký tự")
      .required("Mật khẩu không được để trống"),
});


//sign up
export interface iSignUpObject  {
    username: string
    email: string
    password: string
    passwordConfirm: string
  }

export const validateSignUpObject:iSignUpObject = {
    username: "",
    email:"",
    password: "",
    passwordConfirm: ""
};

export const validateSignUpSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Tên tài khoản phải tối thiểu 6 ký tự")
      .max(15, "Tên tài khoản không được quá 15 ký tự")
      .required("Tên đăng nhập không được để trống"),
    email: Yup.string()
      .email("Không đúng định dạng email ")
      .required("Email không được để trống"),
    password: Yup.string()
      .min(6, "Mật khẩu phải tối thiểu 6 ký tự")
      .max(15, "Mật khẩu không được quá 15 ký tự")
      .required("Mật khẩu không được để trống"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password")], "Mật khẩu xác nhận không đúng")
      .required("Mật khẩu xác nhận không được để trống")
});

//Pw recover

interface iPasswordRecover {
    username: string
    email: string
    password: string
}

export const validatePWRecoverObject:iPasswordRecover = {
    username: "",
    email:"",
    password: "",
};

export const validatePWRecoverSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Tên tài khoản phải tối thiểu 6 ký tự")
      .max(15, "Tên tài khoản không được quá 15 ký tự")
      .required("Tên đăng nhập không được để trống"),
    email: Yup.string()
      .email("Không đúng định dạng email ")
      .required("Email không được để trống"),
    password: Yup.string()
      .min(6, "Mật khẩu phải tối thiểu 6 ký tự")
      .max(15, "Mật khẩu không được quá 15 ký tự")
      .required("Mật khẩu không được để trống"),
    
});