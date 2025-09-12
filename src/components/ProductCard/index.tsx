import { Product } from "@/interfaces/products";
import Image from "next/image";
import Badge from "../Badge";
import CustomButton from "../CustomButton";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { format } from "path";
import formatCurrency from "@/helpers/formatCurrency";

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden hover:shadow-lg transition-all duration-300 backdrop-blur-lg bg-[#181c22] rounded-lg">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={1000}
          height={1000}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && <Badge>Novo</Badge>}
          {product.discount && (
            <Badge variant="destructive">-{product.discount}%</Badge>
          )}
        </div>

        {/* Botão de Favorito */}
        <CustomButton
          variant="ghost"
          className="flex items-center justify-center bg-[#181c22]/80 absolute top-3 right-3 h-[40px] w-[40px] rounded-full 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <CiHeart size={20} />
        </CustomButton>

        {/* Botão de Carrinho */}
        <CustomButton
          variant="ghost"
          className="flex items-center justify-center bg-[#5593f7] text-white absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg 
          opacity-0 group-hover:opacity-100 opacity duration-300 w-[129px] h-[35px] transition-all traslate-y-2 group:hover:translat-y-0  "
        >
          <FiShoppingCart size={18} />
          <span className="text-sm font-medium ml-2">Adicionar</span>
        </CustomButton>
      </div>
      <div className="p-4">
        <div className="space-y-2">
            {product.category && <Badge variant="outline">{product.category}</Badge>}
            <h3 className="font-semibold line-clamp-2 text-sm leading-tight">
                {product.name}
            </h3>
            <div className="flex items-center gap-1">
                <div className="flex items-center">
                    {[...Array(5)].map((_, index) => {
                        return (
                            <FaStar
                                key={index}
                                size={12}
                                className={`
                                    ${index < Math.floor(product.rating) ? "fill-yellow-500" : ""}
                                `}
                            />
                        )
                    })}
                </div>
                <span className="text-xs">&nbsp;(${product.reviews})&nbsp;</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-[#5593f7]">
                  {formatCurrency(product.price)}
              </span> 
              {product.originalPrice && ( 
                  <span className="text-sm text-gray-500 line-through">
                      {formatCurrency(product.originalPrice)}
                  </span>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}