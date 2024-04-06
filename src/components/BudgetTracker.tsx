import { AmountDisplay } from "./AmountDisplay"
import { useBudget } from "../hooks/useBudget"
import { useMemo } from "react";

export const BudgetTracker = () => {

    const { state, totalExpenses, availableBudget } = useBudget();


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <img src="/graphic.jpg" alt="graphic" />
            </div>

            <div className="flex flex-col justify-center items-center gap-8">
                <button type="button" className=" bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg">
                    Reset Budget
                </button>

                <AmountDisplay
                    label="Total Budget"
                    amount={state.budget}
                />

                <AmountDisplay
                    label="Available Budget"
                    amount={availableBudget}
                />

                <AmountDisplay
                    label="Spent Budget"
                    amount={totalExpenses}
                />
            </div>
        </div>
    )
}
