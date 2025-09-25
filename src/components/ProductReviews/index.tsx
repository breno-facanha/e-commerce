import getProductReviewsMock from "@/helpers/getProductReviewsMock";
import { Review } from "@/interfaces/reviews";
import { useEffect, useState } from "react";
import StarRating from "../StarsRating";

interface ProductReviewsProps {
    id: number;
}
export default function ProductReviews({ id }: ProductReviewsProps){
    const [reviews, setReviews] = useState<Review[]>([])

    useEffect(() => {
        async function fetchReviews(){
            try {
                const response = await getProductReviewsMock({ id })
                setReviews(response)
            } catch (error) {
                console.log(error)
            }
        }
        fetchReviews();
    }, [])
    return (
        <ul>
            {reviews?.map( ( reviews, index ) => {
                return (
                    <li 
                        key={index}
                        className="border-b border-[#343942]/50 pb-6"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <StarRating 
                                rating={reviews.rating}
                                />
                            <span className="text-sm font-medium ">
                                {reviews.author}
                            </span>
                            <span className="text-xs text-gray-400">
                                {reviews.timestamp}
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}