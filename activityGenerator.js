let activities = [
"Read a book",
"Listen to music",
"Meditate",
"Go for a walk",
"Go on a hike",
"Go to the park",
"Try learning yoga",
"Pamper yourself",
"Start a bullet journal",
"Take up journaling",
"Bake! And give me some :wink: ",
"Stretch",
"Start a blog",
"Create a funny news show with your friend",
"Play an online game with friends",
"Reach out to a friend or relative you haven't seen in a while","Visit a museum","Try out a new coffee shop","Make a movie. It doesn't have to be Oscar-worthy; just something to make you and friends laugh!","Create your own website! There are tons of website buolders that do not require ANY coding!",
"Stage a photoshoot- at home or in a cool location!","Do a puzzle","Color"
]
      var x = document.getElementById("quoteGen");
      var y = document.getElementById("songGen");
      var z = document.getElementById("activityGen");
      var a = document.getElementById("bookGen");


function activityDisplay() {
  
          
        if (z.style.display === "none") {
          z.style.display = "flex";
        } else {
          z.style.display = "none";
        }
}

const activityName = document.querySelector('.activityTitle'); 
const nextActivity = document.querySelector('.next'); //instead of nextChoice type the id of ht ebutton of the button above
        
        const getActivity =  () => {
        
          const num = Math.floor(Math.random()*activities.length);
          
          const activity = activities[num];
          activityName.innerText = activity;
      }

nextActivity.addEventListener('click', getActivity);

getActivity();