UDT REACT TEST <br>
Câu hỏi 1:<br>
-	Giải thích quy trình biên dịch của Typescript<br>
1. Phân tích mã nguồn (Lexical Analysis)<br>
+ TypeScript nhận mã nguồn và tách nó thành các token - là các thành phần nhỏ nhất trong mã (ví dụ: từ khóa, biến, dấu câu, v.v.).<br>
+ Token giúp trình biên dịch hiểu được cấu trúc của mã.<br>
2. Phân tích cú pháp (Parsing)<br>
+ Các token được sắp xếp lại thành một cấu trúc cây gọi là AST (Abstract Syntax Tree). Cây này biểu diễn cấu trúc cú pháp của mã TypeScript.<br>
+ Mỗi nút trên cây biểu diễn một thành phần cú pháp của mã (như hàm, biến, lệnh điều kiện).<br>
3. Kiểm tra kiểu (Type Checking)<br>
+ TypeScript kiểm tra loại (type) của các biến, hàm, tham số, v.v. để đảm bảo tính đúng đắn về kiểu dữ liệu.<br>
+ Nếu có lỗi về kiểu dữ liệu, TypeScript sẽ báo lỗi trong bước này.<br>
+ Đây là bước giúp phát hiện các lỗi tiềm năng trước khi chuyển đổi sang JavaScript.<br>
4. Chuyển đổi mã (Transformation)<br>
+ TypeScript chuyển đổi AST thành mã JavaScript tương đương, loại bỏ các thông tin đặc trưng của TypeScript như kiểu dữ liệu (types) vì JavaScript không hỗ trợ chúng.<br>
+ TypeScript có thể chuyển đổi sang nhiều phiên bản JavaScript khác nhau (ES5, ES6, ESNext...) dựa trên cấu hình trong file tsconfig.json.<br>
5. Tối ưu hóa mã (Optimization)<br>
+ TypeScript tiến hành các tối ưu hóa cơ bản như loại bỏ các mã không cần thiết (nếu có).<br>
+ Một số tối ưu hóa sẽ giúp mã JavaScript chạy hiệu quả hơn mà không làm thay đổi chức năng của mã.<br>
6. Xuất ra mã JavaScript (Emitting Output)<br>
+ Sau khi hoàn thành các bước trên, trình biên dịch tạo ra các file JavaScript (.js) từ file TypeScript (.ts).<br>
+ Các file JavaScript này có thể chạy được trên trình duyệt hoặc môi trường Node.js.<br>
-	Thiết lập một dự án render phía server (Server-Side Rendering) sử dụng React.js và Webpack để hiển thị giao diện người dùng từ đầu<br>
Cấu trúc thư mục của dự án bao gồm:<br>
![image](https://github.com/user-attachments/assets/2dcd9a84-37f5-453f-b4fc-9f71c751e503)

+ tsconfig.json: file cấu hình của TypeScript. 
+ webpack.config.cjs: file cấu hình cho một client và một server
+ .babelrc: file cấu hình của Babel
+ src: chứa mã nguồn 
+ client/index.tsx: file entry point của ứng dụng phía client
+ client/index.html: file HTML cơ bản của ứng dụng
+ server/server.tsx: file server entry point trong Node.js cho ứng dụng SSR
+ client/App.tsx: file chứa component chính của ứng dụng React
-	Khi người dùng truy cập vào địa chỉ http://localhost:3000, giao diện hiển thị thẻ h1 với nội dung "Hello World"
 ![image](https://github.com/user-attachments/assets/77b39c81-29f1-4a32-a0c5-cb420e50215c)

Câu hỏi 2: <br>
-	Thiết lập cấu trúc dự án theo các best practices cho quản lý state và routing <br>
 ![image](https://github.com/user-attachments/assets/0cda9d9d-82b8-4237-bb7c-e6ecf452f9fa) <br>
![image](https://github.com/user-attachments/assets/38e1e57d-62bb-4bc7-b424-7f46c6ac32f2)
 
+ Thư mục redux: chứa các file thiết lập Redux
+ Thư mục actions: chứa các tệp action - các hàm trả về action với type và payload
+ Tệp store.js: nơi tạo store cho redux, kho lưu trữ toàn bộ state của ứng dụng
+ Thư mục reducers: chứa các tệp reducer - chịu trách nhiệm xử lý state dựa trên action được gửi đến
+ Thư mục routes: Chứa các tệp định tuyến để tổ chức và quản lý các đường dẫn trong ứng dụng
+ Tệp App.tsx: thành phần chính điều khiển việc định tuyến của toàn bộ ứng dụng
Thiết lập Redux store
 ![image](https://github.com/user-attachments/assets/9442139c-88da-4bde-b13b-78e9f4a40a14)

Thiết lập Routing
 ![image](https://github.com/user-attachments/assets/6b05589b-a8cc-479d-bae9-0a7dfede0200)

-	Thiết lập các công cụ hỗ trợ tiêu chuẩn để cải thiện trải nghiệm phát triển
+ Cài đặt các gói liên quan đến ESLint và Prettier
 ![image](https://github.com/user-attachments/assets/400bd013-6e1d-420c-bff1-66a53389c91c)

+ Tạo file “eslint.config.mjs”
 ![image](https://github.com/user-attachments/assets/c09af72d-c777-45f0-8673-c604b697eeb6)
![image](https://github.com/user-attachments/assets/92a32bb0-05c3-45fe-8c87-d4888c569b7d)
 
+ Thiết lập Husky và Lint-staged
 ![image](https://github.com/user-attachments/assets/a4e94748-68ec-498b-876a-b39fbb9a687c)
![image](https://github.com/user-attachments/assets/1ee50bf6-a342-48c4-a557-e1c725cf42e0)

+ Cấu hình link-staged trong package.json
 ![image](https://github.com/user-attachments/assets/8501f178-1280-4359-a179-3450275eb8cd)

+ Thiết lập script cho pre-commit bằng Husky
 
-	Thiết lập môi trường kiểm thử đơn vị (unit test) sử dụng Jest
+ Cài đặt Jest cho Typescript
 ![image](https://github.com/user-attachments/assets/7ca5aad4-5b09-412b-9201-3b73d319a0ce)

+ Tệp cấu hình Jest
![image](https://github.com/user-attachments/assets/49c9f587-fda1-43ab-844c-9decbec92a8b)

Câu hỏi 3:
Sơ đồ block component:
 ![image](https://github.com/user-attachments/assets/2e3de080-bd87-4290-8880-03f80bb90278)

Calculator UI khi chạy chương trình:
 ![image](https://github.com/user-attachments/assets/168e97ce-8098-4d69-8c37-35e7a2bb0640) <br>
 ![image](https://github.com/user-attachments/assets/9833ded3-b0ca-422e-82ec-493765c984c3)

Code SCSS:
![image](https://github.com/user-attachments/assets/808f30af-4e90-4498-8028-8010422373fc)
![image](https://github.com/user-attachments/assets/7d1fb452-63dd-4d67-b989-5a670a56ff88) 
   	 
Câu hỏi 4:
Link demo: https://www.loom.com/share/5e9e80484a7c4179a2572fcf209bc0ef <br>
Câu hỏi 5:
Link demo: https://www.loom.com/share/5e9e80484a7c4179a2572fcf209bc0ef


