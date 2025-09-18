import { ProductDetails } from "@/interfaces/productDetails"
import Badge from "../Badge"
import StarRating from "../StarsRating"
import formatCurrency from "@/helpers/formatCurrency"
import CustomButton from "../CustomButton"
import { FiHeart, FiMail, FiMaximize, FiMinus, FiPlus, FiShare, FiShare2, FiShoppingCart } from "react-icons/fi"
import { useState } from "react"
import { BsTruck } from "react-icons/bs"
import { MdOutlineShield } from "react-icons/md"
import { RiResetLeftFill } from "react-icons/ri"

interface ProductInfoProps {
    product: ProductDetails
}
export default function ProductInfo({product}: ProductInfoProps){
    const [quantity, setQuantity] = useState(1)

    const shippinInfos = [
        {
            value: product?.shipping,
            color: "green",
            icon: <BsTruck />
        },
        {
            value: product?.warranty,
            color: "blue",
            icon: <MdOutlineShield />
        },
        {
            value: product?.return,
            color: "orange",
            icon: <RiResetLeftFill />
        }
    
    ]

    function addQuantity(){
        setQuantity(prev => prev + 1)
    }

    function removeQuantity(){
        setQuantity(prev => Math.max(prev - 1, 1))
    }
    return (
        <div className="space-y-6">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">
                        {product?.category}
                    </Badge>
                    {product?.isNew && (
                        <Badge>
                            Novo
                        </Badge>
                    )}
                    {product?.discount && (
                        <Badge variant="destructive">
                            -{product?.discount}% 
                        </Badge>
                    )}
                </div>
                <h1 className="text-2xl font-bold lg:text-3xl mb-4">
                    {product?.name}
                </h1>
                <StarRating
                    rating={product?.rating}
                    reviews={product?.reviews}
                    size={16}
                />
            </div>
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-[#5593f7]">
                        {formatCurrency(product?.price)}
                    </span>
                    {product?.originalPrice && (
                        <span className="text-base text-gray-400 line-through">
                            {formatCurrency(product?.originalPrice)}
                        </span>
                    )}
                </div>
                <p className="text-sm text-gray-400">
                    ou 12x de {formatCurrency(product?.price / 12)} sem juros
                </p>
            </div>

            <div>
                <p className="text-gray-400 leading-relaxed">
                    {product?.description}
                </p> 
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                        <label className="test-sm font-medium">
                            Quantidade:
                        </label>
                        <div className="flex items-center border border-[#2c313a]/50 rounded-md">
                            <CustomButton 
                                variant="ghost"
                                className={`h-[30px] w-[30px] ${quantity === 1 ? ' opacity-50 cursor-default' : 'hover:bg-[#5593f7]'}`}
                                onClick={removeQuantity}
                            >
                                <FiMinus />
                            </CustomButton>
                            <span className="px-4 py-2 text-sm font-medium w-[38px] text-start">{quantity}</span>
                            <CustomButton 
                                variant="ghost"
                                className={`h-[30px] w-[30px] hover:bg-[#5593f7]`}
                                onClick={addQuantity}
                            >
                                <FiPlus />
                            </CustomButton>
                        </div>
                </div>

                <div className="flex gap-3">
                    <CustomButton
                        className="flex justify-center items-center flex-1 gap-10 h-[45px]"
                    >
                        <FiShoppingCart />
                        Adcionar ao carrinho
                    </CustomButton>
                    <CustomButton
                        variant="outline"
                        className="h-[45px] w-[80px] hover:bg-[#5593f7] hover:text-black"
                    >
                        <FiHeart size={20}/>
                    </CustomButton>
                    <CustomButton
                        variant="outline"
                        className="h-[45px] w-[80px] hover:bg-[#5593f7] hover:text-black"
                    >
                        <FiShare2 size={20}/>
                    </CustomButton>
                </div>
                <CustomButton
                    variant="secondary" 
                    className="h-[45px]"
                >
                    Comprar agora
                </CustomButton>
            </div>
            <div className="space-y-3 pt-4 border-t border-[#2c313a]/50">
                    {shippinInfos.map((info, index) => {
                        return (
                            <div className="flex items-center gap-3 text-sm" key={index}>
                                <div className={`
                                        ${info.color === "green" ? 'bg-green-500/10 text-green-500' : ''}
                                        ${info.color === "blue" ? 'bg-blue-500/10 text-blue-500' : ''}
                                        ${info.color === "orange" ? 'bg-blue-500/10 text-orange-500' : ''}
                                        
                                    `}>
                                    {info.icon}
                                </div>
                                <span>{info.value}</span>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}