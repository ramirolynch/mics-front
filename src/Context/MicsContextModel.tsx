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

    const [loggedusers, setLoggedUser] = useState<boolean>(() => {
        const saved = localStorage.getItem('userLogin') || '';
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });

    

useEffect(()=> {
    localStorage.setItem('venuesStorage', JSON.stringify(venues));
    localStorage.setItem('userStorage', JSON.stringify(users));
    localStorage.setItem('userLogin', JSON.stringify(loggedusers));


    }, [venues, users, loggedusers])

    

function addVenue(venue:VenueFace) {
    setVenues([...venues,venue]);
}

    function addUser(user: User) {
    setUsers([...users,user])
    }
    
   
    
    function loginUser() {
        setLoggedUser(true)
    }


    return (

        <MicsContext.Provider value={{ venues, users, addVenue, addUser, loggedusers, loginUser}}>
            {children}
        </MicsContext.Provider>  
    );
}



