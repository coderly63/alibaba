// 在文件顶部添加以下代码
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';

function logClass(target) {
  console.log(`Class: ${target.name}`);
}

@logClass
class MyClass {
  // 类的定义
}
