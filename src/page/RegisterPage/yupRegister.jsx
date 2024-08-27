import * as yup from "yup"
export const yupRegister = yup.object().shape({
    email: yup.string().required("Nhập email của bạn!").email("Email invalid"),
    age:yup.number().required("Nhập tuổi của bạn! "),
    firstName:yup.string().required("không được bỏ trống! "),
    lastName:yup.string().required("không được bỏ trống! "),
    userName:yup.string().required("không được bỏ trống!"),
    password: yup.string().required("không được bỏ trống!"),
})
