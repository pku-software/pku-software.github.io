# API 详细文档

API 部署网址：`http://docman.lcpu.dev`

## 获取网页标题

- API地址: `/title/{URL}`
- 请求方法: `GET`
- 参数:
 	- URL (string) - URL-encoded 的网页地址
 - 响应:
	- 200 OK: Successfully retrieved the title.
	```json
	{
	  "title": "Example Title"
	}
	```
 	- 400 Bad Request: Invalid URL format.
  	- 500 Internal Server Error: An internal error occurred.
- 例子:
	- 获取`www.pytorch.org`的标题
```c++
auto url = "www.pytorch.org";
auto result = cli.Get("/title/" + encodeUriComponent(url));
std::cout << result->body << std::endl;
```

## 通过 ISBN 获取书籍信息

- API地址: `/isbn/{ISBN}`
- 请求方法: `GET`
- 参数:
	- ISBN (string) - URL-encoded ISBN
- 响应:
	- 200 OK: Successfully retrieved book information.
	```json
	{
	  "authors": "Author One, Author Two",
	  "title": "Book Title",
	  "publisher": "Publisher Name",
	  "year": "Year of Publication"
	}
	```
	- 400 Bad Request: Invalid ISBN format.
	- 500 Internal Server Error: An internal error occurred.
- 例子:
	- 获取`9780134092669`的书籍信息：
```c++
auto isbn = "9780134092669";
auto result = cli.Get("/isbn/" + encodeUriComponent(isbn));
std::cout << result->body << std::endl;
```	
