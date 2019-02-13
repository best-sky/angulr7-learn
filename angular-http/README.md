Angular响应式开发中报错Property 'map' does not exist on type 'Observable'.引用rxjs也没用。
最后查阅官方注释资料发现是pipe implementation的问题，但是又懒得改。于是找到了一个超简单的方法。

只需要在code terminal命令终端上输入下面这条命令，然后重启项目，重新引入路径就行了

npm install rxjs-compat
同种方法，还适用于解决.debounceTime等同类Angular响应式开发中的问题。
