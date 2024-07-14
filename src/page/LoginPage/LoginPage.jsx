import { useForm } from "react-hook-form"
import { yupLogin } from "./yupLogin"
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../../components/input/input";


const LoginPage = () => {
  const { control, handleSubmit } = useForm({mode:"all",defaultValues:{userName:"",password:""},resolver:yupResolver(yupLogin)})


  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="user Name" required control={control} name="userName" />
      <Input label="password" required control={control} name="password" />
      <input type="submit" />
    </form>
  )
}

export default LoginPage;