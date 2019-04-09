const image = document.getElementsByTagName("img")[0]
const counter = document.getElementsByTagName("h2")[0]

// Whenever the image (cookie) is clicked
image.addEventListener("click", function() {
  //code here
 let string_text = counter.innerHTML; // <h1>INNERHTML</h1> Get the text in between the element
 let int_counter = Number.parseInt(string_text)
 int_counter = int_counter + 1;

 counter.innerHTML = int_counter;
})


