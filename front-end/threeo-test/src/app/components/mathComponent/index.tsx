'use client';
import { useState } from "react";
import Image from "next/image";
import threeoImage from "../../../../public/logo-site_threeo.png";

export default function CreateAccountComponent() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operator, setOperator] = useState("");

  const handleButtonClick = (value: string) => {
    if (!isNaN(Number(value))) {
      setExpression((prevExpression) => prevExpression + value);
      if (!operator) {
        setNumero1((prevNumero1) => prevNumero1 + value);
      } else {
        setNumero2((prevNumero2) => prevNumero2 + value);
      }
    } else if (value === "=") {
      setExpression((prevExpression) => prevExpression + value);
    } else if (value === "C") {
      setExpression("");
      setResult("");
      setNumero1("");
      setNumero2("");
      setOperator("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
      setOperator(value);
    }
  };

  const handleMathOperation = async () => {
    const token = localStorage.getItem("token");
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const operacao = operator;
    try {
      const response = await fetch("http://localhost:3000/math", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          num1,
          num2,
          operacao,
        }),
      });
      const data = await response.json();
      setResult(data.resultado);
    } catch (error) {
      console.error(error);
      setResult("Erro");
    }
  };

  return (
    <div>
      <section className="bg-green-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Image src={threeoImage} alt="logo" className="mb-8" />
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-100 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-green-100 md:text-2xl">
                Bora calcular ?
              </h1>
              <div className="space-y-4">
              <div className="flex justify-center">
                  <input
                    type="text"
                    value={result !== "" ? result : expression}
                    className="w-full text-2xl text-right border-b border-gray-300 text-gray-900 sm:text-2xl rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5"
                    readOnly
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <button className={`bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={() => handleButtonClick("7")}>7</button>
                  <button className={`bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={() => handleButtonClick("8")}>8</button>
                  <button className={`bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={() => handleButtonClick("9")}>9</button>
                  <button className={`bg-green-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={() => handleButtonClick("+")}>+</button>

                  <button className={`bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={() => handleButtonClick("4")}>4</button>
                  <button className={`bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={() => handleButtonClick("5")}>5</button>
                  <button className={`bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={() => handleButtonClick("6")}>6</button>
                  <button className={`bg-green-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={() => handleButtonClick("-")}>-</button>

                  <button className={`bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={() => handleButtonClick("1")}>1</button>
                  <button className={`bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={() => handleButtonClick("2")}>2</button>
                  <button className={`bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={() => handleButtonClick("3")}>3</button>
                  <button className={`bg-green-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={() => handleButtonClick("*")}>*</button>

                  <button className={`bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={() => handleButtonClick("C")}>C</button>
                  <button className={`bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={() => handleButtonClick("0")}>0</button>
                  <button className={`bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={handleMathOperation}>=</button>
                  <button className={`bg-green-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={() => handleButtonClick("/")}>/</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
