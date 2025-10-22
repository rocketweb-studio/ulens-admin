import {Button, Card, Input} from "@rocketweb-studio/ulens-ui-kit";
import {zodResolver} from "@hookform/resolvers/zod";
import {type SubmitHandler, useForm} from "react-hook-form";
import {signInSchemas} from "@/features/sign-in/model/schemas/signInSchemas.ts";
import {useMutation} from "@apollo/client/react";
import {Navigate, useNavigate} from "react-router";
import {PATH} from "@/shared";
import {loginAdminQuery} from "@/shared/graphql/queries/loginAdmin.ts";


type Inputs = {
  email: string
  password: string
}


export const SignIn = () => {
  const navigate = useNavigate();
  const [add, {error}] = useMutation(loginAdminQuery);

  const accessToken = localStorage.getItem('adminAccessToken')
  if (accessToken) {
    return <Navigate to={PATH.userList} replace />
  }


  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<Inputs>({
    resolver: zodResolver(signInSchemas),
    defaultValues: {email: '', password: ''},
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    try {
      const loginData = await add({variables: {input: {...data}}}).then((res) => (res.data))
      console.log('loginData', loginData?.loginAdmin.adminAccessToken)
      if (loginData?.loginAdmin.adminAccessToken)  localStorage.setItem('adminAccessToken', loginData.loginAdmin.adminAccessToken)
      if (!error && typeof loginData?.loginAdmin.adminAccessToken === 'string') {
        navigate(PATH.userList)
      }
    } catch (e) {
    }
    reset()
  }


  return (
    <Card contentClass='px-[25px] pt-[25px] pb-[35px] flex items-center flex-col gap-[37px] w-[378px]'>
      <h1 className="h1 ">Sign In</h1>
      <form className="flex flex-col w-[100%]" onSubmit={handleSubmit(onSubmit)}>
        <Input label={'Email'} register={register} name={'email'} error={errors.email?.message}/>
        <Input className={'mb-[14px]'} label={'Password'} register={register} name={'password'} type={'password'}
               showPasswordToggle error={errors.password?.message}/>
        <Button>Sign In</Button>
      </form>
    </Card>
  );
};