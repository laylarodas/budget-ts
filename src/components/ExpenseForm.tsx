import { categories } from "../database/categories"


export const ExpenseForm = () => {
  return (
    <form action="" className="space-y-5">
        <legend className=" uppercase text-center text-lg font-bold border-b-4 border-blue-500 py-2">
            New Expense
        </legend>

        <div className=" flex flex-col gap-2">
            <label htmlFor="expenseName" className="text-lg">Expense name: </label>
            <input type="text" id="expenseName" name="expenseName" className="p-2 bg-slate-100 rounded-md" placeholder="Add expense name"/>
        </div>

        <div className=" flex flex-col gap-2">
            <label htmlFor="amount" className="text-lg">Amount: </label>
            <input type="number" id="amount" name="amount" className="p-2 bg-slate-100 rounded-md" placeholder="Add amount. Ej: 300"/>
        </div>

        <div className=" flex flex-col gap-2">
            <label htmlFor="category" className="text-lg">Category: </label>
            <select id="category" name="category" className="p-2 bg-slate-100 rounded-md">
                <option value="">---  Select category  ---</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}

            </select> 
        </div>

        <input type="submit" value={'Save Expense'} className=" bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"/>

    </form>
  )
}
