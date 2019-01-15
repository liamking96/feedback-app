var db=new PouchDB ('my_database')
console.log(db)

var doc = {
    "_id": "messagestore",
    "messages": [
        "I'm a text message hard-coded in the app" ,
        "I'm another hard coded message and i'm a bit longer than the first message to make sure we create a style sheet that works for long messages as well as short ones"
    ]
  };
  db.get('messagestore').then(function (doc) {
    console.log(doc);
  });

  const form = document.querySelector('form')
  form.addEventListener('submit', event => {
      event.preventDefault()
      console.log(event)
      const newMessage = document.querySelector ('textarea').value
      console.log(newMessage)
      db.get('messagestore').then(doc => {
          console.log(doc)
        doc.messages.push(newMessage)
        return db.put(doc)
      }).catch(err => {
          console.log(err)
      })
    })
