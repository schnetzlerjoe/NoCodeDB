function addUserSignUp(object, email, password) {
  return `object.onclick = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(async () => {
            await postUser()
            alert("You have successfully signed up!")
        })
        .catch((error) => {
            if(error.message === "Firebase: Error (auth/email-already-in-use).") {
                alert("An account with this email already exists.");
            } else if(error.message === "Firebase: Error (auth/weak-password).") {
                alert("Weak password. Please try another.")
            } else {
                alert(error.message)
            }
        });
    }`
}
function addUserLogin(object, email, password) {
  return `object.onclick = (email, password) => {
      loginWithEmailPassword(email, password)
      .catch((error) => {
          if(error.message === "Firebase: Error (auth/wrong-password).") {
              alert("Wrong password. Please try again.");
          } else if (error.message === "Firebase: Error (auth/user-not-found).") {
              alert("This user does not exist.");
          } else {
              alert(error.message)
          }
      })
  }`
}
console.log(addUserLogin())