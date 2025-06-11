# Contributing to Treasure Coast Getaway

Thank you for your interest in contributing to the Treasure Coast Getaway website! This document provides guidelines and information for contributors.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/treasure-coast-getaway.git
   cd treasure-coast-getaway
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🛠️ Development Guidelines

### Code Style

- **ESLint**: Follow the existing ESLint configuration
- **Prettier**: Code formatting is handled automatically
- **Naming**: Use descriptive variable and function names
- **Comments**: Add comments for complex logic or business rules

### Component Structure

```jsx
// components/YourComponent.jsx
"use client"; // Only if client-side features are needed

import React from 'react';
import { SomeIcon } from 'lucide-react';

const YourComponent = ({ prop1, prop2 }) => {
  return (
    <div className="your-classes">
      {/* Component content */}
    </div>
  );
};

export default YourComponent;
```

### Styling Guidelines

- **Tailwind CSS**: Use Tailwind utility classes
- **Responsive Design**: Always consider mobile-first approach
- **Accessibility**: Include proper ARIA labels and semantic HTML
- **Color Scheme**: Maintain the coastal teal theme (#0D9488)

### Performance Best Practices

- **Next.js Image**: Always use `next/image` for images
- **Lazy Loading**: Implement lazy loading for non-critical content
- **Bundle Size**: Keep bundle size minimal
- **Core Web Vitals**: Optimize for performance metrics

## 📝 Commit Guidelines

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
feat(gallery): add keyboard navigation support
fix(navbar): resolve mobile scroll issue
docs(readme): update installation instructions
style(components): improve responsive spacing
perf(images): optimize gallery loading performance
```

## 🧪 Testing

### Manual Testing Checklist

Before submitting a PR, please test:

- [ ] **Desktop browsers**: Chrome, Firefox, Safari, Edge
- [ ] **Mobile devices**: iOS Safari, Chrome Mobile
- [ ] **Accessibility**: Keyboard navigation, screen readers
- [ ] **Performance**: Page load speed, image optimization
- [ ] **SEO**: Meta tags, structured data
- [ ] **Responsive design**: All breakpoints

### Test Commands

```bash
npm run lint          # Code linting
npm run build         # Build for production
npm run start         # Test production build
```

## 🎨 Design Guidelines

### Visual Design

- **Colors**: Use the teal theme consistently
- **Typography**: Maintain readable font sizes and contrast
- **Spacing**: Follow consistent spacing patterns
- **Images**: Optimize all images before adding

### User Experience

- **Loading States**: Provide feedback during loading
- **Error Handling**: Handle errors gracefully
- **Mobile Experience**: Ensure touch-friendly interactions
- **Accessibility**: Follow WCAG 2.1 AA guidelines

## 📋 Pull Request Process

1. **Update documentation** if you've changed APIs or added features
2. **Test thoroughly** on multiple devices and browsers
3. **Optimize images** and ensure performance isn't degraded
4. **Follow commit message guidelines**
5. **Fill out the PR template** completely

### PR Template

```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Desktop browsers tested
- [ ] Mobile devices tested
- [ ] Accessibility verified
- [ ] Performance checked

## Screenshots
Include screenshots for UI changes

## Additional Notes
Any additional context or notes
```

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Clear description** of the issue
2. **Steps to reproduce** the bug
3. **Expected behavior** vs actual behavior
4. **Browser/device information**
5. **Screenshots** if applicable

### Bug Report Template

```markdown
**Bug Description**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What you expected to happen.

**Screenshots**
Add screenshots to help explain your problem.

**Environment**
- OS: [e.g. iOS]
- Browser: [e.g. chrome, safari]
- Version: [e.g. 22]
```

## 🌟 Feature Requests

We welcome feature requests! Please:

1. **Check existing issues** to avoid duplicates
2. **Describe the feature** clearly
3. **Explain the use case** and benefit
4. **Consider the scope** and complexity

## 🏗️ Project Structure

```
treasure-coast-getaway/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Gallery.jsx       # Gallery component
│   └── Navbar.jsx        # Navigation
├── lib/                  # Utility functions
├── public/               # Static assets
└── docs/                 # Documentation
```

## 🔧 Development Environment

### Required Tools

- **Node.js**: 18.17 or later
- **npm/yarn/pnpm**: Latest version
- **Git**: For version control
- **VS Code**: Recommended editor

### Recommended Extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Bracket Pair Colorizer

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [React Documentation](https://react.dev/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 💬 Communication

- **Issues**: Use GitHub Issues for bugs and feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Email**: Contact treasurecoastpropertyrentals@gmail.com for urgent matters

## 🙏 Recognition

Contributors will be acknowledged in:
- GitHub contributor list
- Project documentation
- Release notes (for significant contributions)

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Treasure Coast Getaway! 🏖️ 