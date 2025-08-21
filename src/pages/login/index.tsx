import LoginForm from "@/components/LoginForm";
import imageBG from "../../../public/bg.jpg"
export default function Login() {
  return (
    <div 
      className="min-h-screen flex justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${imageBG.src})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat'}}
    >
     <div className="absolute inset-0 bg-[#111418]/70 backdrop-blur-sm">
        <div className="relative z-10 w-full px-4 h-full flex items-center justify-center">
          <LoginForm />
        </div>
     </div>
    </div>
  );
}