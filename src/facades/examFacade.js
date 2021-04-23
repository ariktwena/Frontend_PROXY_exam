import utils from "../utils";
import { SERVER_URL } from "../settings";

function apiFacade() {
  //OBSERVE fetchAny takes a url and a callback. The callback handles the data from the response body.

  /**
   * REST API
   */
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

  // function getPersons(callback) {
  //   // Change me to do something with data
  //   utils.fetchAny(SERVER_URL + "/person/all", callback);
  // }

  // function getPersonsById(id, callback) {
  //   //Complete me
  //   utils.fetchAny(SERVER_URL + "/person/" + id, callback);
  // }

  // function addEditPerson(person, callback) {
  //   //Complete me. A smart version will handle both Add and Edit, but focus on Add (POST) only first
  //   //console.log(person);
  //   if (person.id === "") {
  //     //Create new person to add, from person info
  //     const personToAdd = {
  //       name: person.name,
  //       street: person.street,
  //       zip: person.zip,
  //       city: person.city,
  //     };
  //     //Add Person
  //     utils.fetchAny(SERVER_URL + "/person", callback, "POST", personToAdd);
  //   } else {
  //     //Edit Person
  //     utils.fetchAny(SERVER_URL + "/person/" + person.id, callback, "PUT", person);
  //   }
  // }

  // function deletePerson(id, callback) {
  //   //Complete me
  //   utils.fetchAny(SERVER_URL + "/person/" + id, callback, "DELETE");
  // }

  return {
    getPersons,
    // getPersonsById,
    // addEditPerson,
    // deletePerson,
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
  };
}
const facade = apiFacade();
export default facade;

// function handleHttpErrors(res) {
//   if (!res.ok) {
//     // console.log(res);
//     return Promise.reject({
//       status: res.status,
//       fullError: res.json(),
//     });
//   }
//   return res.json();
// }

// function apiFacade() {
//   /* Insert utility-methods from a latter step (d) here (REMEMBER to uncomment in the
// returned object when you do)*/
//   const login = (user, password) => {
//     /*TODO*/
//     const options = makeOptions("POST", true, {
//       username: user,
//       password: password,
//     });

//     return fetch(SERVER_URL + "/api/login", options)
//       .then(handleHttpErrors)
//       .then((res) => {
//         // console.log(res);
//         document.getElementById("error").innerHTML = "";
//         setToken(res.token);
//       });
//   };

//   const fetchData = () => {
//     /*TODO */
//     const options = makeOptions("GET", true); //True add's the token
//     return fetch(URL + "/api/info/admin", options).then(handleHttpErrors);
//   };

//   const makeOptions = (method, addToken, body) => {
//     var opts = {
//       method: method,
//       headers: {
//         "Content-type": "application/json",
//         Accept: "application/json",
//       },
//     };
//     if (addToken && loggedIn()) {
//       opts.headers["x-access-token"] = getToken();
//     }
//     if (body) {
//       opts.body = JSON.stringify(body);
//     }
//     return opts;
//   };

//   const setToken = (token) => {
//     localStorage.setItem("jwtToken", token);
//   };

//   const getToken = () => {
//     return localStorage.getItem("jwtToken");
//   };

//   const loggedIn = () => {
//     const loggedIn = getToken() != null;
//     return loggedIn;
//   };

//   const logout = () => {
//     localStorage.removeItem("jwtToken");
//   };

//   return {
//     makeOptions,
//     setToken,
//     getToken,
//     loggedIn,
//     login,
//     logout,
//     fetchData,
//   };
// }
// const facade = apiFacade();
// export default facade;

// function bookFacade() {
//     let books = [
//         { id: 100,title: "How to Learn JavaScript - Vol 1", info: "Study hard"},
//         { id: 101,title: "How to Learn ES6", info: "Complete all exercises :-)"},
//         { id: 102,title: "How to Learn React",info: "Complete all your CA's"},
//         { id: 103,title: "Learn React", info: "Don't drink beer(s), until Friday (after four)"
//         }
//       ]
//     let nextId = 104;
//     const getBooks = () => { return books}
//     const findBook = (id) => {
//       const bookId = isNaN(id) ? id : Number(id);
//       return books.find(book=>book.id===bookId)
//     }
//     const deleteBook = (id) => {
//       // console.log(id)
//       // console.log(books.length)
//       const bookId = isNaN(id) ? Number(id) : id;
//       // console.log(bookId)
//       books = books.filter(book=>book.id !== bookId)
//       // console.log(books.length)
//     }

//     const addBook = (book) => {
//       // console.log(book);
//       book.id = nextId
//       // console.log(book);
//       books.push(book)
//       nextId++;
//     }

//     const editBook = (book) => {
//       // console.log(book);
//       let bookToEdit = books.find(b=>b.id ===  book.id)
//       // console.log(bookToEdit);
//       bookToEdit.title = book.title;
//       bookToEdit.info = book.info;
//       // console.log(bookToEdit);
//       // console.log(books);
//     }

//     return {
//       // Remember all statements below are a shortcut for this version: getBooks: getBooks
//       getBooks,
//       findBook,
//       deleteBook,
//       addBook,
//       editBook,
//     }
//     }

//     let returnVal =  bookFacade()
//     export default returnVal;
