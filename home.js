let loginSuccess = Cookies.get(`loginToken`);

if (loginSuccess) {
  document.body.insertAdjacentHTML(
    `afterbegin`,
    `<h3>Welcome! Your logged in </h3>`
  );

  axios
    .request({
      url: `https://reqres.in/api/unknown`,
    })
    .then(loggedInSuccess)
    .catch(loggedInFailure);
}

     


