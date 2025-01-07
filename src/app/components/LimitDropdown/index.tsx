"use client"

import { FC } from "react";

type LimitDropdownProps = {
    limit: number;
    offset: number;
};

const LimitDropdown: FC<LimitDropdownProps> = ({ limit, offset }) => (
    <div className="flex justify-end mb-4 mr-4">
        <label htmlFor="limit" className="mr-2 text-white text-lg">Elementos:</label>
        <select 
            id="limit"
            defaultValue={limit}
            onChange={(({ target: { value }}) => window.location.href = `/?offset=${offset}&limit=${value}`)}
            className="bg-white text-black rounded-lg px-2 py-1 shadow-lg"
        >
            {[10, 20, 50, 100].map((item, index) => (
                <option value={item} key={`limit-option-${item}-${index}`}>{item}</option>
            ))}
        </select>
    </div>
);

export default LimitDropdown;