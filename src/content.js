const createOpenWorkLink = (name) => {
  let ele = document.createElement('a');
  ele.title = 'OpenWork';
  ele.href =
    'https://www.vorkers.com/company_list?field=&pref=&src_str=' +
    name +
    '&sort=1&ct=com';
  ele.style = 'padding-left:0.5rem;';
  ele.target = '_blank';
  ele.rel = 'noopener';
  ele.innerHTML =
    '<img style="width:1.2rem;height:1.2rem;" src="https://www.vorkers.com/favicon.ico?01" alt="img" />';
  return ele;
};

const createLighthouseLink = (name) => {
  let ele = document.createElement('a');
  ele.title = 'Lighthouse';
  ele.href = 'https://en-hyouban.com/search/?SearchWords=' + name;
  ele.style = 'padding-left:0.5rem;';
  ele.target = '_blank';
  ele.rel = 'noopener';
  ele.innerHTML =
    '<img style="width:1.2rem;height:1.2rem;" src="https://en-hyouban.com/images/icons/icon-512x512.png" alt="img" />';
  return ele;
};

(() => {
  let companyNames = document.querySelectorAll(
    'h2.company-name,div.company-name'
  );
  if (companyNames) {
    companyNames.forEach((item) => {
      let companyName = encodeURIComponent(item.innerText.trim());
      if (companyName) {
        item.appendChild(createOpenWorkLink(companyName));
        item.appendChild(createLighthouseLink(companyName));
      }
    });
  }
})();
