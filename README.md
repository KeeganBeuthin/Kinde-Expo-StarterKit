# Kinde Expo Starter Kit

This starter kit helps you quickly integrate Kinde authentication into your Expo application.

## Features

- Complete authentication flow (login, register, logout)
- User profile display
- Dashboard with user information
- Topics explorer
- Dark/light mode support
- Matches the style of the Next.js starter kit

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Expo CLI
- Kinde account and application

### Installation

1. Clone this repository:
   ```
   git clone https://github.com/your-username/kinde-expo-starter-kit.git
   cd kinde-expo-starter-kit
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with your Kinde credentials:
   ```
   KINDE_DOMAIN=https://your-app.kinde.com
   KINDE_CLIENT_ID=your-client-id
   ```

4. Configure your Kinde application:
   - Go to your Kinde Dashboard > Settings > Applications > [Your app] > View details
   - Add the following callback URLs:
     - `exp://localhost:8081/--/`
     - `exp://192.168.X.X:8081/--/` (replace with your local IP)

5. Start the application:
   ```
   npx expo start
   ```

## Project Structure

- `/components` - Reusable UI components
- `/screens` - Main screen components
- `/navigation` - Navigation configuration
- `/assets` - Images and other static assets

## Environment Variables

- `KINDE_DOMAIN` - Your Kinde domain (e.g., https://your-app.kinde.com)
- `KINDE_CLIENT_ID` - Your Kinde client ID

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Start the app on an Android emulator/device
- `npm run ios` - Start the app on an iOS simulator/device
- `npm run web` - Start the app in a web browser

## Kinde Authentication

This starter kit uses the `@kinde/expo` package to handle authentication. You can use the following methods:

```javascript
import { useKindeAuth } from "@kinde/expo";

// In your component
const { login, register, logout, isAuthenticated } = useKindeAuth();

// Sign in
await login({});

// Register
await register({});

// Sign out
await logout({ revokeToken: true });
```

## Additional Utilities

For accessing user data and permissions:

```javascript
import { 
  getUserProfile, 
  getRoles, 
  getPermissions 
} from "@kinde/expo/utils";

// Get user profile
const profile = await getUserProfile();

// Get user roles
const roles = await getRoles();

// Get user permissions
const permissions = await getPermissions();
```

## License

MIT