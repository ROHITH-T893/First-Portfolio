const home=document.querySelector('.hero')
const about=document.querySelector('.About')
const contact =document.querySelector('.contact')
const works=document.querySelector('.works')
const skill=document.querySelector('.skill')

function RouteTo(event){
  let text=event.target.innerText;
  let elem=event.target;
  
  
  console.log(text);
  
  if(text=='ROHITH'){
    home.style.display= 'block'
    works.style.display='none'
    skill.style.display='none'
    about.style.display='none'
    contact.style.display='none'
    console.log(home);
    
}
  else if(text=='About' || elem.value==6){
    home.style.display= 'none'
    works.style.display='none'
    skill.style.display='none'
    about.style.display='block'
    contact.style.display='none'
    console.log(about);
    
  }
  else if(text=='Works' || elem.value==2 ){
    home.style.display= 'none'
    works.style.display='block'
    skill.style.display='none'
    about.style.display='none'
    contact.style.display='none'
    console.log(works);
    
  }
  else if(text=='Skill' || elem.value ==1){
    home.style.display= 'none'
    works.style.display='none'
    skill.style.display='block'
    about.style.display='none'
    contact.style.display='none'
  }
  else if(text=='Contact' || elem.value ==3){
    home.style.display= 'none'
    works.style.display='none'
    skill.style.display='none'
    about.style.display='none'
    contact.style.display='block'
  }
//   else{
//     home.style.display= 'block'
//     works.style.display='none'
//     skill.style.display='none'
//     about.style.display='none'
//     contact.style.display='none'
//   }


}
const words = ["Full Stack Developer", "Ethical Hacker", "Student Engineer"];
let currentIndex = 0;
let currentWord = "";
let isDeleting = false;
let charIndex = 0;
let delay = 200;

function type() {
  const textElement = document.getElementById("typing-text");

  // Handle typing and deleting
  if (!isDeleting && charIndex <= words[currentIndex].length) {
    currentWord = words[currentIndex].substring(0, charIndex);
    charIndex++;
    delay = 200;
  } else if (isDeleting && charIndex > 0) {
    currentWord = words[currentIndex].substring(0, charIndex - 1);
    charIndex--;
    delay = 50;
  } else {
    // Switch between typing and deleting states
    isDeleting = !isDeleting;
    delay = isDeleting ? 1000 : 500;

    // If we finish deleting, move to the next word
    if (!isDeleting) {
      currentIndex = (currentIndex + 1) % words.length;
      charIndex = 0;
    }
  }

  // Update the displayed text
  textElement.innerText = currentWord;

  // Call the function again after the set delay
  setTimeout(type, delay);
}

// Initialize the typing effect
type();
