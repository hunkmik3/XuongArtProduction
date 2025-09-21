# 🎨 Hướng dẫn thêm Font vào Website

## 📁 Cấu trúc thư mục font

```
public/
└── fonts/
    ├── SF-Pro-Display-Regular.woff2
    ├── SF-Pro-Display-Medium.woff2
    ├── SF-Pro-Display-Semibold.woff2
    ├── SF-Pro-Display-Bold.woff2
    ├── Gilroy-Regular.woff2
    ├── Gilroy-Medium.woff2
    ├── Gilroy-Semibold.woff2
    ├── Gilroy-Bold.woff2
    ├── iCiel-Samsung-Regular.woff2
    ├── iCiel-Samsung-Medium.woff2
    └── iCiel-Samsung-Bold.woff2
```

## 🚀 Các bước thực hiện

### 1. Copy file font
Copy tất cả file font của bạn vào thư mục `public/fonts/`

### 2. Đổi tên file (nếu cần)
Đảm bảo tên file khớp với cấu hình trong `app/lib/fonts.js`:
- SF Pro Display: `SF-Pro-Display-*.woff2`
- Gilroy: `Gilroy-*.woff2`
- iCiel Samsung: `iCiel-Samsung-*.woff2`

### 3. Cập nhật cấu hình (nếu có font khác)
Nếu bạn có font khác, cập nhật file `app/lib/fonts.js`:

```javascript
export const yourFont = localFont({
  src: [
    {
      path: '../../public/fonts/YourFont-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    // Thêm các weight khác...
  ],
  variable: '--font-your-font',
  display: 'swap',
});
```

### 4. Sử dụng font trong CSS
```css
.your-class {
  font-family: var(--font-your-font);
}
```

### 5. Sử dụng font trong Tailwind
```html
<h1 class="font-heading">Tiêu đề</h1>
<p class="font-body">Nội dung</p>
<span class="font-accent">Accent text</span>
```

## 🎯 Font hiện tại được sử dụng

- **Heading**: SF Pro Display (cho tiêu đề chính)
- **Body**: Gilroy (cho nội dung chính)
- **Accent**: iCiel Samsung (cho text đặc biệt)

## 🔧 Troubleshooting

### Font không hiển thị?
1. Kiểm tra đường dẫn file font
2. Kiểm tra tên file có khớp không
3. Kiểm tra format file (woff2 được khuyến nghị)
4. Kiểm tra console browser có lỗi không

### Font load chậm?
1. Sử dụng `display: 'swap'` (đã có)
2. Optimize file font (giảm kích thước)
3. Sử dụng font subsetting

## 📝 Lưu ý

- File font nên ở định dạng `.woff2` để tối ưu performance
- Đặt file font trong thư mục `public/fonts/`
- Tên file phải khớp với cấu hình trong `fonts.js`
- Test trên nhiều browser khác nhau
