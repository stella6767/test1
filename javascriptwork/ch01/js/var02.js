//1 자바스크립트는 자료형이 동적으로 정해진다.
//자바스크립트에선 var를 쓴다 =[각종 자료형상관없이 쓸수있게해준다.]
//인터프르터 환경에서는 우측에서 좌측으로 이동하며 읽는다

var num = 10; //정수 4바이트 ->Heap
console.log("nub : ", num);

var str = "문자열"; //문자열 4바이트 ->Heap
console.log("str : ", str);

var floatNum= 10.5; //실수 4바이트 ->Heap
console.log("floatNum : ", floatNum);


var charStr = "가" //문자 4바이트 ->Heap
console.log ("charstr", charStr);

var boolData = true; //bool <참거짓 true, false 4바이트 ->Heap
console.log("boolData", boolData);

var list =[1,2,3,4,5]; //4Byte Heap 배열
console.log("list",list);
console.log("list[0]",list[0]);
console.log("list[5]",list[5]);

//자바스크립트의 오브젝트 (key : value) 4Byte -> Heap
var user = {
    name : "홍길동",
    phone : "0102222"
}
console.log("user", user);
console.log("user.name", user.name);
console.log("user.phone", user.phone);

var hello = function(){ //4Byte
    alert("함수 호출됨");
}

hello();


