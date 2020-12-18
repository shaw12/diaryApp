import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { StoryContext } from '../StoryContext';
import '../App.css'
import {BsPlus} from 'react-icons/bs'

function Header() {
    const history = useHistory();

    const {currentId,setCurrentId} = useContext(StoryContext)
    const path = 12
    const toFormComp = () => {
        setCurrentId('')
        console.log("oh bhai: 12")
        return (
            history.push(`/stories/${path}`)
        )

    }
    return (
        <div className="header">
            <h2>Diary Application</h2>
            <div
                className="btn__add"
                onClick={toFormComp}
            >Add Story<BsPlus /></div>
        </div>
    )
}

export default Header
