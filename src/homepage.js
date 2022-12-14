import './style.css';
import Background from './images/background.jpg';

function createHeader() {

  const header = document.createElement('div');
  header.classList.add('header');

  const headerLogoContainer = document.createElement('div');
  headerLogoContainer.classList.add('header-logo-container');

  const headerLogo = document.createElement('div');
  headerLogo.classList.add('header-logo');

  const headerLogoLineOne = document.createElement('div');
  headerLogoLineOne.classList.add('line-1');
  headerLogoLineOne.textContent = 'Midtown';

  const headerLogoLineTwo = document.createElement('div');
  headerLogoLineTwo.classList.add('line-2');
  headerLogoLineTwo.textContent = 'Café';

  headerLogo.append(headerLogoLineOne, headerLogoLineTwo);
  headerLogoContainer.append(headerLogo);

  const headerNavigationContainer = document.createElement('div');
  headerNavigationContainer.classList.add('header-navigation-container');

  const headerNavigation = document.createElement('div');
  headerNavigation.classList.add('header-navigation');

  const navHome = document.createElement('div');
  navHome.classList.add('nav-home');
  navHome.textContent = 'Home';

  const navMenu = document.createElement('div');
  navMenu.classList.add('nav-menu');
  navMenu.textContent = 'Menu';

  const navContact = document.createElement('div');
  navContact.classList.add('nav-about');
  navContact.textContent = 'About';

  headerNavigation.append(navHome, navMenu, navContact);
  headerNavigationContainer.append(headerNavigation);

  const headerImgContainer = document.createElement('div');
  headerImgContainer.classList.add('header-img-container');

  const takeOutBtnContainer = document.createElement('div');
  takeOutBtnContainer.classList.add('takeout-btn-container');

  const takeOutBtn = document.createElement('button');
  takeOutBtn.classList.add('takeout-btn');
  takeOutBtn.type = 'button';
  takeOutBtn.textContent = 'Takeout!';

  takeOutBtnContainer.append(takeOutBtn);

  header.append(headerLogoContainer, headerNavigationContainer, headerImgContainer, takeOutBtnContainer)

  return header;
}

function createMainContent() {

  const main = document.createElement('div');
  main.classList.add('main');

  const mainBackground = document.createElement('div');
  mainBackground.classList.add('main-background');

  const backgroundImgContainer = document.createElement('div');
  backgroundImgContainer.classList.add('background-img-container');

  const backgroundImg = document.createElement('img');
  backgroundImg.src = Background;
  backgroundImg.alt = "Background photo of restaurant setting";
  backgroundImg.classList.add('background-img');

  backgroundImgContainer.append(backgroundImg);
  mainBackground.append(backgroundImgContainer);

  const welcomeTextContainer = document.createElement('div');
  welcomeTextContainer.classList.add('welcome-text-container');

  const welcomeText = document.createElement('div');
  welcomeText.classList.add('welcome-text');
  welcomeText.textContent = 'Welcome!';

  welcomeTextContainer.append(welcomeText);

  main.append(mainBackground, welcomeTextContainer);

  return main;
}

function createFooter() {

  const footer = document.createElement('div');
  footer.classList.add('footer');

  const footerText = document.createElement('div');
  footerText.classList.add('footer-text');
  footerText.textContent = 'Created by Mark Melnik';

  footer.append(footerText);

  return footer;
}

function loadHomePage() {
  const container = document.querySelector('.container');
  container.append(createHeader(), createMainContent(), createFooter());
  return container;
}

export default loadHomePage;