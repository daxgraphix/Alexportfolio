'use strict';

const sidebar = document.querySelector('[data-sidebar]');
const sidebarButton = document.querySelector('[data-sidebar-btn]');
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');
const navigationBar = document.querySelector('.navbar');
const navigationToggle = document.querySelector('[data-nav-toggle]');
const themeToggle = document.querySelector('[data-theme-toggle]');

const savedTheme = localStorage.getItem('alex-theme');
if (savedTheme === 'light') {
  document.body.dataset.theme = 'light';
}

sidebarButton.addEventListener('click', function () {
  sidebar.classList.toggle('active');
});

navigationToggle.addEventListener('click', function () {
  const isHidden = navigationBar.classList.toggle('navbar-hidden');
  navigationToggle.setAttribute('aria-expanded', String(!isHidden));
  navigationToggle.setAttribute('aria-label', isHidden ? 'Show navigation' : 'Hide navigation');
  navigationToggle.querySelector('ion-icon').setAttribute('name', isHidden ? 'chevron-up-outline' : 'chevron-down-outline');
});

themeToggle.addEventListener('click', function () {
  const isLight = document.body.dataset.theme === 'light';
  document.body.dataset.theme = isLight ? 'dark' : 'light';
  localStorage.setItem('alex-theme', isLight ? 'dark' : 'light');
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to light theme' : 'Switch to dark theme');
  themeToggle.setAttribute('title', isLight ? 'Switch to light theme' : 'Switch to dark theme');
  themeToggle.querySelector('ion-icon').setAttribute('name', isLight ? 'sunny-outline' : 'moon-outline');
});

if (document.body.dataset.theme === 'light') {
  themeToggle.setAttribute('aria-label', 'Switch to dark theme');
  themeToggle.setAttribute('title', 'Switch to dark theme');
  themeToggle.querySelector('ion-icon').setAttribute('name', 'moon-outline');
}

navigationLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    const selectedPage = link.textContent.trim().toLowerCase();

    pages.forEach(function (page) {
      page.classList.toggle('active', page.dataset.page === selectedPage);
    });

    navigationLinks.forEach(function (navigationLink) {
      navigationLink.classList.toggle('active', navigationLink === link);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

document.querySelectorAll('[data-nav-target]').forEach(function (target) {
  target.addEventListener('click', function (event) {
    event.preventDefault();
    const selectedPage = target.dataset.navTarget;

    pages.forEach(function (page) {
      page.classList.toggle('active', page.dataset.page === selectedPage);
    });

    navigationLinks.forEach(function (link) {
      link.classList.toggle('active', link.textContent.trim().toLowerCase() === selectedPage);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
