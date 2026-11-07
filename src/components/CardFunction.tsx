import { COLORS } from "@/src/styles/theme";
import { Icon, type LucideIcon } from "lucide-react";

export type CardInfo = {
    icon: LucideIcon,
    title: string,
    description: string
}


export function CardFuntion({ icon: Icon, title, description }: CardInfo) {

    return (
        
        <div className="flex w-full max-w-[320px] flex-col gap-4 rounded-lg border border-gray-500 bg-transparent p-4 shadow-md transition-all duration-500 ease-in-out hover:max-w-[340px] hover:bg-gray-100 hover:shadow-lg dark:border-white/[.145] dark:hover:bg-black/60">
           <div className="flex h-12 w-12 items-center justify-center">
                <Icon size={32} strokeWidth={1.8} style={{ color:"rgb(99, 158, 189)" }} />
            </div>
            <div>
                <h3 className="text-lg font-bold" style={{color: COLORS.text}}>{title}</h3>
                <p className="text-gray-900 dark:text-gray-400">{description}</p>
            </div>
           
        </div>
    )
}