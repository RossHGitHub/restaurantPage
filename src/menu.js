export function menu(){
    let main = document.getElementById('tabArea');
    let mainHeader = document.createElement('h1');
    mainHeader.innerHTML='Menu'
    main.appendChild(mainHeader);

    let list = document.createElement('ul');
    main.appendChild(list)

    let itemOne = document.createElement('li');
    itemOne.innerHTML='Pizza!       $5'
    list.appendChild(itemOne);

    let itemTwo = document.createElement('li');
    itemTwo.innerHTML='Pasta!       $4'
    list.appendChild(itemTwo);

    let itemThree = document.createElement('li');
    itemThree.innerHTML='Salmon       $8'
    list.appendChild(itemThree);
}