//selecionar elementos
const multiplicationForm = document.getElementById("multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTitle = document.querySelector("#multiplication-table span");

const multiplicationTable = document.querySelector("#multiplication-operations");

//funcoes
const createTable = (number, multiplicationNumber) => {

   multiplicationTable.innerHTML = "";

   for (i = 1; i <= multiplicationNumber; i++) {

    const result = number * i;

    const template = `
    <div class="row">
        <div class="operation">${number} x ${i} =</div>
        <div class="result">${result}</div>
    </div>
    `;

    const parser = new DOMParser()

    const htmlTemplate = parser.parseFromString(template, "text/html");
    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);

}
multiplicationTitle.innerHTML = number;

};


//eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;


    if (!multiplicationNumber || !multiplicatorNumber) return;

    // Chama a função para criar a tabela
    createTable(multiplicationNumber, multiplicatorNumber);
});