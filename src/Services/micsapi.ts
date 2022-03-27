import axios from "axios";

export function fetchVenues() {
  return axios
    .get(`http://localhost:3000/venues`, {})
    .then((response) => response.data);
}

export function postVenue(
  venue_name: string,
  description: string,
  street_address: string,
  city: string,
  zip_code: string,
  state_code: string
) {
  return axios
    .post(`http://localhost:3000/venues`, {
      venue_name: venue_name,
      description: description,
      street_address: street_address,
      city: city,
      zip_code: zip_code,
      state_code: state_code,
    })
    .then((response) => response.data);
}

export function deleteVenue(id: number) {
  return axios
    .delete(`http://localhost:3000/venues/${id}`)
    .then((response) => response.data);
}

export function editVenueApi(
  id: number,
  venue_name: string,
  description: string,
  city: string,
  street_address: string,
  zip_code: string,
  state_code: string
) {
  return axios
    .put(`http://localhost:3000/venues/${id}`, {
      venue_name: venue_name,
      description: description,
      city: city,
      street_address: street_address,
      zip_code: zip_code,
      state_code: state_code,
    })
    .then((response) => response.data);
}

export function signUp(
  first_name: string,
  last_name: string,
  email: string,
  password: string
) {
  return axios
    .post(`http://localhost:3000/signup`, {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    })
    .then((response) => response.data);
}

export function logIn(email: string, password: string) {
  return axios
    .post(`http://localhost:3000/login`, {
      email: email,
      password: password,
    })
    .then((response) => response.data);
}
