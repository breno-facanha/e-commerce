import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const badgeVariantes = cva("inline-flex items-center rounded-full border text-xs px-2.5 py-0.5 font-semibold transition-colors",
    {
        variants:{
            variant:{
                defaut: "border-transparent bg-[#5593f7] hover:bg-[#5593f7]/80",
                destructive: "border-transparent bg-red-500 hover:bg-red-500/80",
                outline: "text-[#F1F2F3] "
            }
        },
        defaultVariants:{
            variant:"defaut"
        }
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariantes>{}

export default function Badge({className, variant, ...props}: BadgeProps){
    return (
        <div className={
            cn(
                badgeVariantes({variant}), 
                className)
        } {...props}></div>
    )
    
}