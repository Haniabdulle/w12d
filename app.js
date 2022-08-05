function loginAttempt(details) {
    let emailValue = document.getElementById(`email_input`)[`value`];
    let passwordValue = document.getElementById(`password_input`)[`value`];
  
    axios
      .request({
        url: `https://reqres.in/api/login`,
  
        method: `POST`,
  
        data: {
          email: emailValue,
          password: passwordValue,
        },
      })
      .then(loginSuccess)
      .catch(loginFailure);
  }
  
 
                                                                                                    
