import React,{useState, useEffect, useContext} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import db from '../firebase'
import { StoryContext } from '../StoryContext'
import './StoryForm.css'


function StoryForm() {

    const {currentId, contactObjects, setCurrentId} = useContext(StoryContext)

    const sId = useParams()
    const history = useHistory()

    useEffect(() => {
        if(sId){
            setCurrentId(currentId)
            console.log("Ahhhha")
        } else{
            setCurrentId('')
            console.log('Bhaidia')
        }
    }, [currentId])

    console.log("smmma yr",currentId)
    const initialFieldValues = {
        storyTitle: '',
        storyDetail: '',
        storyDate: '',
        dateNow: Date.now(),
        
    }

    const addOrEdit = (obj) => {
        if (currentId == '')
            db.child('contacts').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        else
            db.child(`contacts/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })

        history.goBack()
    }
    

    var [values, setValues] = useState(initialFieldValues)


    useEffect(() => {
        if (currentId === '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...contactObjects[currentId]
            })
    }, [currentId, contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        addOrEdit(values);
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <h2>Write your Story here...</h2>

            <div>
                
                <label htmlFor="storyTitle">Name: </label>
                <input 
                    name="storyTitle" 
                    placeholder="Story Title"
                    value={values.storyTitle}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="storyDetail">Description:</label>
                <textarea
                    name="storyDetail" 
                    placeholder="Enter the story"
                    value={values.storyDetail}
                    onChange={handleInputChange}
                    rows="15" cols="53"
                    required
                />
            </div>
            <div>
                <label htmlFor="storyDate">Date:</label>
                <input 
                    type="date" 
                    name="storyDate"
                    value={values.storyDate}
                    onChange={handleInputChange}
                    max="2020-12-31"
                    required
                />
            </div>
            <div>
                <input 
                    type="submit" 
                    value={currentId == "" ? "Save" : "Update"} 
                    className="btn__submit"    
                />

            </div>
        </form>
    )
}

export default StoryForm
