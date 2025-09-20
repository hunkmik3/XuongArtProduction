# 🎬 XƯỞNG ART PRODUCTION

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.2.6-purple?style=for-the-badge&logo=framer)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.10-38B2AC?style=for-the-badge&logo=tailwind-css)
![Strapi](https://img.shields.io/badge/Strapi-CMS-2F2E8B?style=for-the-badge&logo=strapi)

> **Website portfolio chuyên nghiệp cho studio sản xuất video: TVC, Music Video, Documentary**

## ✨ Tính năng nổi bật

### 🎯 Frontend (Next.js)
- **Hero Section** với video background autoplay và animation chữ clip-mask
- **Featured Projects** với masonry grid và hover preview video
- **Custom Cursor** với hiệu ứng hover động
- **Page Transitions** mượt mà với Framer Motion
- **Responsive Design** tối ưu cho mọi thiết bị
- **Scroll Animations** với reveal effects

### 🎨 Design System
- **Màu sắc chủ đạo**: 
  - Đỏ: `#D0232E` (Primary)
  - Xanh: `#00673A` (Secondary) 
  - Vàng: `#FFD200` (Accent)
- **Typography**: SF Pro Display, Gilroy, iCiel Samsung
- **Modern UI/UX** với gradient overlays và smooth transitions

### 🔧 Backend (Strapi CMS)
- **Content Management** cho projects, articles, services
- **Media Library** quản lý video và hình ảnh
- **API Endpoints** RESTful cho frontend
- **Custom Lifecycles** cho project management

## 🚀 Cài đặt và chạy dự án

### Yêu cầu hệ thống
- Node.js >= 18.0.0
- npm hoặc yarn
- Git

### 1. Clone repository
```bash
git clone https://github.com/hunkmik3/XuongArtProduction.git
cd XuongArtProduction
```

### 2. Cài đặt dependencies

**Frontend:**
```bash
npm install
```

**Backend (Strapi):**
```bash
cd backend
npm install
```

### 3. Chạy dự án

**Development mode:**
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
cd backend
npm run develop
```

**Production build:**
```bash
# Build frontend
npm run build
npm start

# Build backend
cd backend
npm run build
npm start
```

## 📁 Cấu trúc dự án

```
XuongArtProduction/
├── app/                          # Next.js App Router
│   ├── (site)/                   # Public pages
│   │   ├── about/               # Giới thiệu
│   │   ├── works/               # Portfolio projects
│   │   ├── services/            # Dịch vụ
│   │   ├── journal/             # Blog/Articles
│   │   └── contact/             # Liên hệ
│   ├── components/              # Reusable components
│   │   ├── ClientMotion.js      # Framer Motion wrappers
│   │   ├── VideoPlayer.js       # Video player component
│   │   └── MotionProvider.js    # Motion context
│   ├── lib/                     # Utilities
│   │   └── strapi.js           # Strapi API client
│   └── globals.css             # Global styles
├── backend/                     # Strapi CMS
│   ├── src/
│   │   ├── api/                # API endpoints
│   │   │   ├── project/        # Project management
│   │   │   ├── article/        # Blog articles
│   │   │   ├── service/        # Services
│   │   │   └── team-member/    # Team members
│   │   ├── components/         # Strapi components
│   │   └── extensions/         # Custom extensions
│   └── config/                 # Strapi configuration
├── public/                     # Static assets
│   ├── images/                # Images
│   └── videos/                # Video files
└── src/                       # Legacy React components (if any)
```

## 🎬 Tính năng chi tiết

### Hero Section
- Video background với autoplay, muted, loop
- Typography animation với clip-mask effect
- Scroll indicator với animation
- Sticky header khi scroll

### Project Showcase
- Masonry grid layout
- Hover video preview
- Category tags
- Smooth scroll animations
- Custom cursor effects

### Content Management
- **Projects**: Quản lý portfolio với video, hình ảnh, metadata
- **Articles**: Blog system với rich text editor
- **Services**: Danh sách dịch vụ
- **Team Members**: Thông tin team

## 🛠️ Công nghệ sử dụng

### Frontend
- **Next.js 14** - React framework với App Router
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **HLS.js** - Video streaming

### Backend
- **Strapi** - Headless CMS
- **Node.js** - Runtime environment
- **SQLite/PostgreSQL** - Database

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📱 Responsive Design

- **Mobile First** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** interactions
- **Optimized images** với Next.js Image component

## 🎨 Customization

### Màu sắc
Chỉnh sửa trong `app/globals.css`:
```css
:root {
  --primary: #D0232E;
  --secondary: #00673A;
  --accent: #FFD200;
}
```

### Fonts
Cập nhật trong `app/globals.css`:
```css
:root {
  --font-heading: "SF Pro Display", "Gilroy", sans-serif;
  --font-body: "SF Pro Display", sans-serif;
  --font-accent: "iCiel Samsung", "Sharp Sans", sans-serif;
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Deploy to Netlify
# Upload dist folder to Netlify
```

### Strapi Backend
- **Railway**: Easy deployment với database
- **Heroku**: Với PostgreSQL addon
- **DigitalOcean**: VPS deployment

## 📄 API Documentation

### Endpoints
- `GET /api/projects` - Lấy danh sách projects
- `GET /api/projects/:id` - Lấy project theo ID
- `GET /api/articles` - Lấy danh sách articles
- `GET /api/services` - Lấy danh sách services
- `GET /api/team-members` - Lấy danh sách team members

### Query Parameters
- `populate=*` - Populate all relations
- `filters[category][$eq]=TVC` - Filter by category
- `sort=createdAt:desc` - Sort by creation date

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📞 Liên hệ

- **Email**: hungmai16.work@gmail.com
- **GitHub**: [@hunkmik3](https://github.com/hunkmik3)
- **Website**: [Xưởng Art Production](https://github.com/hunkmik3/XuongArtProduction)

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Strapi](https://strapi.io/) - Headless CMS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

---

**Made with ❤️ by [hunkmik3](https://github.com/hunkmik3)**