async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function populateData() {
  const newData = await getData('https://jsonplaceholder.typicode.com/todos/1');
  console.log("newData in populateData", newData);
  const userid = document.getElementById("userid")
  const id = document.getElementById("id");
  const title = document.getElementById("title");
  const completed = document.getElementById("completed");
  userid.innerText = `UserId: ${newData.userId}`;
  id.innerText = `Id: {newData.id}`;
  title.innerText = `Title: {newData.title}`;
  completed.innerText = `Completed: ${newData.completed}`;
}


populateData();