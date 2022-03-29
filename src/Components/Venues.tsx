import { useEffect, useState } from "react";
import { deleteVenue, fetchVenues, postVenue } from "../Services/micsapi";
import { Venue } from "./Venue";
import { useNavigate } from "react-router-dom";

export function Venues() {

    const [venues, setVenues] = useState<any[]>([])

    useEffect(()=>{
        fetchVenues().then(data => setVenues(data));

    }, []);

    function handleSubmit(event:any) {
        event.preventDefault();
        // The serialize function here would be responsible for
        // creating an object of { key: value } pairs from the
        // fields in the form that make up the query.
        let formData = new FormData(event.currentTarget)
        let venue_name :string = formData.get('venue_name') as string;
        let description: string = formData.get('description') as string;
        let street_address: string = formData.get('street_address') as string;
        let city: string = formData.get('city') as string;
        let zip_code: string = formData.get('zip_code') as string;
        let state_code :string = formData.get('state_code') as string;
        postVenue(venue_name, description, street_address,city, zip_code, state_code).then(venue => setVenues([...venues, venue]));
        setVenueName('')
        setDescription('')
        setStreetAddress('')
        setCityText('')
        setZipCodeText('')
        setStateCodeText('')
      }
    
    const [venueNameText, setVenueName] = useState('');
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
    function handleStateCodeChange(e:any) {
        setStateCodeText(e.target.value);
      }

    function handleDelete(id: number) {
    
        deleteVenue(id).then(()=>fetchVenues()).then((data)=>{setVenues(data)})
    
      }
    
    
    return (
        <div>
            <h1>Venues Administration</h1>
            {venues.map((venue, i) => <Venue onDelete={() => handleDelete(venue.id)} key={i} venue={venue} />)}
            
    <form onSubmit={handleSubmit}>
      <h3>New Venue</h3>
        <label htmlFor="">Venue Name:
          <input type="text" name="venue_name" id="venue_name" value={venueNameText} onChange={handleVenueNameChange}/>
        </label>
        <label htmlFor="">Description:
        <textarea rows={3} name="description" id="description" value={descriptionText} onChange={handleDescriptionChange} ></textarea>
        </label>
        <label htmlFor="street_address">Street Address:
          <input type="text" id="street_address" name="street_address" value={streetAddressText} onChange={handleStreetAddressChange}/>
                </label>
                <label htmlFor="city">City:
          <input type="text" id="city" name="city" value={cityText} onChange={handleCityChange}/>
                </label>
                <label htmlFor="zip_code">Zip Code:
          <input type="text" id="zip_code" name="zip_code" value={zipCodeText} onChange={handleZipCodeChange}/>
                </label>
                <label htmlFor="state_code">State Code:
          <input type="text" id="state_code" name="state_code" value={stateCodeText} onChange={handleStateCodeChange}/>
        </label>
        <button type='submit'>New Venue</button>
      </form>
    </div>);

}


