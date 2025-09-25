import Breadcrumb from "@/components/Breadcrumb";
import PageWrapper from "@/components/PageWrapper";
import ProductImages from "@/components/ProductImages";
import ProductInfo from "@/components/ProductInfo";
import ProductReviews from "@/components/ProductReviews";
import ProductSkeleton from "@/components/Skeletons/ProductSkeleton";
import StarRating from "@/components/StarsRating";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import customToast from "@/helpers/customToast";
import getProductMock from "@/helpers/getProductMock";
import requestApi from "@/helpers/requestApi";
import { ProductDetails } from "@/interfaces/productDetails";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ProductPage(){
        const router = useRouter();
        const { id } = router.query;
        const [product, setProduct] = useState<ProductDetails>({} as ProductDetails)
        const [loading, setLoading] = useState(true)


        useEffect (() => {
            async function fetchProduct(){
                setLoading(true)
                
                try {
                    if(!id) return;

                    const response = await requestApi({
                        url: `/products/${id}`,
                        method: 'GET'
                    })
                    setProduct(response.data)
                    
                } catch (error) {
                    console.log(error)
                    customToast.error({message: 'Erro ao carregar o produto'})
                }

                setLoading(false)
            }
            fetchProduct();
        }, [id])

        if(!product.id ){
            return <p>não deu</p>
        }
    return(
        <PageWrapper>
            {loading ? (
                <ProductSkeleton />
            ): (
                <>
                
                    <Breadcrumb
                    items={[
                        { title: product.category },
                        { title: product.name },
                    ]}
                    />
                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        <ProductImages
                        images={product.images}
                        />
                        <ProductInfo 
                        product={product}
                        />

                    </div>
                     <Tabs
                        defaultValue="description"
                        className="w-full"
                    >  
                        <TabsList>
                            <TabsTrigger value="description">Descrição</TabsTrigger>
                            <TabsTrigger value="especifications">Especificação</TabsTrigger>
                            <TabsTrigger value="reviews">Avaliações</TabsTrigger>
                        </TabsList>

                        <TabsContent value="description">
                            <div className="rounded-lg border border-[#343942] bg-[#181b20">
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-4">Características Principais</h3>
                                    <ul className="space-y-2">
                                        {product?.features?.map( (feature, index) => {
                                            return (
                                            <li className="flex items-center gap-2" key={index}>
                                                <div className="w-2 h-2 rounded-full bg-[#5593f7]"></div>
                                                {feature}
                                            </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="especifications">
                            <div className="rounded-lg border border-[#343942] bg-[#181b20] ">
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-4">Especificações Técnicas</h3>
                                    {product?.specifications && (
                                        <table className="w-full text-left">
                                            <tbody>
                                                {Object.entries(product?.specifications || {}).map(([key, value]) => (
                                                    <div key={key} className={`flex justify-between border-b border-[#2c313a] py-2`}>
                                                        <td className="font-medium">{key}</td>
                                                        <td className="text-gray-400">{value}</td>
                                                    </div>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="reviews">
                           <div className="rounded-lg border border-[#343942] bg-[#181b20] shadow-md">
                                 <div className="p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-lg font-semibold">
                                            Avaliações dos clientes
                                        </h3>
                                        <StarRating 
                                            rating={product?.rating} 
                                            reviews={product?.reviews}
                                            size={16}    
                                        />
                                    </div>
                                    <ProductReviews id={product?.id} />
                                </div>   
                           </div>
                        </TabsContent>
                    </Tabs>
                </>
            )}
            
        </PageWrapper>
    )
}