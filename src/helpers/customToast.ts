import { toast } from 'react-toastify';

interface customToastOptions {
    message: string;
}

class customToast {
    static sucess({ message }: customToastOptions) {
       toast.success(message )
    }
   
    static error({ message }: customToastOptions) {
       toast.error(message )
    }
   
    static warning({ message }: customToastOptions) {
       toast.warning(message )
    }
    static info({ message }: customToastOptions) {
       toast.info(message )
    }
}

export default customToast;