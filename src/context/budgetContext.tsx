import { useReducer, createContext, Dispatch, ReactNode, useMemo } from "react"
import { budgetReducer, initialState, BudgetActions, BudgetState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
    totalExpenses: number
    availableBudget: number
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({ children }: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => total + expense.amount, 0), [state.expenses])

    const availableBudget = state.budget - totalExpenses

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpenses,
                availableBudget
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}