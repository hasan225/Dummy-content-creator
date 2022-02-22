const dummyText = [

    "Marshmallow gummi bears sweet roll macaroon chocolate. Lemon drops candy sugar plum donut toffee tart soufflé topping. Gummies tart wafer oat cake cookie apple pie.",

    "Carrot cake tart lollipop chocolate bar soufflé. Bonbon dragée shortbread tootsie roll dessert sugar plum marshmallow bonbon. Chupa chups cotton candy apple pie topping shortbread.",

    "Carrot cake jelly-o powder cake powder cake. Bear claw apple pie lemon drops danish cookie. Powder chocolate bar powder jelly beans soufflé pie. Toffee icing donut macaroon gummies sweet roll caramels soufflé.",

    "Chupa chups wafer jelly candy cheesecake icing. Macaroon fruitcake gummi bears pie jelly oat cake cookie topping. Marzipan marzipan muffin lollipop bear claw cotton candy.",

    "Sweet roll chupa chups gummies pudding chocolate cake jelly-o liquorice chupa chups cake. Apple pie powder sweet bonbon halvah shortbread. Wafer wafer wafer candy dessert sugar plum jelly-o.",

    "Bear claw muffin halvah chupa chups sweet tootsie roll toffee bear claw. Tiramisu powder danish ice cream sweet roll. Danish cake pie cupcake jelly cupcake jujubes.",

    "Carrot cake pie pastry jelly beans lollipop tiramisu bear claw. Chocolate bar brownie gummies icing cheesecake candy canes lollipop danish shortbread. Biscuit marzipan carrot cake macaroon toffee dragée brownie.",

    "Shortbread topping cake cake lemon drops sugar plum. Pudding dragée soufflé chocolate cake dessert. Chupa chups macaroon fruitcake pastry tiramisu apple pie biscuit lemon drops donut. Marzipan pie cotton candy marshmallow gummies chupa chups macaroon topping.",

    "Chocolate cake chupa chups donut tiramisu donut carrot cake chocolate cake dragée. Oat cake wafer ice cream toffee ice cream apple pie gummi bears. Chupa chups sweet macaroon sweet roll halvah icing carrot cake biscuit cookie.",

    "Muffin topping cookie jelly beans icing caramels. Caramels biscuit pastry wafer candy canes danish. Oat cake toffee powder chupa chups chupa chups shortbread cheesecake dragée.",

];

const form = document.querySelector(".form")
const amount = document.querySelector("#amount")
const button = document.querySelector(".btn")
const result = document.querySelector("#result")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const value = Number(amount.value);
    const randomNumber = Math.floor(Math.random() * dummyText.length)

    if (isNaN(value) || value <= 0 || value > 10) {
        result.innerHTML = `<p>${dummyText[randomNumber]}</p>`;
    }
    else{
        const slicedArray =dummyText.slice(0,value);
       
        const mapSlice =slicedArray.map(singleDummy=>{
            return `<p>${singleDummy}</p>`;
        }).join('')

       result.innerHTML=`<p>${mapSlice}</p>`;
    }
})



