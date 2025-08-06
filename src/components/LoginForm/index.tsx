import Link from "next/link";
import { useState } from "react";
import { CiLock, CiMail } from "react-icons/ci";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export default function LoginForm(){
    const [ showPassword, setShowPassword ] = useState(false);

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    return (
        <div className="w-full max-w-md">
            <div className="bg-gradient-to-br from-[#181B20CC] to-[#1d2025e6]
            backdrop-blur-sm border border-[#2c313a]/50
            ">
                <div className="flex flex-col p-6 text-center">
                    <h1 
                        className="text-2xl font-semibold 
                        bg-gradient-to-r from-[#5593f7] to-[#1d4fd7] 
                        text-transparent bg-clip-text
                        ">
                            Bem-vindo de volta
                    </h1>
                    <p className="text-gray-400">Entre na sua conta para continuar</p>
                </div>
                <div className="pt-0 p-6 space-y-4">
                    <form onSubmit={() => {} } className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-[#F1F2F3]">
                                Email
                            </label>
                            <div className="relative">
                                <CiMail 
                                    className="absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2"
                                    size={20}
                                    strokeWidth={1}
                                />

                                <input
                                    type="email"
                                    id="email"
                                    className="bg-[#21252b80] border border-[#2c313a]/50
                                     focus:border-[#5593f7] outline-none rounded-md pl-10
                                     w-full py-2 placeholder:text-gray-500 text-[#F1F2F3]"
                                    placeholder="seu@email.com"
                                    required
                                />
                            </div>
                        </div>
                         <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-[#F1F2F3]">
                                Senha
                            </label>
                            <div className="relative">
                                <CiLock 
                                    className="absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2"
                                    size={20}
                                    strokeWidth={1.2}
                                />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="bg-[#21252b80] border border-[#2c313a]/50
                                     focus:border-[#5593f7] outline-none rounded-md px-12
                                     w-full py-2 placeholder:text-gray-500 text-[#F1F2F3]"
                                    placeholder="*********"
                                    required
                                />
                                <div 
                                    onClick={handleShowPassword}
                                    className="absolute text-gray-400 right-3 top-1/2 
                                    transform -translate-1/2 text-[20px] cursor-pointer 
                                    hover:text-white transition-colors">
                                    { showPassword ? <IoEyeOffOutline /> : <IoEyeOutline /> }
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 text-sm">
                                <input type="checkbox" className="w-3 h-3 rounded-sm border border-[#2c313a]/50 text-[#5593f7]"/>
                                <span className="text-gray-400">Lembrar-me</span>
                            </label>
                            <Link href="/forgot-password" className="text-[#5593f7] hover:underline text-sm">
                                Esqueci minha senha
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}