const axios = require("axios");

function component() {
    const root = document.createElement("div");
    const buttonTest = document.createElement("button");

    root.classList.add("container");
    buttonTest.classList.add("buttonTest");

    root.innerHTML = "Hello Webpack!!";
    buttonTest.innerHTML = "test";

    buttonTest.addEventListener("click", function testAxios() {
        axios.get("/api/test").then(function (res) {
            console.log("response from axios: ", res);
        });
    });
    root.appendChild(buttonTest);

    return root;
}

document.body.appendChild(component());
