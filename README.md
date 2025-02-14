# User Management System

A modern and responsive user management system built with React, featuring authentication, dark mode, and a clean UI design.

![Project Preview](preview.gif)

## 🌟 Features

- **Authentication System**

  - User registration with validation
  - Login/Logout functionality
  - Protected routes
  - Form validation using Zod
  - Persistent login state

- **Dark Mode**

  - System preference detection
  - Manual toggle option
  - Persistent theme preference
  - Smooth transitions

- **User Management**

  - User list view
  - User profile display
  - Responsive data tables
  - Loading states

- **Modern UI/UX**
  - Clean and minimalist design
  - Responsive layouts
  - Interactive components
  - Error handling
  - Loading states
  - Toast notifications

## 🚀 Technologies

- **Frontend**

  - React 18
  - React Router v6
  - TailwindCSS
  - React Hook Form
  - Zod Validation
  - Axios

- **Backend**
  - JSON Server

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/mhdix/user-registration.git
```

2. Install dependencies:

```bash
cd user-management-system
npm install
OR npm i
```

3. Start JSON Server:

```bash
npm run server
```

4. Start the development server:

```bash
npm run dev
```

## 🛠 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3001
```

### JSON Server Setup

Create a `db.json` file in the root directory:

```json
{
  "user": [
    {
      "id": 1,
      "fname": "John",
      "lname": "Doe",
      "email": "john@example.com",
      "password": "password123"
    }
  ]
}
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Home.jsx
│   ├── Navbar.jsx
│   ├── Registration.jsx
│   ├── User.jsx
│   └── UsersList.jsx
├── context/
│   └── ThemeContext.jsx
├── App.jsx
└── main.jsx
```

## 🔒 Authentication Flow

1. User registration:

   - Form validation using Zod
   - Data stored in JSON Server
   - Redirect to login

2. User login:
   - Credentials validation
   - JWT token storage
   - Protected routes

## 🎨 Theme System

The dark mode implementation includes:

- System preference detection
- Manual toggle
- Persistent preference storage
- Smooth transitions
- No FOUC (Flash of Unstyled Content)

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Start JSON Server
npm run server

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test
```

## 📱 Responsive Design

The application is fully responsive and works on:

- Desktop
- Tablet
- Mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Your Name

- GitHub: [@mhdix](https://github.com/mhdix)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JSON Server](https://github.com/typicode/json-server)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://github.com/colinhacks/zod)

## 🐛 Known Issues

Please check the [Issues](https://github.com/yourusername/user-management-system/issues) page for current issues and feature requests.

---

⭐️ If you found this project helpful, please give it a star on GitHub! ⭐️
#   u s e r - r e g i s t r a t i o n 
 
 