/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//Create Section 4

const s4 = `<section id="section4" data-nav="Section 4">
                    <div class="landing__container">
                    <h2>Section 4</h2>
                    
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus
                    faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi,
                    ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis.
                    Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum
                    consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque 
                    maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor
                    lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae
                    elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
                    
                    
                    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida,
                    ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, 
                    vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse 
                    imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
                    
                    </div>
                    </section>`

const sec3 = document.getElementById('section3');
sec3.insertAdjacentHTML("afterend",s4)


// build the nav

 
const sections = document.querySelectorAll("section");
const selectors = document.getElementById('navbar__list');
let word='';
for (word of sections){
  const sectionName = word.getAttribute("data-nav");
  const lists = document.createElement('li');
  const anchors = document.createElement("a");
  anchors.innerHTML=`<a>${sectionName}</a>`;
  lists.appendChild(anchors);
  selectors.appendChild(lists);
}

// adding class in each list
let listName= document.querySelectorAll('li');
let i="";
for (i of listName){
    i.setAttribute('class' ,'menu__link')
}

// adding click event to scroll into the section that has been selected by links

const links =document.querySelectorAll('a');

links.forEach(item=>{
  item.addEventListener("click",()=>{
  const textLink = item.innerText;
  sections.forEach(item2=>{
    const dataNav = item2.getAttribute("data-nav");
    if (textLink == dataNav){
      item2.scrollIntoView({behavior:"smooth"}); 
    }
  })
})
})

// Adding scroll listerner to set active class
window.addEventListener("scroll",()=>{
  let count=''
  for (count of sections){ 
    let rect = count.getBoundingClientRect();
    let navData = count.getAttribute("data-nav");
    // using If element to measure the size of viewport
    if(rect.top >= 0 && rect.top <= 350){
      // adding h2 colors of section 
      const heading = document.querySelectorAll('h2')
      heading.forEach(misHeading =>{
        let newHead = misHeading.innerText;
        if(newHead == navData){
          misHeading.style.color="#F0E68C	"
        }else{
          misHeading.style.color="#fff"
        }
        // adding special color to the links that related to section 
        links.forEach(elem =>{
          let myLink = elem.innerText;
          if(myLink == navData){
            elem.classList.add("active__link");
          }
          else{
            elem.classList.remove("active__link")
          }
        })

      })
      // using if statement to see if active is already contains or not 
      if(count.classList.contains("your-active-class")){
          count.classList.remove("your-active-class");
        }
      count.classList.add("your-active-class");
      }
        else{
      count.classList.remove("your-active-class");
      } 
    
    } 
      // adding if statment to display button
    if (document.documentElement.scrollTop >400){
          btn.style.display="block";
        }
        else{
          btn.style.display=" none";
        }

})

// Create Top button;
const button = document.createElement("button");
button.textContent="Top";
button.setAttribute("id","myBtn");
const footer = document.getElementById("myFooter");
footer.appendChild(button);


// button scroll up
const btn = document.getElementById("myBtn");
btn.addEventListener("click",()=>{
  document.documentElement.scrollTop =0;
})

// creating a bar menu
const icon = document.createElement('a');
icon.setAttribute("href","javascript:void(0)");
icon.setAttribute("class","icon")
icon.setAttribute("onclick","myFunction()")
icon.innerHTML="<i class='fa fa-bars'></i>";
selectors.appendChild(icon);

// Adding class list to ul
selectors.setAttribute("class","list")
function myFunction(){

  if (selectors.className === "list"){
    selectors.className +="responsive";
  }
  else{
    selectors.className="list"
  }
}