export function aboutUs(){
    let main = document.getElementById('tabArea');
    let mainHeader = document.createElement('h1');
    mainHeader.innerHTML='About Us'
    main.appendChild(mainHeader);

    let mainBody = document.createElement('p');
    mainBody.innerHTML="We here at Bapa Daboopi's have a passion for food! Being a family owned restaurant for 600 years, you pick up a thing or two! Feel free to browse our menu and discover something we know you'll love!"
    main.appendChild(mainBody);
}