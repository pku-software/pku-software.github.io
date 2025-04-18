# 常见问题（持续更新）


## `CMake` 和编译相关问题
**Q1**: `main.cpp` 无法编译，怎么办？

**A1**: 中作业是多文件工程，应该使用 `CMake` 进行编译，可以参考PPT `12-C++多文件工程` 中 `CMake` 的部分、教学网补充视频的 `CMake` 部分，以及中作业文档中的`CMake` [视频](https://www.bilibili.com/video/BV1Pg4y1U7XM?t=3072.7)。
```
cmake -B build
cmake --build build  
```

**Q2**: Windows 下编译不过，报错中有 “找不到 read 符号”等相似字眼

**A2**: `CMakeLists.txt` 中需要有如下的语句，在 Windows 下链接到系统网络库 `ws2_32`
```cmake
if(WIN32)
    target_link_libraries(docman ws2_32)
endif()
```

**Q3**: 没有使用命名空间，自己定义了叫 `read` 的函数，无法编译

**A3**: 有一个同名的系统函数叫 `read`，重名了。建议用命名空间（namespace）或者改用其他名字。

## 命令行相关问题

以下例子都是针对 Windows 的。

**Q1**: 命令行是什么意思？

**A1**: 首先打开命令行。Windows 上，你可以打开`终端`软件。如果没有`终端`的话，就打开 `cmd`。这时候你会看到一个可以输入文本的一行，这就是命令行。

与大家平常接触的图形界面不同，命令行是一个“文字输入-文字输出”理念下的与机器的交互工具。可以理解成，你给机器一条命令，机器执行操作，给你文字输出的结果。

在 VS Code 中，你可以通过点击页面上方“...->终端->新建终端”的方式在 VS Code 内部方便地使用命令行。

**Q2**: 一条命令行命令有哪些构成元素？

**A2**: 假如有一个命令说明，如下：

```bash
.\docman.exe [-x abc] <-y def> <opq>
```

这个说明由两部分构成，第一部分是".\docman.exe"，这是可执行文件，后面的所有内容都是参数。
"[]"包含的参数是可选参数，"<>"包围的参数是必须参数。

参数分两种，一种是"-key value"，意思可以理解为 `key=value`，另一种是没有key，这样的value会被程序按约定好的顺序处理。

具体调用命令的例子如下所示：

```bash
.\docman.exe -x abc -y def opq
```

那么程序中如何处理这些参数呢？对于 `C` 和 `C++` 而言，所有的命令行输入都会通过 `main` 函数的参数传递。比如 `int main(int argc, char** argv)` ，就有 `argc` 个命令行参数。以上面这个命令为例，`argc` 为6, `argv` 依次为指向 `.\docman.exe`, `-x`, `abc`, `-y`, `def`, `opq` 字符数组的指针。

你可以依次处理这些参数，进行判断。

**Q3**: 为什么我的程序找不到我要的文件？绝对路径和相对路径是什么意思？

**A3**: 当你的程序试图访问一个文件但却找不到时，很可能是因为文件路径指定的不正确。在计算机中，文件路径有两种类型：绝对路径和相对路径。

- 绝对路径：这是从你的系统的根目录（例如Windows系统的C盘根目录）一直指到文件的完整路径。无论当前你的程序在哪个目录运行，绝对路径总是指向同一个文件。例如，`C:\Users\张三\Documents\report.docx` 就是一个绝对路径，它直接告诉计算机去哪个具体位置找这个文件。

- 相对路径：这是相对于当前工作目录的路径。如果你的程序在某个目录下运行，那么相对路径会从这个目录开始计算。例如，如果你的程序在 `C:\Users\张三\` 下运行，而你提供了相对路径 `Documents\report.docx` ，那么程序实际上会去寻找 `C:\Users\张三\Documents\report.docx` 这个位置的文件。

我们把程序运行的路径叫做“工作目录”，你可以通过 `cd` 改变程序的工作目录。`cd` 后既可以跟着绝对路径，也可以跟着相对路径。

如果你的程序找不到文件，可能是因为：

- 使用了不正确的路径。检查是否拼写错误或者路径是否真的指向了预期的文件位置。
- 使用了相对路径，但当前的工作目录不是你预期的目录。这种情况下，尝试使用绝对路径，或者更改程序的运行目录。

无论相对路径还是绝对路径，你都可以用 `ls` 命令检查文件是否存在。

## `Visual Studio` 相关

**Q1**: 我现在知道传递命令行参数需要找到可执行文件并在命令行执行了，如何找到文件呢？

**A1**: 有如下步骤：

- 编译项目：首先，确保你的项目已经编译生成了可执行文件。在 `Visual Studio` 中，你可以通过点击“生成”菜单的“生成解决方案”来编译你的项目。
- 定位文件：编译完成后，可执行文件通常位于项目目录下的 `Debug` 或 `Release` 文件夹中，这取决于你的构建配置，默认应该是 `Debug`。你可以在“解决方案资源管理器”中找到你的项目，右击主项目，选择“打开文件夹位置”，然后导航到相应的 `Debug` 或 `Release` 文件夹。
- 运行文件：找到 `.exe` 文件后，你可以直接双击运行，或者在命令行窗口中导航到该文件的目录，然后输入文件名并传递任何必要的命令行参数来运行。

**Q2**: 我想用调试器，怎么传命令行参数？

**A2**: 
- 在“解决方案资源管理器”中，右击你的项目，然后选择“属性”。
- 在弹出的属性页中，找到“调试”选项。
- 在“调试”选项页中，你会看到一个“命令行参数”字段。在这里输入你想传递给程序的参数。
- 点击“确定”保存设置。现在，每当你启动调试时，这些参数就会被传递给程序。

**Q3**: 怎么用 git，怎么 git push？

在 Visual Studio 中，你可以通过“团队资源管理器”来管理Git仓库。

- 使用 Git：打开 Visual Studio，然后从顶部菜单选择“视图”>“团队资源管理器”。在团队资源管理器中，你可以找到“连接”视图，选择“本地仓库”来添加或克隆 Git 仓库。如果你的项目已经是一个 Git 仓库，你可以在“更改”视图中查看更改、提交更改等。
- 执行 Git Push：提交你的更改后，你需要将这些更改推送到远程仓库。在团队资源管理器的“同步”视图中，你可以找到“推送”按钮，点击它会将本地的提交推送到配置的远程仓库。如果你还没有设置远程仓库，你需要先在“仓库设置”中配置远程仓库的链接。

## 错误处理

**Q1**: 我用 `ifstream` 读文件读不到任何东西，怎么办？

**A1**: 有以下几种可以检查的问题：

- 检查文件路径：确保提供给 `ifstream` 的文件路径是正确的。路径错误是常见的问题，特别是在使用相对路径的情况下。确定好具体的工作目录，并尝试使用绝对路径来看看是否能解决问题。
- 检查文件是否真的存在：在尝试打开文件之前，你可以使用文件系统的相关函数（如 C++17 的 `std::filesystem::exists`）来检查文件是否存在。
- 检查文件打开状态：在尝试从文件读取数据之前，始终检查文件是否已经成功打开。可以通过 `ifstream` 的 `is_open()` 方法来实现：
```cpp
std::ifstream file("path/to/your/file.txt");
if (!file.is_open()) {
    std::cerr << "无法打开文件，请检查文件路径是否正确！" << std::endl;
}
```
- 错误处理：如果文件打开了但读取失败，可以通过检查  `fail()` 和 `eof()` 等状态来进一步诊断问题。例如，`fail()` 会在读取错误发生时返回 `true`，而 `eof()` 则在到达文件末尾时返回 `true`。

## 杂项

**Q1**: 如何创建和编辑 .json 文件？

**A1**: 

- 确保能看到文件后缀名：如果你使用 Windows 系统，你需要确保文件资源管理器设置为显示文件扩展名。打开文件资源管理器，选择“查看”标签页，然后勾选“文件扩展名”选项。如果你使用 Mac，你可以在 Finder 中选择“Finder”菜单，点击“偏好设置”，然后在“高级”标签中勾选“显示所有文件扩展名”。
- 创建JSON文件：创建一个 txt 文件，写入 JSON 内容，然后将后缀名改成 json。当然如果你可以在保存的时候选择需要创建的后缀名，直接保存为 json 格式即可。
