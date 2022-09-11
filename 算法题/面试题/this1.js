var name = "222"
var a = {
  name: "111",
  say: function () {
    console.info(this.name);
  }
}
var fun = a.say;
fun();//说结果
a.say();//说结果
var b = {
  name: "333",
  say: function (fun) {
    fun();
  }
}
b.say(a.say);//说结果
b.say = a.say;
b.say();//说结果
var fun1 = a.say.bind(b);
fun1.call(a);