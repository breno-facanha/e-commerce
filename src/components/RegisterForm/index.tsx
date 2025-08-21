import { FiGithub, FiUser } from "react-icons/fi";
import CustomInput from "../CustomInput";
import { GoLock } from "react-icons/go";
import CustomButton from "../CustomButton";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function RegisterForm() {
    return (
        <div className="w-full max-w-md mx-auto bg-gradient-to-br
         from-[#181b20cc] to-[#1d2025e6] border border-[#2c313a]/50 
         backdrop-blur-xl shadow-[#181b1f] rounded-lg text-gray-400">
            <div className="p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r
                    from-[#5593f7] to-[#1d4fd7] text-transparent bg-clip-text">
                        Criar Conta
                    </h2>
                    <p>Preencha os dados para criar sua conta</p>
                </div>
                <form 
                    onSubmit={() => {} }
                    className="space-y-6"
                >
                    <CustomInput
                        label="Nome Completo"
                        type="text"
                        placeholder="Seu nome completo"
                        icon={<FiUser/>}
                        required={true}
                    />
                    <CustomInput
                        label="Email"
                        type="email"
                        placeholder="seu@email.com"
                        icon={<FiUser/>}
                        required={true}
                    />
                    <CustomInput
                        label="Senha"
                        type="password"
                        placeholder="Sua senha"
                        icon={<GoLock/>}
                        required={true}
                    />
                    <CustomInput
                        label="Confirma senha"
                        type="password"
                        placeholder="Confirme sua senha"
                        icon={<GoLock/>}
                        required={true}
                    />
                    <CustomButton
                        type="submit"
                        variant="primary"
                        className="h-[45px] bg-red-500"
                    >
                        Criar Conta
                    </CustomButton>
                    <div className="flex items-center justify-center w-full gap-2">
                        <div className="border border-gray-600 h-[0.25px] w-full"></div>
                        <p className="text-sm">OU</p>
                        <div className="border border-gray-600 h-[0.25px] w-full"></div>
                    </div>

                    <div className="space-y-3">
                        <CustomButton
                            variant="outline"
                            className="text-sm hover:bg-[#f3991d]/90"
                            >
                            <FiGithub />
                            Continuar com Github
                        </CustomButton>
                        <CustomButton
                            variant="outline"
                            className="text-sm hover:bg-[#2c313a]/50"
                            >
                            <FcGoogle />
                            Continuar com Google
                        </CustomButton>
                    </div>
                    <div className="text-center mt-6 flex items-center justify-center gap-2">
                        <p className="text-sm">Já tem uma conta?</p>
                        <Link
                            href="/"
                            className="text-sm text-[#5593f7] hover:text-[#5593f7]/80 transition-colors"
                        >
                            Fazer Login
                        </Link>
                    </div>
                </form>
            </div>

         </div>
    )
}