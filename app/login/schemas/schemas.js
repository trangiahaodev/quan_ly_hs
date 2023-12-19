import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// Min 5 characters, 1 uppercase letter, 1 lowercase letter, 1 numeric digit

export const basicSchema = yup.object().shape({
  username: yup.string().required("Không được để trống phần này!"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Vui lòng nhập mật khẩu hợp lệ!" })
    .required("Không được để trống phần này!"),
});
