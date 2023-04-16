(async function () {
  const response = await fetch("./data.json");
  const movie = await response.json();

  const genre = document.getElementById("genre");
  const year = document.getElementById("year");
  const language = document.getElementById("language");
  const all = document.getElementById("all");
  const displaybrowser = document.getElementById("display");
  let selectedValue; // Declare the variable outside the event listener
  let result;

  genre.addEventListener("change", (event) => {
    selectedValue = event.target.value; // Assign the selected value to the variable
    console.log(selectedValue);

    result = movie.filter(function (movie) {
      return movie.genres == selectedValue;
    });

    result.forEach(function (result) {
      let li = document.createElement("li");
      let itemList = `

    ${result.title} 
    <div class= "img"> <img src="https://image.tmdb.org/t/p/w45${result.poster_path}"/>
    ${result.overview} </div>
 
     `;
      li.innerHTML = itemList;
      displaybrowser.appendChild(li);
    });
  });

  language.addEventListener("change", (event) => {
    selectedValue = event.target.value; // Assign the selected value to the variable
    console.log(selectedValue);

    result = movie.filter(function (movie) {
      return movie.original_language == selectedValue;
    });

    result.forEach(function (result) {
      let li = document.createElement("li");
      let itemList = `

        ${result.title}
       <div class= "img"> <img src="https://image.tmdb.org/t/p/w45${result.poster_path}"/>
        ${result.overview} </div>

       `;
      li.innerHTML = itemList;
      displaybrowser.appendChild(li);
    });
  });

  year.addEventListener("change", (event) => {
    selectedValue = event.target.value; // Assign the selected value to the variable

    result = movie.filter(function (movie) {
      return movie.certification == selectedValue;
    });

    result.forEach(function (result) {
      let li = document.createElement("li");
      let itemList = `

        ${result.title}
       <div class= "img"> <img src="https://image.tmdb.org/t/p/w45${result.poster_path}"/>
        ${result.overview} </div>
   
       `;
      li.innerHTML = itemList;
      displaybrowser.appendChild(li);
    });
  });

  all.addEventListener("change", (event) => {
    selectedValue = event.target.value; // Assign the selected value to the variable
    console.log(selectedValue);

    result = movie.filter(function (movie) {
      return movie.id == selectedValue;
    });

    result.forEach(function (result) {
      let li = document.createElement("li");
      let itemList = `

        ${result.title}
       <div class= "img"> <img src="https://image.tmdb.org/t/p/w45${result.poster_path}"/>
        ${result.overview} </div>
       `;
      li.innerHTML = itemList;
      displaybrowser.appendChild(li);
    });
  });
})();
