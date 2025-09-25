import { FaStar } from "react-icons/fa"

interface StarRatingProps {
    rating: number;
    reviews?: number;
    size?: number;
}

export default function StarRating({rating, reviews, size = 12}: StarRatingProps) {
    return (
        <div className="flex items-center gap-1">
                <div className="flex items-center">
                    {[...Array(5)].map((_, index) => {
                        return (
                            <FaStar
                                key={index}
                                size={size}
                                className={`
                                    ${index < Math.floor(rating) ? "fill-yellow-500" : ""}
                                `}
                            />
                        )
                    })}
                </div>
                <span className="text-xs pt-1">
                    {rating}
                    {reviews && ` (${reviews})`}
                </span>
            </div>
    )
}