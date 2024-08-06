import * as yup from "yup"
export const yupLogin = yup.object().shape({
    userName: yup
    .string()
    .required('Required')
    .email('Email invalid'),
  password: yup
    .string()
    .required('Required')
})

