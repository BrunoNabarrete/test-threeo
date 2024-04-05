'use client';
import React from "react";
import { useState } from "react";
import Image from "next/image";
import threeoImage from "../../../../public/logo-site_threeo.png";

export default function CreateAccountComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleCreateAccount = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
        }),
      });
      const data = await response.json();
      alert("Conta criada com sucesso");
      window.location.href = "/login";
    } catch (error) {
      alert("Erro ao criar conta");
      console.error(error);
    }
  };

  return (
    <div>
     <section className="bg-green-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Image className="mr-50% mb-8" src={threeoImage} alt="logo"/>
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-100 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-green-100 md:text-2xl">
              Que bom ter você aqui!
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleCreateAccount} method="post">
              <div>
                <label className="block mb-2 text-sm font-medium text-green-100">Nome</label>
                <input type="text" value={name} onChange={handleChangeName} name="name" id="name" className="bg-gray-50 border-b border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="João da Silva" required/>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-green-100">Email</label>
                <input type="email" value={email} onChange={handleChangeEmail} name="email" id="email" className="bg-gray-50 border-b border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required/>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-green-100">Senha</label>
                <input type="password" value={password} onChange={handleChangePassword} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border-b border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required/>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                </div>
              </div>
              <button type="submit" className="w-full text-white bg-green-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300   font-medium rounded-lg text-sm px-5 py-2.5 text-center">Criar conta
              </button>
              <p className="text-sm font-light text-gray-500">
                Já possui conta?
                <a href="/login" className="font-medium text-primary-600 hover:underline"> Entrar</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}
