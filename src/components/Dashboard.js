import React, { useContext, useEffect } from 'react'
import db from '../firebase'
import { StoryContext } from '../StoryContext'
import { useHistory } from 'react-router-dom'
import './Dashboard.css'
import { BsPencilSquare } from 'react-icons/bs';
import { BsTrashFill } from 'react-icons/bs';


const Dashboard = () => {

    const history = useHistory()

    const {contactObjects, currentId, setContactObjects, setCurrentId, startDate} = useContext(StoryContext)

    useEffect(() => {
        if(startDate === '' ){
            db.child('contacts').on('value', snapshot => {
                if(snapshot.val() !== null){
                    setContactObjects({
                        ...snapshot.val()
                    })
                    console.log("gggggggg", snapshot.val())
                }
            })
        }
        if(startDate){
            db.child('contacts').orderByChild('storyDate').startAt(startDate).on('value', snapshot => {
                if(snapshot.val() !== null){
                    setContactObjects({
                        ...snapshot.val()
                    })
                    console.log("phh plzz", snapshot.val())
                }
                console.log("amma yr rikooo")
            })
        }
        

    }, [startDate])

    // const addOrEdit = (obj) => {
    //     if (currentId == '')
    //         db.child('contacts').push(
    //             obj,
    //             err => {
    //                 if (err)
    //                     console.log(err)
    //                 else
    //                     setCurrentId('')
    //             })
    //     else
    //         db.child(`contacts/${currentId}`).set(
    //             obj,
    //             err => {
    //                 if (err)
    //                     console.log(err)
    //                 else
    //                     setCurrentId('')
    //             })
    // }

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            db.child(`contacts/${id}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        }
    }

    const toNext = (id) => {
        setCurrentId(id)
        console.log("oh bhai",id)
        return (
            history.push(`/stories/${currentId}`)
        )

    }
    

    return (
        <>
            <div>
                <table>
                    <thead className="thead-light">
                        <tr>
                            <th>Story Title</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        Object.keys(contactObjects).map((key) => (
                            
                            key ? (
                                <tr key={key}>
                                <td>{contactObjects[key].storyTitle}</td>
                                
                                <td>{contactObjects[key].storyDate}</td> 
                                
                                <td >
                                    <a onClick={() => { toNext(key) }}>
                                        <BsPencilSquare />
                                    </a>
                                    <a onClick={() => { onDelete(key) }}>
                                        <BsTrashFill />
                                    </a>
                                </td>
                            </tr>
                            ) : (
                                <h1>Not Found</h1>
                            )
                            
                        ))
                    }
                </tbody>
            </table>

                
            </div>
        </>
    )



}

export default Dashboard

{/* <div >
                    <table >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Actions</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                                Object.keys(contactObjects).map((key) => (
                                    
                                    <tr key={key}>
                                        <td>{contactObjects[key].storyTitle}</td>
                                        <td>{contactObjects[key].address}</td>
                                        {console.log("YOOOo", contactObjects[key])}
                                        <td >
                                            <a onClick={() => { setCurrentId(key) }}>
                                                pencil
                                            </a>
                                            <a onClick={() => { onDelete(key) }}>
                                                bin
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div> */}