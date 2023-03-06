import {createContext, useState} from "react";

const CollapseContext = createContext({})

export const CollapseProvider =({children}) => {
    const [siderCollapse, setSiderCollapse] = useState(false)
    return (
        <CollapseContext.Provider value={{siderCollapse, setSiderCollapse}}>
            {children}
        </CollapseContext.Provider>
    )
}

export default CollapseContext