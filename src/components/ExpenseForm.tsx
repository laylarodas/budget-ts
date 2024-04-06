import { useState, ChangeEvent, FormEvent } from "react";
import type { DraftExpense, Value } from "../types";
import { categories } from "../database/categories"
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { ErrorMessage } from "./ErrorMessage";



export const ExpenseForm = () => {

    const [expense, setExpense] = useState<DraftExpense>({
        expenseName: '',
        amount: 0,
        category: '',
        date: new Date()
    })

    const [error, setError] = useState('');
 

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        const isAmountField = ['amount'].includes(name)
        setExpense({
            ...expense,
            [name]: isAmountField ? +value : value
        })
    }

    const handleChangeDate = (value: Value) => {
        setExpense({
            ...expense,
            date: value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //validation

        if(Object.values(expense).includes('')) {
            setError('All fields are required')
            return
        }
    }

    return (
        <form action="" className="space-y-5" onSubmit={handleSubmit}>
            <legend className=" uppercase text-center text-lg font-bold border-b-4 border-blue-500 py-2">
                New Expense
            </legend>

            {error && <ErrorMessage >{error}</ErrorMessage>}

            <div className=" flex flex-col gap-2">
                <label htmlFor="expenseName" className="text-lg">Expense name: </label>
                <input type="text" id="expenseName" name="expenseName" className="p-2 bg-slate-100 rounded-md" placeholder="Add expense name" value={expense.expenseName} onChange={handleChange}/>
            </div>

            <div className=" flex flex-col gap-2">
                <label htmlFor="amount" className="text-lg">Amount: </label>
                <input type="number" id="amount" name="amount" className="p-2 bg-slate-100 rounded-md" placeholder="Add amount. Ej: 300" value={expense.amount} onChange={handleChange}/>
            </div>

            <div className=" flex flex-col gap-2">
                <label htmlFor="category" className="text-lg">Category: </label>
                <select id="category" name="category" className="p-2 bg-slate-100 rounded-md" value={expense.category} onChange={handleChange}>
                    <option value="">---  Select category  ---</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}

                </select>
            </div>

            <div className=" flex flex-col gap-2">
                <label htmlFor="date" className="text-lg">Expense Date: </label>
                <DatePicker className=" bg-slate-100 p-2 border-0" value={expense.date} onChange={handleChangeDate}/>
            </div>

            <input type="submit" value={'Save Expense'} className=" bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg" />

        </form>
    )
}
