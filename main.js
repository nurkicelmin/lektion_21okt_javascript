/*

<div class = 'container>

<ul>
    <li>Monster</li>
    <li>Nocco</li>
    <li>Red Bull</li>
</ul>

</div>

Use a emplty html document 
create a container class with div element
add the div inside the body


create an unorded list (ul)
create list item (li) 3 times
inside each item add the text
*/




function popList() {

    //creating element
  const container = document.createElement("div");
  const ulList = document.createElement("ul");

  //adds a class name
  container.classList.add("container1");

  //appending ul to container
  container.appendChild(ulList);

  //creating array to loop through the name to list items
  let energy = ["Monster", "Nocco", "Red Bull"];

  //looping the list and creating new li
  for (let i = 0; i < energy.length; i++) {
    const listItems = document.createElement("li");

    //append the list and taking data from array so we 
    //can add each item
    listItems.appendChild(document.createTextNode(energy[i]));
    //add each il to the ul
    ulList.appendChild(listItems);
  }

  //append to the body
  document.body.appendChild(container);

  console.log(container)
}

popList();




/* Create a new function with new items */


const body = document.querySelector('body')


const div = document.createElement('div');
div.classList.add('container')

const ul = document.createElement('ul');



const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');


li1.appendChild(document.createTextNode('Red Bull'))
li2.appendChild(document.createTextNode('Monster'))
li3.appendChild(document.createTextNode('Nocco'))


div.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)

body.appendChild(div)

console.log(div)