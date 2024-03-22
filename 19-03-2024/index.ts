let  students=["student 1","student 2"]

type usertype={
firtName:string;
lastName:string;
cnicNo: number;
isStudent:boolean;
subject:"string[]";
address:adresstype
}

    var student1: usertype = {
    firtName: "hafsa",
    lastName:"M.Nasar",
    cnicNo: 23564747,
    isStudent:true,
    subject:["english", "urdu", "math"],
    address:{houseName: "xyz",
        streetName:"hhhyy",
        block: 156,
        city: "karachi",}
};

var student2:usertype={
    firstName: "nida",
    lastName: "Muhammad",
    cnicNo: 374845,
    isStudent: false,
    Subject:["math,urdu"],
    address:{houseName: "abcd",
        streetName:"xyz",
        block: 14,
        city: "karachi",},
};

interface adresstype{
    houseName:string;
    streetName:string;
    block: number;
    city: string;
};


let fruits:string[]=["apple","mango"],

// type fruitsDetail = {
// fruitName: string,
// quality: string,
// price: number,
//  }}




