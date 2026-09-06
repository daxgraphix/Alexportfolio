'use strict';

const sidebar = document.querySelector('[data-sidebar]');
const sidebarButton = document.querySelector('[data-sidebar-btn]');
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');
const navigationBar = document.querySelector('.navbar');
const navigationToggle = document.querySelector('[data-nav-toggle]');
const themeToggle = document.querySelector('[data-theme-toggle]');

function readSavedTheme() {
  try {
    return localStorage.getItem('alex-theme');
  } catch (error) {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem('alex-theme', theme);
  } catch (error) {
  }
}

const savedTheme = readSavedTheme();
if (savedTheme === 'light') {
  document.body.dataset.theme = 'light';
}

sidebarButton?.addEventListener('click', function () {
  const isOpen = sidebar.classList.toggle('active');
  sidebarButton.setAttribute('aria-expanded', String(isOpen));
  sidebarButton.setAttribute('aria-label', isOpen ? 'Hide contacts' : 'Show contacts');
});

navigationToggle?.addEventListener('click', function () {
  if (!navigationBar) return;
  const isHidden = navigationBar.classList.toggle('navbar-hidden');
  navigationToggle.setAttribute('aria-expanded', String(!isHidden));
  navigationToggle.setAttribute('aria-label', isHidden ? 'Show navigation' : 'Hide navigation');
  navigationToggle.querySelector('ion-icon')?.setAttribute('name', isHidden ? 'chevron-up-outline' : 'chevron-down-outline');
});

themeToggle?.addEventListener('click', function () {
  const isLight = document.body.dataset.theme === 'light';
  document.body.dataset.theme = isLight ? 'dark' : 'light';
  saveTheme(isLight ? 'dark' : 'light');
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to light theme' : 'Switch to dark theme');
  themeToggle.setAttribute('title', isLight ? 'Switch to light theme' : 'Switch to dark theme');
  themeToggle.querySelector('ion-icon')?.setAttribute('name', isLight ? 'sunny-outline' : 'moon-outline');
});

if (themeToggle && document.body.dataset.theme === 'light') {
  themeToggle.setAttribute('aria-label', 'Switch to dark theme');
  themeToggle.setAttribute('title', 'Switch to dark theme');
  themeToggle.querySelector('ion-icon')?.setAttribute('name', 'moon-outline');
}

function showPage(selectedPage) {
  pages.forEach(function (page) {
    page.classList.toggle('active', page.dataset.page === selectedPage);
  });

  navigationLinks.forEach(function (navigationLink) {
    const isActive = navigationLink.dataset.pageTarget === selectedPage;
    navigationLink.classList.toggle('active', isActive);
    navigationLink.toggleAttribute('aria-current', isActive);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navigationLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    showPage(link.dataset.pageTarget);
  });
});

document.querySelectorAll('[data-nav-target]').forEach(function (target) {
  target.addEventListener('click', function (event) {
    event.preventDefault();
    const selectedPage = target.dataset.navTarget;

    showPage(selectedPage);
  });
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && sidebar?.classList.contains('active')) {
    sidebar.classList.remove('active');
  }
});
