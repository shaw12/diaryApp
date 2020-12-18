import React, {useState} from 'react'
const StoryContext = React.createContext();

const StoryContextProvider = ({children}) => {
    const [currentId, setCurrentId] = useState('')
    const [contactObjects, setContactObjects] = useState({})
    const [startDate, setStartDate] = useState('')
//new Date()
    return (
        <StoryContext.Provider value={{currentId, contactObjects,startDate,setStartDate, setContactObjects, setCurrentId}}>
            {children}
        </StoryContext.Provider>
    )
}

export {StoryContextProvider, StoryContext}