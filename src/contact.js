export function contact(){
    let main = document.getElementById('tabArea');
    let mainHeader = document.createElement('h1');
    mainHeader.innerHTML='Contact'
    main.appendChild(mainHeader);

    let phoneNumber = document.createElement('p');
    phoneNumber.innerHTML='Phone: 0181 826 8921';
    main.appendChild(phoneNumber)

    let email = document.createElement('p');
    email.innerHTML='Email: bapa-daboopi@askjeeves.com';
    main.appendChild(email);

    let address = document.createElement('p');
    address.innerHTML='555 Houghton street,          Ballack Road,                T6K 3NG';
    main.appendChild(address);
}