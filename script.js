async function data()
{
   const f= await fetch('https://api.chucknorris.io/jokes/random');
   const data=await f.json();
   console.log(data);
   // Display the joke on the page
   let jokeDiv = document.getElementById('joke');
   if (!jokeDiv) {
       jokeDiv = document.createElement('div');
       jokeDiv.id = 'joke';
       document.body.appendChild(jokeDiv);
   }
   jokeDiv.innerHTML = `<h2>Chuck Norris Joke</h2><p>${data.value}</p>`;
}