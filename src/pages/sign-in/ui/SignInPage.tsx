import {Button, Input, Card} from "@rocketweb-studio/ulens-ui-kit";

export const SignInPage = () => {


  return (
    <section className="flex flex-col items-center justify-center mt-[100px]">
      <Card contentClass='px-[25px] pt-[25px] pb-[35px] flex items-center flex-col gap-[37px] w-[378px]'>
        <h1 className="h1 ">Sign In</h1>
        <form action="" className="flex flex-col w-[100%]">
          <Input label={'Email'}/>
          <Input className={'mb-[14px]'} label={'Password'}/>
          <Button  >Sign In</Button>
        </form>
      </Card>

    </section>
  );
};