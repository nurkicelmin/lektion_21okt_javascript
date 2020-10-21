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




