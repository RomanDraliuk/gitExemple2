/**
 * Created by Roman on 11/28/2016.
 */

let person = {
    firsName    :'Roman',
    lastName    :'Draliuk',
    married     :true,
    birthDay    :'25/02/1985',
    birthYear   : 1985,
        address:{
            city :'Herzeliya',
            street  :'Vaizman',
            houseNumber : 7,
        },
    getSideOfTheHouse:  function()
    {
        if (this.address.houseNumber % 2 == 0) {
            return true;
        } else
            return false;
    },
    getAge: function () {
        let d = new Date();
        let n = d.getFullYear();
        let m = this.birthYear;
        return n-m;
    }
};
document.write(`Name :${person.firsName} <br> Married:${person.married} <br> Street:${person.address.street} <br>`);
person.address.city="Tel aviv";
document.write(`New city: ${person.address.city}<br>`);
document.write(person.getSideOfTheHouse()?'West':'East'+"<br>");

let isBoomInTheHouse = (pr) => {
    let str= pr.address.houseNumber.toString()
    let indexOf = str.indexOf('7')
    if(pr.address.houseNumber%7 == 0)
    {
        document.write(`Boom !!!<br>`);
    }
    else  if (indexOf != -1)
    {
        document.write(`Boom !!!<br>`);
    }
    else{
        document.write(pr.address.houseNumber);
   }

}
isBoomInTheHouse(person);
document.write(`Your age is : ${person.getAge()} <br>`);