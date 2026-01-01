# @codebayu/nextjs-arch

This is a Boilerplate

A modern **React / Next.js–friendly component & utility library** with a clean, scalable API design.

Built with:

- ⚡ Vite (library mode)
- 🧠 TypeScript (full type safety)
- 🌳 Tree-shakable ES modules

---

## ✨ Features

- **UI Components** via `@codebayu/nextjs-arch/ui`
- **Services & utilities** via `@codebayu/nextjs-arch/service`
- **Scalable API design** (future-proof for large codebases)
- **Optional global styles** (CSS / Tailwind-ready)
- **Next.js, Vite, Webpack compatible**

---

### Example

```tsx
import { Button } from '@codebayu/nextjs-arch/ui';
import { AuthService, OrderService } from '@codebayu/nextjs-arch/service';

function App() {
  // authentication service example
  AuthService.Login();

  // order service example
  OrderService.CreateOrder();

  return <Button>Click Here</Button>;
}
```

---

## 📄 License

MIT © Bayu Setiawan
