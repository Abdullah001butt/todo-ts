# Modern Todo App 📝

A beautiful, modern, and fully responsive Todo application built with React, TypeScript, and Tailwind CSS. Features a sleek glassmorphism design with smooth animations and an intuitive user experience.


![Screenshot 2025-06-11 152606](https://github.com/user-attachments/assets/ff39d97a-6d32-4a17-a3a8-be9f3e81edd2)


## ✨ Features

### 🎨 **Modern Design**
- **Glassmorphism UI** with backdrop blur effects
- **Gradient backgrounds** and smooth transitions
- **Responsive design** that works on all devices
- **Dark theme** with purple/pink gradient aesthetics

### 📋 **Todo Management**
- ✅ Add new tasks with Enter key or button click
- 🔄 Toggle task completion status
- 🗑️ Delete tasks with confirmation
- 📊 Progress tracking with visual progress bar
- 📈 Task statistics (completed vs total)

### 🚀 **User Experience**
- **Keyboard shortcuts** (Enter to add tasks)
- **Smooth animations** for all interactions
- **Hover effects** and visual feedback
- **Touch-friendly** interface for mobile devices
- **Accessibility features** with proper ARIA labels

### 📱 **Responsive Design**
- **Mobile-first** approach
- **Tablet and desktop** optimized layouts
- **Flexible grid system** that adapts to screen size
- **Touch-optimized** buttons and interactions

## 🛠️ Tech Stack

- **React 18+** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icon library
- **Vite** - Fast build tool and dev server

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/modern-todo-app.git
```

2. **Navigate to project directory**
```bash
cd modern-todo-app
```

3. **Install dependencies**
```bash
npm install
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The app will automatically reload when you make changes

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Todo.tsx          # Individual todo item component
│   ├── TodoApp.tsx       # Main todo application logic
├── App.tsx               # Root application component
├── main.tsx             # Application entry point
├── index.css            # Global styles and Tailwind imports
└── vite-env.d.ts        # Vite type definitions
```

## 🎯 Component Overview

### `TodoApp.tsx`
- Main application logic and state management
- Handles adding, completing, and deleting todos
- Manages input state and keyboard interactions
- Displays progress statistics and empty states

### `Todo.tsx`
- Individual todo item component
- Handles completion toggle and deletion
- Responsive design with hover effects
- Accessibility features and visual feedback

### `App.tsx`
- Root component with gradient background
- Wraps the main TodoApp component

## 🎨 Design Features

### Color Palette
- **Primary**: Purple to Pink gradient (`from-purple-500 to-pink-500`)
- **Background**: Indigo to Pink gradient (`from-indigo-900 via-purple-900 to-pink-900`)
- **Glass Effect**: White with 10% opacity and backdrop blur
- **Accents**: Green for completion, Red for deletion

### Typography
- **Headings**: Bold, modern font weights
- **Body Text**: Clean, readable typography
- **Responsive**: Scales appropriately on all devices

### Animations
- **Slide-in** animations for new todos
- **Smooth transitions** for all state changes
- **Hover effects** with scale and color changes
- **Progress bar** animations

## 🔧 Customization

### Changing Colors
Edit the Tailwind classes in the components to customize the color scheme:

```typescript
// Example: Change primary gradient
className="bg-gradient-to-r from-blue-500 to-green-500"
```

### Adding New Features
The app is built with modularity in mind. You can easily extend it by:
- Adding new todo properties (priority, due date, categories)
- Implementing local storage persistence
- Adding drag-and-drop reordering
- Creating todo categories or tags

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Follow TypeScript best practices
2. Use Tailwind CSS for styling
3. Ensure responsive design
4. Add proper type definitions
5. Test on multiple devices

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **React Icons** for the beautiful icon library
- **Vite** for the fast build tool

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Contact the maintainers

---

**Made with ❤️ and modern web technologies**

*Happy coding! 🚀*
