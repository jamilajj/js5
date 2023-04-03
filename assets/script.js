class Company {
    constructor(companyN, companyF) {
        this.companyN = companyN,
            this.companyF = companyF
    }
    employes = [
        [],
        []
    ]
    getData() {
        let data = this.employes;
        let fullname = document.getElementById('fullname');
        let profession = document.getElementById('profession');
        if (fullname.value != "" && profession.value != "") {
            data[0].push(fullname.value)
            data[1].push(profession.value)
        }


    }
    employesTable() {
        let data = this.employes;

        let tr = `<tr>
        <td> Name </td>
        <td> profession </td>
        </tr>`
        for (let i = 0; i < data[0].length; i++) {
            tr += `<tr>
            <td> ${data[0][i]} </td>
            <td> ${data[1][i]} </td>
            </tr>` 
        }

        return tr;
    }



}
const a = new Company("Code Academy", "Sahil");
const b = new Company("Code Academy", "N.Nerimanov");

let companyN = document.getElementById('companyN');
let companyF = document.getElementById('companyF');
let btn = document.getElementById('btn');
let tbl = document.getElementById('tbl');
btn.addEventListener('click', () => {
    a.getData();
    tbl.innerHTML = a.employesTable();
})


companyN.innerHTML = a.companyN;
companyF.innerHTML = a.companyF;
