import { CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import { AmountDisplay } from "./AmountDisplay"
import { useBudget } from "../hooks/useBudget"
import "react-circular-progressbar/dist/styles.css"


export const BudgetTracker = () => {

    const { dispatch, state, totalExpenses, availableBudget } = useBudget();

    const percentage = +((totalExpenses / state.budget) * 100).toFixed(2);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <CircularProgressbar 
                    value={percentage} 
                    styles={buildStyles({
                        pathColor: percentage === 100 ? '#dc2626' : '#3b82f6',
                        trailColor: '#f5f5f5',
                        textSize: 8,
                        textColor: percentage === 100 ? '#dc2626' : '#3b82f6'
                    })}
                    text={`${percentage}% Spent`}
                />
            </div>

            <div className="flex flex-col justify-center items-center gap-8">
                <button type="button" className=" bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg" onClick={() => dispatch({type: 'reset-app'})}>
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
