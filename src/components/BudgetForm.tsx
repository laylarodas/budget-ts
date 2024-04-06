import { useState, ChangeEvent, useMemo } from 'react'

export const BudgetForm = () => {

    const [budget, setBudget] = useState(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBudget(+e.target.value);
    }

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0;
    }, [budget])

  return (
    <form action="" className="space-y-5">
        <div className="flex flex-col space-y-5">
            <label htmlFor="budget" className=" text-4xl text-blue-600 font-bold text-center">
                Define your budget
            </label>
            <input type="number" className=" bg-white border border-gray-200 p-2" placeholder="Enter you budget" name="budget" id="budget" value={budget} onChange={ handleChange}/>
        </div>

        <input type="submit" value='Define Budget'className=" bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-30" disabled={isValid} />

    </form>
  )
}
