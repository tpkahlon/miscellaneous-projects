async function getData() {
  try {
    const req = await fetch(
      `https://raw.githubusercontent.com/jmsv/vscode-javascript-standard/master/snippets/snippets.json`
    );
    const json = await req.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

getData()
  .then(data => {
    if (!data) {
      document.querySelector(`.app`).classList.add(`oops`);
      document.querySelector(
        `.app`
      ).innerHTML = `<div class="error">404!</div>`;
      return;
    }
    let list = ``;
    let sortedList = _.sortBy(data, "prefix");
    _.map(sortedList, function(obj) {
      list += `<div class="card"><div class="card__p">${obj.prefix}</div><div class="card__d">${obj.description}</div><div class="card__c"><code>${obj.body}</code></div></div>`;
    });
    document.querySelector(`.app`).innerHTML = list;
  })
  .catch(error => {
    console.log(error);
  });
