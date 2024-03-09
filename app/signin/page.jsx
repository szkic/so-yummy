import SigninForm from "@components/SigninForm";
import Link from "next/link";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

const SigninPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return (
    <>
      <div className="flex w-screen flex-col">
        <div className="fixed top-[322px] h-screen w-screen flex-auto bg-secondary-dark-color tablet:top-[418px]"></div>
      </div>

      <div className="realative flex flex-col items-center pt-[60px] tablet:pt-[80px]">
        <div className="absolute flex flex-col items-center pb-[118px] tablet:pb-[59px] desktop:h-screen desktop:flex-row desktop:items-start desktop:gap-[115px]">
          <img
            src="../assets/images/login-sm.svg"
            className="relative top-8 h-[250px] w-[285px] tablet:top-4 tablet:h-[359px] tablet:w-[409px] desktop:h-[468px] desktop:w-[532px]"
          />
          <div className="flex flex-col items-center desktop:mt-10">
            <div className="relative w-[335px] rounded-[30px] bg-secondary-light-color shadow-md tablet:w-[500px]">
              <SigninForm />
            </div>
            <Link
              href="/register"
              className="mt-[18px] text-sm text-primary-text-color underline tablet:text-base"
            >
              Registration
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
