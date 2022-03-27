import {  ReactNode, useEffect, useState } from "react";
import { VenueFace, User } from "../Models/VenueModel";
import { MicsContext } from "./MicsContext";


interface Props {children:ReactNode;}

export function MicsContextProvider({children}:Props) {


//localStorage implementation
const [venues, setVenues] = useState<VenueFace[]>(()=> {
    const saved = localStorage.getItem('venuesStorage') || '[]';
    const initialValue = JSON.parse(saved);
    return initialValue || [];
})
    
    const [users, setUsers] = useState<User[]>(() => {
        const saved = localStorage.getItem('userStorage') || '[]';
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    })
    
    const [loggedusersarr, setLoggedUser] = useState<User[]>(() => {
        const saved = localStorage.getItem('logStorage') || '[]';
        const initialValue = JSON.parse(saved);
        return initialValue || [];
})


useEffect(()=> {
    localStorage.setItem('venuesStorage', JSON.stringify(venues));
    localStorage.setItem('userStorage', JSON.stringify(users));
    localStorage.setItem('logStorage', JSON.stringify(loggedusersarr))
   
    }, [venues, users, loggedusersarr])


function addVenue(venue:VenueFace) {
    setVenues([...venues,venue]);
}

    function addUser(user: User) {
    setUsers([...users,user])
    }
    
    function logUser(user: User) {
        setLoggedUser([...loggedusersarr,user])
    }


    return (

        <MicsContext.Provider value={{ venues, users, addVenue, addUser, loggedusersarr, logUser}}>
            {children}
        </MicsContext.Provider>  
    );
}



