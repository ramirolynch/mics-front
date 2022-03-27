import { useState } from "react";
import { VenueFace } from "../Models/VenueModel";
import { editVenueApi } from "../Services/micsapi";

interface Props {
    venue: VenueFace;
    onDelete: () => void;

}

export function Venue({ venue, onDelete }: Props) {
    

    function handleEdit(event: any) {
        event.preventDefault();
        // The serialize function here would be responsible for
        // creating an object of { key: value } pairs from the
        // fields in the form that make up the query.
        let formData = new FormData(event.currentTarget)
        let venue_name: string = formData.get('venue_name') as string;
        let description: string = formData.get('description') as string;
        let street_address: string = formData.get('street_address') as string;
        let city: string = formData.get('city') as string;
        let zip_code: string = formData.get('zip_code') as string;
        let state_code: string = formData.get('state_code') as string;

        editVenueApi(venue.id, venue_name, description, street_address, city, zip_code, state_code);
        venue.venue_name = venue_nameText;
        venue.description = descriptionText;
        venue.street_address = streetAddressText;
        venue.city = cityText;
        venue.zip_code = zipCodeText;
        venue.state_code = stateCodeText;

        setVenueName('')
        setDescription('')
        setStreetAddress('')
        setCityText('')
        setZipCodeText('')
        setStateCodeText('')

        setEditVenue(false)
    }

    const [venue_nameText, setVenueName] = useState('');
    const [descriptionText, setDescription] = useState('');
    const [streetAddressText, setStreetAddress] = useState('');
    const [cityText, setCityText] = useState('');
    const [zipCodeText, setZipCodeText] = useState('');
    const [stateCodeText, setStateCodeText] = useState('');
  
    function handleVenueNameChange(e:any) {
      setVenueName(e.target.value);
    }
    function handleDescriptionChange(e: any) {
      setDescription(e.target.value);
    }
    function handleStreetAddressChange(e:any) {
      setStreetAddress(e.target.value);
    }
    function handleCityChange(e:any) {
        setCityText(e.target.value);
    }
    
    function handleZipCodeChange(e:any) {
        setZipCodeText(e.target.value);
    }

    function handleStateChange(e:any) {
        setStateCodeText(e.target.value);
    }
    
    const [editVenue, setEditVenue] = useState(false);

    function showHideForm() {
        editVenue === false ? setEditVenue(true) : setEditVenue(false);
        setVenueName(venue.venue_name);
        setDescription(venue.description);
        setStreetAddress(venue.street_address);
        setCityText(venue.city);
        setZipCodeText(venue.zip_code);
        setStateCodeText(venue.state_code);
    }



    return (
        
        <div>
           <ul>
                <li>Venue: {venue.venue_name}</li>
                <li>Description: {venue.description}</li>
                <li>Street Address: {venue.street_address}</li>
                <li>City: {venue.city}</li>
                <li>Zip Code: {venue.zip_code}</li>
                <li>State: {venue.state_code}</li>
            </ul>
            
            
            <button onClick={onDelete}>Delete Venue</button>

            
            <button onClick={()=>showHideForm()}>Edit Venue</button>

            <form action="" onSubmit={handleEdit} className={ editVenue === false ? "hideForm" : "showForm"}>
                <label htmlFor="">Edit Name:
                    <input type="text" name='venue_name' value={venue_nameText} onChange={handleVenueNameChange} />
                </label>
                <label htmlFor="">Edit description:
                    <input type="text" name='description' value={descriptionText} onChange={handleDescriptionChange}/>
                </label>
                <label htmlFor="">Edit Street Address:
                    <input type="text" name='street_address' value={streetAddressText} onChange={handleStreetAddressChange} />
                </label>
                <label htmlFor="">Edit City:
                    <input type="text" name='city' value={cityText} onChange={handleCityChange} />
                </label>
                <label htmlFor="">Edit Zip Code:
                    <input type="text" name='zip_code' value={zipCodeText} onChange={handleZipCodeChange} />
                </label>
                <label htmlFor="">Edit State Code:
                    <input type="text" name='state_code' value={stateCodeText} onChange={handleStateChange} />
                </label>
           
                <button>Confirm Edit</button>
            </form>
           
       </div>);
}
