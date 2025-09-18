import Breadcrumb from "@/components/Breadcrumb";
import PageWrapper from "@/components/PageWrapper";
import ProductImages from "@/components/ProductImages";
import ProductInfo from "@/components/ProductInfo";
import ProductSkeleton from "@/components/Skeletons/ProductSkeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import getProductMock from "@/helpers/getProductMock";
import { ProductDetails } from "@/interfaces/productDetails";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductPage(){
        const router = useRouter();
        const { id } = router.query;
        const [product, setProduct] = useState<ProductDetails>({} as ProductDetails)
        const [loading, setLoading] = useState(true)


        useEffect (() => {
            async function fetchProduct(){
                if(id){
                    const product = getProductMock({id: Number(id)});
                    if(product) {setProduct(product)};
                }
                // setLoading(false);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
            fetchProduct();
        }, [id])

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
                                        {product?.features.map( (feature, index) => {
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
                            <p>Aqui é as especificações</p>
                        </TabsContent>
                        <TabsContent value="reviews">
                            <p>Aqui é as avaliações</p>
                        </TabsContent>
                    </Tabs>
                </>
            )}
            
        </PageWrapper>
    )
}