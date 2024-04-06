import { categories } from "../database/categories"
import { useBudget } from "../hooks/useBudget"
import {ChangeEvent} from 'react'

export const FilterByCategory = () => {

    const { dispatch } = useBudget();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: 'add-filter-category',
            payload: {
                id: e.target.value
            }
        })
    }


  return (
    <div className=" bg-white shadow-lg rounded-lg p-10">
        <form action="">
            <div className="flex flex-col md:flex-row md:items-center gap-5">
                <label htmlFor="category">Filter Expenses</label>
                <select 
                    id="category"
                    className=" bg-slate-100 text-slate-900 p-2 rounded-md flex-1"
                    onChange={handleChange}
                >
                    <option value="">--- All categories ---</option>
                    {
                        categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))
                    }
                </select>
            </div>
        </form>
    </div>
  )
}
