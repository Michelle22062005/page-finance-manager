import Image from "next/image";
import { COLORS } from "@/src/styles/theme"
export function Navbar(){

    return (
        <nav className="flex w-full max-w-6xl mx-auto h-12 items-center justify-between rounded-2xl border border-gray-100 px-6 shadow-sm" >
            <div className="flex items-center gap-2">
               <div className="flex h-10 w-10 items-center justify-center">
                <Image src="/favicon.ico" alt="My Finanzas Logo" className="h-full w-full object-contain" width={824} height={460} />
                </div> 
            <div className="text-lg font-bold" style={{ color: COLORS.text }}>Mis Finanzas</div>
            </div>
            <div className="flex items-center gap-6">
                <a href="#funciones" className="text-sm font-medium" style={{ color: COLORS.text }}>Funciones</a>

            </div>
        </nav>
    )
}