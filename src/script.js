function displaypoem(response) {
    console.log(poemgenerated);
  new Typewriter("#poem", {
    strings: response.data.enter,
    autoStart: true,
    delay: 1,
    cursor: "",
  });    
}
function generatePoem(event) {
    event.preventDefault();

    let instructionsinput = document.querySelector("user-instruction");
    let apikey = "7ea5830c04coe2fb187d633a60t4b026";
    let prompt = 'Generate a persian poem about ${instructionsinput.value}';
    let context =
        "you are a romantic poem expert and love to write short poems. your mission is to generate a four lines persian poem in basic html and seperate each line with a <br/>. make sure to follow the user instructions.";
    let apiURL = 'https://api.shecodes.io/ai/v1/generate?prompt={prompt}$context={context}$key={apikey}';



console.log("generating poem");
console.log('prompt: ${prompt}');
console.log('context: ${context}');
axios.get(apiURL).then(displaypoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
