    export function pageload(){
        
        // Background, HTML and Body tags
    let body = document.querySelector('body');
    body.classList='body';
    
    let html = document.querySelector('html');
    html.classList='body';
    
    let main = document.getElementById('content');
    main.classList='mainBackground';
    
    
    
        // Header
    let header = document.createElement('div');
    header.classList='header';
    main.appendChild(header);
    
    let headerTitle = document.createElement('h1');
    headerTitle.innerHTML="Bapa Daboopi's!!";
    header.appendChild(headerTitle);
    let headerSubtitle = document.createElement('h3');
    headerSubtitle.innerHTML="The finest pizzeria this side of your-a mamma mia!";
    header.appendChild(headerSubtitle);
    
    
    
        // Main Content Wrapper
    
    let mainContentWrapper = document.createElement('div');
    mainContentWrapper.classList='mainContentWrapper';
    main.appendChild(mainContentWrapper);
    
    
        // Main Content Left
    
    let mainContentLeft= document.createElement('div');
    mainContentLeft.classList='mainContentLeft';
    mainContentWrapper.appendChild(mainContentLeft);
    
    let MCLImageOne = document.createElement('img')
    MCLImageOne.src='../img/pastaOne.jpg'
    MCLImageOne.classList='MCLImage';
    
    let MCLImageTwo = document.createElement('img')
    MCLImageTwo.src='../img/pizza.jpg';
    MCLImageTwo.classList='MCLImage';
    
    let MCLImageThree = document.createElement('img')
    MCLImageThree.src='../img/pastaTwo.jpg';
    MCLImageThree.classList='MCLImage';
    
    mainContentLeft.appendChild(MCLImageOne);
    mainContentLeft.appendChild(MCLImageTwo);
    mainContentLeft.appendChild(MCLImageThree);
    
    
    
        // Main Content Right
    
    let mainContentRight = document.createElement('div');
    mainContentRight.classList = 'mainContentRight';
    mainContentWrapper.appendChild(mainContentRight);

    let tabArea = document.createElement('div');
    tabArea.classList='tabArea';
    tabArea.id='tabArea';
    mainContentRight.appendChild(tabArea);

    let aboutUsButton = document.createElement('div');
    aboutUsButton.classList.add('tabButtons', 'aboutUs');
    aboutUsButton.innerHTML='ABOUT';
    mainContentRight.appendChild(aboutUsButton);

    let menuButton = document.createElement('div');
    menuButton.classList.add('tabButtons', 'menu');
    menuButton.innerHTML='MENU';
    mainContentRight.appendChild(menuButton);

    let contactUsButton = document.createElement('div');
    contactUsButton.classList.add('tabButtons', 'contactUs');
    contactUsButton.innerHTML='CONTACT';
    mainContentRight.appendChild(contactUsButton);


    }

