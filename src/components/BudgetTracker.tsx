import { AmountDisplay } from "./AmountDisplay"


export const BudgetTracker = () => {
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
                    amount={1000}
                />

                <AmountDisplay
                    label="Available Budget"
                    amount={700}
                />

                <AmountDisplay
                    label="Spent Budget"
                    amount={300}
                />
            </div>
        </div>
    )
}
