const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove('border-softRed', 'border-b-4', 'md:border-b-0');
  });

  panels.forEach((panel) => panel.classList.add('hidden'));

  e.target.classList.add('border-softRed', 'border-b-4');
  const classString = e.target.getAttribute('data-target');
  document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden');
}
