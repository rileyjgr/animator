const goSearch = () => {
  const search = document.getElementById("search").value;
  let input = [];

  input.push({
    search
  });

  console.log(input);
  const url = "api/search";
  axios
    .post(url, input)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      if (error) {
        console.log(error);
      }
    });
// <<<<<<< riley
//   // get the users search here and send it through text to speech
//   // axios
//   //   .get()
//   //
// =======
// >>>>>>> master
};
