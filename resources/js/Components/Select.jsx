import React, { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function Select({ options = [], defaultOption = null, type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const toCapitalize = (str) => {
        if (!str) return

        if (str.length == 1) return str.toLowerCase()

        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    }

    return (
        <select
            {...props}
            type={type}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        >
            <optgroup className="p-2">
                
                {defaultOption && <option disabled className="capitalize my-2">
                    { defaultOption }
                </option>}
                {options.map((opt, idx) => (<option
                    key={idx}
                    value={typeof opt == 'string' ? opt.toUpperCase() : opt.value?.toUpperCase()}
                    className="mb-2 p-2 capitalize"
                >{ typeof opt == 'string' ? toCapitalize(opt) : toCapitalize(opt.name) }</option>))}
            </optgroup>
        </select>
    );
});
