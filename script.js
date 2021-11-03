const button = document.getElementById("submit");


button.addEventListener('click', () => {
    let ans = calculate();
    if (ans != null) {
        document.getElementById('totalPrice').innerHTML = `${ans.name} costs ${ans.price}. And his letter: "${ans.letter}"`;
    } else {
        alert("Not allowed to choose empty field")
    }
})


function Bride(name, price, letter) {
    return {
        name: name,
        price: price,
        letter: letter
    };
}

let calculate = () => {
    let name = document.forms["myForm"]["bName"].value;
    let price = document.forms["myForm"]["sBid"].value;
    let letter = document.forms["myForm"]["lLetter"].value;
    if(!name || !price){
        alert("Type name and price");
    }else{
        let totalPrice = Number(price);

        const bgEducation = document.getElementById("education");
        let education_value = bgEducation.options[bgEducation.selectedIndex].value;
        if (education_value != 'blank') {
            education_value = Number(education_value)
            totalPrice = totalPrice * education_value;
        }
        /*

        */
        const familyNet = document.getElementById("networth");
        let networth_value = familyNet.options[familyNet.selectedIndex].value;
        if (networth_value != 'blank') {
            networth_value = Number(networth_value)
            totalPrice = totalPrice * networth_value
        }
        /*

        */
        const brideCaste = document.getElementById("caste");
        let caste_value = brideCaste.options[brideCaste.selectedIndex].value;
        if (caste_value != 'blank') {
            caste_value = Number(caste_value)
            totalPrice = totalPrice + caste_value
        }
        /*

        */
        const brideSkills = Array.from(document.querySelectorAll(".skills")).filter((element) => element.checked).map((element) => Number(element.value));
        if (brideSkills.length != 0) {
            const skills_value = brideSkills.reduce((tmp, value) => tmp + value, 0)
            totalPrice = totalPrice + skills_value
        }
        /*

        */
        const brideAge = document.getElementsByName("radiobtn");
        brideAge.forEach(item => {
            if (item.checked) {
                totalPrice = totalPrice * Number(item.value)
            }
        })
        /*

        */
        const brideReputation = Array.from(document.querySelectorAll(".reputation")).filter((element) => element.checked).map((element) => Number(element.value));
        for (let i = 0; i < brideReputation.length; i++) {
            if (Number.isInteger(brideReputation[i])) {
                totalPrice = totalPrice + brideReputation[i]
            }
            else {
                totalPrice = totalPrice * brideReputation[i]
            }
        }

        return new Bride(name, totalPrice, letter);
    }
}


