

let user = { };

user.name = "John";
user.surname = "Smith";


for (let prop in user)  {
    console.log(user[prop]);
};

user.name = "Pete";

for (let prop in user)  {
    console.log(user[prop]);
};

delete user.name;

for (let prop in user)  {
    console.log(user[prop]);
};


let schedule = {};

alert( isEmpty(schedule) );

schedule["8:30"] = "get up";

alert( isEmpty(schedule) );

function isEmpty(obj)  {
    for (let key in obj)    {
        return false;
    };
    return true;
};

let salaries = {
    John:   100,
    Ann:    160,
    Pete:   130,
};

function sumSalaries(obj)   {
    let temp = 0;
    if (!isEmpty(salaries)) {
        for (let prop in obj)   {
            //console.log(obj[prop]);
            temp += obj[prop];
            //console.log(temp);
        };
    };
    return temp;
};

let sum = sumSalaries(salaries);
console.log(sum);

let menu = {
    width:  200,
    height: 300,
    title:  "My menu",
};

for (let prop in menu)  {
    console.log(menu[prop]);
};

function multiplyNumeric(obj)   {
    for (let prop in obj)   {
        if (typeof obj[prop] === "number")   {
            obj[prop] = (obj[prop] * 2);
            //console.log(obj[prop]);
        };
    };
};

multiplyNumeric(menu);

for (let prop in menu)  {
    console.log(menu[prop]);
};
