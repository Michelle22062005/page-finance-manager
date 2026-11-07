import { CardInfo } from "@/src/components/CardFunction";
import {
  TrendingUp,
  TrendingDown,
  History,
  ChartNoAxesCombined,
  Wallet
} from "lucide-react";

export const cardsInfo: CardInfo[] = [
    {
        icon: TrendingUp,
        title: "Registro de Ingresos y Gastos",
        description: "Interfaz intuitiva para registrar tus ingresos y gastos de manera rápida y sencilla."
    },
    {
        icon: History,
        title: "Historial de Movimientos",
        description: "Seguimiento detallado de tus transacciones con filtros y categorías para un análisis más profundo."
    },
    {
        icon: ChartNoAxesCombined,
        title: "Reportes Financieros",
        description: "Genera reportes detallados de tu actividad financiera para tomar decisiones informadas."
    },
    {
        icon: Wallet,
        title: "Presupuesto Mensual",
        description: "Planifica y controla tu presupuesto mensual con facilidad."
    }
]