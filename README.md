

<h1 align="center">Maple-Leaf😶‍🌫️</h1>

**谨以此软件致敬我的“赛博文盲”兄弟们。💖**

**首先，我要声明本软件（Maple Leaf）的制作离不开我的“赛博文盲”兄弟们😂😂。**

![](https://github.com/LPHYSQS/Maple-Leaf/blob/main/ImageData/AppLogo.png?raw=true)

## 🖊   说明

**Maple Leaf是为了解决PC小白安装电脑软件无法正确找到官网下载到盗版软件以及下载到捆绑软件，另外就是一些在特定情况下需要对电脑重装后快速安装一些必备软件需求，避免在U盘或移动硬盘上频繁向电脑中拷贝一些必备软件。**

我的好兄弟们，他们有的Steam需要关注公众号登录，有的将Google浏览器下载成了“全家桶”（还被篡改了默认浏览器主页），有的电脑桌面全是“一刀九九、是兄弟就来砍我！”，有的在网店购买正版游戏平台安装包，呃……。

其实这些都是玩笑话，真实应该是苦搜索久矣才对。😊😊

Maple Leaf是一款由Unity制作的“自由软件部署”软件，你看到的通过“远程获取”的软件中80%都是自由且开源的软件。

关于制作如果你问我为什么选择Unity制作，原因就是我对其他的UI框架并不是十分熟悉（包括WPF【C#】，本软件的更新程序是由WPF【C#】编写的）,其实你如果有兴趣的话，可以自己搭建一个资源占用较少的UI进行驱动。

~~UI界面的Unity源码我会进行开源，但目前有部分代码需要进行优化（其实就是一些速度提升的问题😥，尤其是对于无法正常访问GitHub的用户的网络原因【依赖于对数据的获取】）~~

目前已开源，开源地址：https://github.com/LPHYSQS/Open-Maple-Leaf

**软件内部预览：**

![](https://github.com/LPHYSQS/Maple-Leaf/blob/main/ImageData/SoftwareInterface.png?raw=true)

## ✌️ 关于更新

1. ~~对于“远程获取”软件资源不出意外的话我会在每个月的1号与15号进行资源更新。~~

2. 关于有些网址无法打开的问题，你可以通过软件中的网盘按钮进行软件下载。

3. 软件更新（其实就是UI界面更新），除非存在必要更新才会推送更新的。

   **注：目前除非有特别必要原因会进行软件UI以及根本功能性更新，否则不再推出更新，关于软件仓库维护（远程获取更新软件列表内容）将不再提供资源更新，目前已将配置文件更改功能开放给了用户，可以通过内置编辑器进行相应配置文件json进行更改，其中内置可以使用文件编辑器包括了Python独立开发者内容编辑器以及“*notepad 3*”文本编辑器。**

## 🖥 支持的操作系统

- Windows 10及以上64位操作系统

## 🫡二次开发

关于二次开发你可以通过Get请求：【[raw.githubusercontent.com/LPHYSQS/Maple-Leaf/main/SoftwareInformation.json](https://raw.githubusercontent.com/LPHYSQS/Maple-Leaf/main/SoftwareInformation.json)】通过获取数据后对json的解析获取当前软件库状态并进行UI界面显示与交互。

SoftwareInformation.json文件说明（此 JSON 文件用于存储各类软件的详细信息，包括名称、类型、官方网站、下载链接）：

JSON 数据的顶层结构包含一个名为 `data` 的数组，其中每个元素代表一个软件，包含以下字段：

- `softwareName` (字符串): 软件名称
- `type` (字符串): 软件类型
- `softwareDetail` (字符串): 软件详情链接
- `softwareNetworkDiskUrl` (字符串): 软件网盘链接
- `downloadUrl` (字符串): 软件下载链接
- `comments` (字符串): 软件说明

json示例：

```json
{
  "data": [
    {
      "softwareName":"7-Zip",
      "type":"解压缩",
      "softwareDetail":"https://7-zip.org/",
      "softwareNetworkDiskUrl":"https://www.123pan.com/s/eleuVv-CZOPA.html",
      "downloadUrl":"https://7-zip.org/a/7z2407-x64.exe",
      "comments":"解压缩工具(开源、轻量化)"
    },
    {
      "softwareName":"PeaZip",
      "type":"解压缩",
      "softwareDetail":"https://peazip.github.io/",
      "softwareNetworkDiskUrl":"https://www.123pan.com/s/eleuVv-WZOPA.html",
      "downloadUrl":"https://github.com/peazip/PeaZip/releases/download/9.8.0/peazip-9.8.0.WIN64.exe",
      "comments":"解压缩工具(开源、轻量化)"
    },
    {
      "softwareName":"Sumatra PDF",
      "type":"书籍阅读",
      "softwareDetail":"https://www.sumatrapdfreader.org/free-pdf-reader",
      "softwareNetworkDiskUrl":"https://www.123pan.com/s/eleuVv-sZOPA.html",
      "downloadUrl":"https://www.sumatrapdfreader.org/dl/rel/3.5.2/SumatraPDF-3.5.2-64-install.exe",
      "comments":"书籍阅读工具(开源、轻量化、支持PDF、Mobi、Epub等、不支持编辑)"
    }
   ]
 }
```



## 🫠 关于作者

作者邮箱：ysqslphlph@gmail.com

作者B站主页：https://space.bilibili.com/356837669?spm_id_from=333.337.0.0

作者GitHub仓库：[LPHYSQS (已逝情殇)](https://github.com/LPHYSQS)

