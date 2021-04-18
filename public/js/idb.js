let db;
const request = indexedDB.open('budget_tracker', 1); // open a database

// this event will emit if the database version changes (no database to v1, v1 to v2...)
request.onupgradeneeded = function(e) {
    // save a reference to the database 
  const db = e.target.result;
  // create an object store called `new_transaction`, set it to have an auto incrementing primary key of sorts 
  db.createObjectStore('new_transaction', { autoIncrement: true });
};

request.onsuccess = function(e) {
    // when db is successfully created with its object store (from onupgradedneeded event above), save reference to db in global variable
    db = e.target.result;
  
    // check if app is online, if yes run checkDatabase() function to send all local db data to api
    if (navigator.onLine) {
      uploadTransaction();
    }
};

request.onerror = function(event) {
    // log error here
    console.log(event.target.errorCode);
};

// This function will be executed if we attempt to submit a new transaction and there's no internet connection
function saveRecord(record) {
    // open a new transaction with the database with read and write permissions 
    const transaction = db.transaction(['new_transaction'], 'readwrite');
  
    // access the object store for `new_transaction`
    const transactionObjectStore = transaction.objectStore('new_transaction');
  
    // add record to the store with add method
    transactionObjectStore.add(record);
}

function uploadTransaction() {
    // open a transaction on the pending db
    const transaction = db.transaction(['new_transaction'], 'readwrite');
  
    // access pending object store
    const transactionObjectStore = transaction.objectStore('new_transaction');
  
    // get all records from store and set to a variable
    const getAll = transactionObjectStore.getAll();
  
    getAll.onsuccess = function() {
      // if there was data in indexedDb's store, let's send it to the api server
      if (getAll.result.length > 0) {
        fetch('/api/transaction/bulk', {
          method: 'POST',
          body: JSON.stringify(getAll.result),
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(serverResponse => {
            if (serverResponse.message) {
              throw new Error(serverResponse);
            }
  
            const transaction = db.transaction(['new_transaction'], 'readwrite');
            const transactionObjectStore = transaction.objectStore('new_transaction');
            // clear all items in the store
            transactionObjectStore.clear();
            // refresh page to update components
            location.reload();
          })
          .catch(err => {
            // set reference to redirect back here
            console.log(err);
          });
      }
    };
  }
  
  // listen for app coming back online
  window.addEventListener('online', uploadTransaction);