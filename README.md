# Roofing Website Development

A modern, responsive Next.js website for roofing services built with TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI)
- **Deployment**: Vercel
- **Package Manager**: pnpm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **pnpm** (v8 or higher) - Install with `npm install -g pnpm`

## 🛠️ Local Development Setup

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 3. Build for Production

```bash
pnpm build
```

### 4. Start Production Server

```bash
pnpm start
```

### 5. Run Linting

```bash
pnpm lint
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── leistungen/        # Services pages
│   ├── kontakt/           # Contact page
│   ├── ueber-uns/         # About us page
│   └── ...
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Header component
│   ├── footer.tsx        # Footer component
│   └── ...
├── public/               # Static assets
├── lib/                  # Utility functions
└── hooks/                # Custom React hooks
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint to check code quality

## 🚀 Deployment

### GitHub Setup

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new repository
   - Copy the repository URL

3. **Connect Local Repository to GitHub**:
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```

### Vercel Deployment

#### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**: Ensure your code is pushed to GitHub

2. **Import Project on Vercel**:
   - Go to [Vercel](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js

3. **Configure Build Settings** (usually auto-detected):
   - Framework Preset: Next.js
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`

4. **Deploy**: Click "Deploy" and wait for the build to complete

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   pnpm add -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Environment Variables

If you need environment variables:

1. **Local Development**: Create a `.env.local` file in the root directory
2. **Vercel**: Add environment variables in the Vercel dashboard under Project Settings → Environment Variables

## 📝 Code Quality

This project uses ESLint for code quality and consistency:

- **ESLint**: Configured with Next.js recommended rules
- **TypeScript**: Strict type checking enabled
- **Formatting**: Consider adding Prettier for consistent code formatting

## 🔍 Troubleshooting

### Common Issues

1. **Port Already in Use**:
   ```bash
   # Kill process on port 3000 (Windows)
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

2. **Dependencies Issues**:
   ```bash
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

3. **Build Errors**:
   - Check TypeScript errors: `pnpm build`
   - Check ESLint errors: `pnpm lint`
   - Ensure all environment variables are set

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## 📄 License

This project is private and proprietary.
