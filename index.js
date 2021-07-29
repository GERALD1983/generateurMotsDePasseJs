const alphabetMin = "azertyuiopqsdfghjklmwxcvbn";
const alphabetMaj = alphabetMin.toUpperCase();
const nombre = "9876543210";
const signe = "&é(-è_çà)=$*ù^!:;,?%";

const title = document.getElementById("title");

const generatePass = () => {
  let table = [];
  let password = "";

  if (lowercase.checked) {
    table.push(...alphabetMin);
  }
  if (uppercase.checked) {
    table.push(...alphabetMaj);
  }
  if (numbers.checked) {
    table.push(...nombre);
  }
  if (characters.checked) {
    table.push(...signe);
  }
  if (table.length == 0) {
    title.textContent = `Generateur de mots de passe`;
    alert("choisir un format de mot de passe");
    return;
  }
  console.log(table);
  console.log(table[Math.floor(Math.random() * table.length)]);
  console.log(readPasswordLength.value);

  for (i = 0; i < readPasswordLength.value; i++) {
    password += table[Math.floor(Math.random() * table.length)];
  }
  console.log(password);

  title.innerHTML = `${password}`;
  console.log(title.innerHTML);
  navigator.clipboard.writeText(title.innerHTML);
  generateButton.innerHTML = "Mot de passe Copié";

  setTimeout(() => {
    alert("Celui-ci à été copier dans le presse-papier");
    generateButton.innerHTML = "Generer Mdp";
    title.innerHTML = `Generateur de mots de passe`;
  }, 1000);
};
generateButton.addEventListener("click", () => {
  generatePass();
});
