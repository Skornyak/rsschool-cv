const tabs = document.querySelectorAll('.favorit__tab')
const content = document.querySelectorAll('.favorit__content')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    if (tab.classList.contains('active')) {
      return;
    }
    const tabName = tab.dataset.path;

    tabs.forEach((item) => {
      item.classList.remove('active')
    });

    content.forEach((item) => {
      item.classList.remove('active')
    });

    tab.classList.add('active');

    content.forEach((contents) => {
      if (contents.dataset.target === tabName) {
        contents.classList.add('active');
      }
    })

  })

})
