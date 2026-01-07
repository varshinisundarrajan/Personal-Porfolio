function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  const underline = document.querySelector('.underline');

  tabs.forEach((tab, index) => {
    tab.classList.remove('active');
    if (tab.innerText.toLowerCase() === tabId) {
      tab.classList.add('active');
      underline.style.transform = `translateX(${index * 110}px)`;
    }
  });

  contents.forEach(content => {
    content.classList.remove('active');
  });

  document.getElementById(tabId).classList.add('active');
}

function openTab(evt, tabName) {
  let tabcontent = document.getElementsByClassName("tab-content");
  let tablinks = document.getElementsByClassName("tab-link");

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

