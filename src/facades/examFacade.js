import utils from "../utils";
import { SERVER_URL } from "../settings";

function apiFacade() {
  //OBSERVE fetchAny takes a url and a callback. The callback handles the data from the response body.

  /**
   * REST API
   */
  function getAllWalkers(callback) {
    utils.fetchAny(SERVER_URL + "/api/dogs/walkers", callback);
  }

  function getAllOwnersDogs(id, callback) {
    utils.fetchAny(SERVER_URL + "/api/dogs/" + id + "/owners", callback);
  }

  function getAllWalkersByDogId(id, callback) {
    utils.fetchAny(SERVER_URL + "/api/dogs/" + id + "/walkers", callback);
  }

  function getAllDogs(callback) {
    utils.fetchAny(SERVER_URL + "/api/dogs", callback);
  }

  function addEditDog(dog, callback) {
    //Complete me. A smart version will handle both Add and Edit, but focus on Add (POST) only first
    console.log(dog);
    if (dog.id === "") {
      //Create new person to add, from person info
      const dogToAdd = {
        name: dog.name,
        breed: dog.breed,
        gender: dog.gender,
        birthdate: {
          year: dog.birthdate.year,
          month: dog.birthdate.month,
          day: dog.birthdate.day,
        },
        image: dog.image,
        owner: {
          name: dog.owner.name,
          address: dog.owner.address,
          phone: dog.owner.phone,
        },
        walkers: [
          {
            name: dog.walkers[0].name,
            address: dog.walkers[0].address,
            phone: dog.walkers[0].phone,
          },
        ],
      };
      console.log(dogToAdd);
      utils.fetchAny(SERVER_URL + "/api/dogs", callback, "POST", dogToAdd);
    } else {
      utils.fetchAny(SERVER_URL + "/api/dogs/" + dog.id, callback, "PUT", dog);
    }
  }

  function deleteDog(id, callback) {
    utils.fetchAny(SERVER_URL + "/api/dogs/" + id, callback, "DELETE");
  }

  function getAllOwners(callback) {
    utils.fetchAny(SERVER_URL + "/api/dogs/owners", callback);
  }

  function connectDogAndOwner(dogId, ownerId, callback) {
    utils.fetchAny(SERVER_URL + "/api/dogs/" + dogId + "/owners/" + ownerId, callback, "PUT");
  }










  function getPersons(callback) {
    // Change me to do something with data
    utils.fetchAny(SERVER_URL + "/persons", callback);
  }

  function getPersonsRest(callback) {
    utils.fetchAny(SERVER_URL + "/api/persons", callback);
  }

  function deletePersonRest(id, callback) {
    utils.fetchAny(SERVER_URL + "/api/persons/" + id, callback, "DELETE");
  }

  function addPersonRest(person, callback) {
    utils.fetchAny(SERVER_URL + "/api/persons", callback, "POST", person);
  }

  function getPersonRest(id, callback) {
    utils.fetchAny(SERVER_URL + "/api/persons/" + id, callback);
  }

  function editPersonRest(id, person, callback) {
    utils.fetchAny(SERVER_URL + "/api/persons/" + id, callback, "PUT", person);
  }

  /**
   * PROXY
   */
  function getMapsNoDTO(callback) {
    utils.fetchAny(SERVER_URL + "/api/proxy/map", callback);
  }

  function getMapsWithDTO(callback) {
    utils.fetchAny(SERVER_URL + "/api/proxy/mapdto", callback);
  }

  function getCountry(countryCode, callback) {
    utils.fetchAny(SERVER_URL + "/api/proxy/map/" + countryCode, callback);
  }

  function getPersonsProxy(callback) {
    utils.fetchAny(SERVER_URL + "/api/proxy/person", callback);
  }

  function deletePersonProxy(id, callback) {
    utils.fetchAny(SERVER_URL + "/api/proxy/person/" + id, callback, "DELETE");
  }

  function addPersonProxy(person, callback) {
    utils.fetchAny(SERVER_URL + "/api/proxy/person", callback, "POST", person);
  }

  function getPersonProxy(id, callback) {
    utils.fetchAny(SERVER_URL + "/api/proxy/person/" + id, callback);
  }

  function editPersonProxy(id, person, callback) {
    utils.fetchAny(
      SERVER_URL + "/api/proxy/person/" + id,
      callback,
      "PUT",
      person
    );
  }

  function getJokesProxy(callback) {
    utils.fetchAny(SERVER_URL + "/api/proxy/jokes", callback);
  }

  return {
    getAllWalkers,
    getAllOwnersDogs,
    getAllWalkersByDogId,
    getAllDogs,
    addEditDog,
    deleteDog,
    getAllOwners,
    connectDogAndOwner,





    getPersons,
    getMapsNoDTO,
    getMapsWithDTO,
    getCountry,
    getPersonsProxy,
    deletePersonProxy,
    addPersonProxy,
    getPersonProxy,
    editPersonProxy,
    getPersonsRest,
    deletePersonRest,
    addPersonRest,
    getPersonRest,
    editPersonRest,
    getJokesProxy,
  };
}
const facade = apiFacade();
export default facade;
