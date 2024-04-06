import { useMemo } from "react"
import { formatDate } from "../helpers"
import { Expense } from "../types"
import { AmountDisplay } from "./AmountDisplay"
import { categories } from "../database/categories"


type ExpenseDetailProps = {
    expense: Expense
}


export const ExpenseDetail = ({expense} : ExpenseDetailProps) => {

    const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0] , [expense] )

  return (
    <div className=" bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">
        <div>
            <img src={`/${categoryInfo.icon}.svg`} alt="icon" className="w-20" />
        </div>

        <div className="space-y-2 flex-1 ">
            <p className=" text-sm font-bold uppercase text-slate-500">{categoryInfo.name}</p>
            <p className="text-md font-semibold">{expense.expenseName}</p>
            <p className=" text-slate-600 text-sm">{formatDate(expense.date!.toString() )}</p>
        </div>

        <AmountDisplay 
            amount={expense.amount}
        />
    </div>
  )
}
