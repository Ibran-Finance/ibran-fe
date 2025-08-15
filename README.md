# IBRAN - Permissionless Lending Protocol

A decentralized lending protocol built with Next.js, featuring Web3 integration and Telegram Mini App support.

## Features

- 🏦 DeFi Lending & Borrowing
- 💱 Token Swapping
- 📊 Real-time Analytics
- 🔗 Multi-chain Support
- 📱 Mobile Responsive
- 🤖 Telegram Mini App Ready

## Telegram Mini App Setup

This project is configured to work as a Telegram Mini App. Follow these steps to deploy:

### 1. Build for Telegram Mini App

```bash
npm run build:telegram
# or
pnpm build:telegram
```

### 2. Deploy to Static Hosting

Deploy the `out` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

### 3. Configure Bot Father

1. Message [@BotFather](https://t.me/botfather) on Telegram
2. Create a new bot or select existing bot
3. Use `/newapp` command
4. Select your bot
5. Enter app title: "IBRAN DeFi"
6. Enter short description: "Permissionless Lending Protocol"
7. Upload app icon (use `/mbelbluelogo.png`)
8. Enter your deployed app URL
9. Set up menu button if needed

### 4. Mini App Features

The app includes:
- ✅ Telegram Web App SDK integration
- ✅ Responsive design for mobile
- ✅ Dark/Light theme support
- ✅ Wallet connection
- ✅ DeFi operations

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Build for Telegram Mini App
pnpm build:telegram
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_BOT_TOKEN=your_telegram_bot_token
NEXT_PUBLIC_APP_URL=your_deployed_app_url
```

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Web3**: Wagmi, RainbowKit, Viem
- **UI**: Radix UI, Framer Motion
- **Telegram**: Telegram Web App SDK

## License

MIT
# ibran-fe
