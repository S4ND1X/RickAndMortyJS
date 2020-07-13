import API from "./api.js";

const api = new API();
for (let i = 1; i<= 10; i++){
    api.getCharacter(i).then(res => {
        console.log(res);
    });
}
