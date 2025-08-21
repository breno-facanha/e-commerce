import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import CustomInput from "../CustomInput";
import { GoLock } from "react-icons/go";

export default function LoginForm(){

    return (
        <div className="w-full max-w-md">
            <div className="bg-gradient-to-br from-[#181B20CC] to-[#1d2025e6]
            backdrop-blur-sm border border-[#2c313a]/50 rounded-lg
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
                        <CustomInput
                            label="Email"
                            icon={<CiMail /> }
                            type="email"
                            placeholder="digite seu email"
                            required
                        />
                        <CustomInput
                            label="Senha"
                            icon={<GoLock /> }
                            type="password"
                            placeholder="********"
                            required
                        />
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 text-sm">
                                <input 
                                    type="checkbox" 
                                    className="w-4 h-4 rounded-sm border border-[#2c313a]/50 text-[#5593f7]"
                                />
                                <span className="text-gray-400">Lembrar-me</span>
                            </label>
                            <Link 
                                href="/forgot-password"
                                className="text-sm text-[#5593f7] hover:text-[#5593f7]/80 transition-colors"
                            >
                                Esqueceu sua senha?
                            </Link>
                        </div>
                        <button 
                            type="submit"
                            className="text-lg font-medium rounded-xl bg-gradient-to-r
                             from-[#5593f7] to-[#1d47d7] w-full h-[50px]
                             hover:shadow-xl hover:shadow-[#4896ff26] 
                             transition-all duration-300 ease-in-out cursor-pointer"
                        >
                            Entrar
                        </button>
                    </form>
                    <div className="w-full flex items-center justify-center space-x-2">
                        <div className="w-[32%] h-[1px] bg-[#2c313a]"></div>
                        <p className="text-[12px] text-gray-400">OU CONTINUE COM</p>
                        <div className="w-[32%] h-[1px] bg-[#2c313a]"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <button className="border border-[#2c313a]/50 rounded-xl 
                        bg-[#111418] h-[45px] text-[#f1f2f3] flex items-center 
                        justify-center gap-4 cursor-pointer hover:bg-[#f3991d]/90 hover:text-[#111418]
                        transition-all duration-300 ease-in-out">
                            <FiGithub />
                            <span className="text-sm font-medium">Github</span>
                        </button>
                        <button className="border border-[#2c313a]/50 rounded-xl 
                        bg-[#111418] h-[45px] text-[#f1f2f3] flex items-center 
                        justify-center gap-4 cursor-pointer  hover:bg-[#2c313a]/50 
                        transition-all duration-300 ease-in-out">
                            <FcGoogle />
                            <span className="text-sm font-medium">Google</span>
                        </button>
                    </div>
                    <div className="text-center text-sm text-gray-400 flex items-center justify-center gap-2">
                        <p>Não tem uma conta ?</p>
                        <Link 
                            href="/register" 
                            className="text-[#5593f7] 
                            hover:underline hover:text-[#5593f7]/80 transition-colors font-medium">
                            Registre-se
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}