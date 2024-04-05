import Image from "next/image";
import threeoImage from "../../../../public/logo-site_threeo.png";

export default function LoginComponent() {
  return (
    <div>
     <section className="bg-green-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Image className="mr-50% mb-8" src={threeoImage} alt="logo"/>
      <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-100 border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-green-100 md:text-2xl">
            Bem vindo !
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label className="block mb-2 text-sm font-medium text-green-100">Email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border-b border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required/>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-green-100">Senha</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border-b border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required/>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
              </div>
            </div>
            <button type="submit" className="w-full text-white bg-green-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300   font-medium rounded-lg text-sm px-5 py-2.5 text-center">Entrar
            </button>
            <p className="text-sm font-light text-gray-500">
                Não tem conta? 
              <a href="/login/createAccount" className="font-medium text-primary-600 hover:underline"> Criar conta</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}