# React OIDC Integration Example

<div align="center">
  <h3>🔐 Modern React + OIDC Authentication</h3>
  <p>A production-ready React application with OpenID Connect (OIDC) authentication integration</p>
  
  <p>
    <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Vite-7.3.1-646CFF?style=flat&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/OIDC-OpenID%20Connect-F78C40?style=flat" alt="OIDC" />
  </p>
</div>

---

## 📖 About

This project demonstrates a complete implementation of OIDC authentication in a modern React application using OpenID Connect protocol. Works with any OIDC-compliant provider including **Keycloak**, **Auth0**, **Okta**, **Azure AD**, and more. Built with Vite for optimal performance and developer experience.

### ✨ Key Features

- 🔐 **OIDC Integration** - Full OpenID Connect authentication flow with any provider
- 🌐 **Multi-Provider Support** - Works with Keycloak, Auth0, Okta, Azure AD, and more
- 🔄 **Token Management** - Automatic token refresh and silent renewal
- 🛡️ **Protected Routes** - Route guards with `OidcSecure` wrapper
- 📡 **HTTP Interceptors** - Axios interceptors for automatic token injection
- ⚡ **Vite Build Tool** - Lightning-fast HMR and optimized builds
- 🚀 **React 19** - Latest React with compiler optimizations
- 🎯 **React Router v7** - Modern routing with data APIs

## 📚 Documentation

### Medium Article

For a complete guide and detailed explanation:

**📝 [MEDIUM_ARTICLE_LINK_HERE]**

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **OIDC Provider** - Any OpenID Connect compliant provider:
  - Keycloak (used in this example)
  - Auth0
  - Okta
  - Azure AD / Entra ID
  - Google Identity
  - Or any other OIDC provider

### Installation Steps

**1. Clone the repository**

```bash
git clone https://github.com/emronr/react-oidc-example.git
cd react-oidc-example
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure OIDC Provider**

Edit `src/configs/AuthConfig.js` with your OIDC provider settings:

```javascript
const oidcConfig = {
  client_id: "your-client-id",
  authority: "https://your-oidc-provider/authority-url", // e.g., Keycloak: http://localhost:8080/realms/MyRealm
  redirect_uri: window.location.origin + "/authentication/callback",
  silent_redirect_uri:
    window.location.origin + "/authentication/silent-callback",
  scope: "openid profile email offline_access",
};
```

**4. Start development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 🏗️ Project Structure

```
react-oidc-example/
├── src/
│   ├── configs/
│   │   └── AuthConfig.js              # OIDC configuration
│   ├── hooks/
│   │   └── useAxiosInterceptors.js    # Token injection hook
│   ├── pages/
│   │   ├── AuthTest.jsx               # Authentication status demo
│   │   ├── BackendRequest.jsx         # Protected API call example
│   │   └── Counter.jsx                # Simple counter page
│   ├── routes/
│   │   └── RouteList.jsx              # Application routes
│   ├── App.jsx                         # Main app component
│   ├── main.jsx                        # Application entry point
│   └── index.css                       # Global styles
├── public/                             # Static assets
├── index.html                          # HTML template
├── vite.config.js                      # Vite configuration
├── eslint.config.js                    # ESLint configuration
└── package.json                        # Project dependencies
```

---

## ⚙️ Configuration

### OIDC Provider Setup

This example uses **Keycloak** as the OIDC provider, but you can use any OIDC-compliant provider. Below is the Keycloak setup guide:

#### Keycloak Configuration

**1. Create a Realm**

- Login to Keycloak Admin Console
- Create a new realm (e.g., `MyRealm`)

**2. Create a Client**

- Go to Clients → Create
- Configure the following:

| Setting             | Value                     |
| ------------------- | ------------------------- |
| Client ID           | `test-react-web`          |
| Client Protocol     | `openid-connect`          |
| Access Type         | `public`                  |
| Standard Flow       | Enabled                   |
| Valid Redirect URIs | `http://localhost:5173/*` |
| Web Origins         | `http://localhost:5173`   |
| Admin URL           | `http://localhost:5173`   |

**3. Configure Scopes**
Ensure the following scopes are available:

- `openid`
- `profile`
- `email`
- `offline_access` (for refresh tokens)

### Application Configuration

Update `src/configs/AuthConfig.js` with your OIDC provider details:

**For Keycloak:**

```javascript
const oidcConfig = {
  client_id: "your-client-id",
  authority: "http://your-keycloak-server/realms/your-realm",
  redirect_uri: window.location.origin + "/authentication/callback",
  silent_redirect_uri:
    window.location.origin + "/authentication/silent-callback",
  scope: "openid profile email offline_access",
};
```

**For Auth0:**

```javascript
const oidcConfig = {
  client_id: "your-auth0-client-id",
  authority: "https://your-domain.auth0.com",
  redirect_uri: window.location.origin + "/authentication/callback",
  silent_redirect_uri:
    window.location.origin + "/authentication/silent-callback",
  scope: "openid profile email",
};
```

**For Azure AD:**

```javascript
const oidcConfig = {
  client_id: "your-azure-client-id",
  authority: "https://login.microsoftonline.com/your-tenant-id/v2.0",
  redirect_uri: window.location.origin + "/authentication/callback",
  silent_redirect_uri:
    window.location.origin + "/authentication/silent-callback",
  scope: "openid profile email",
};
```

---

## 💻 Usage Examples

### Protecting Routes

Use `OidcSecure` to protect components:

```jsx
import { OidcSecure } from "@axa-fr/react-oidc";

function ProtectedPage() {
  return (
    <OidcSecure>
      <YourComponent />
    </OidcSecure>
  );
}
```

### Accessing User Information

```jsx
import { useOidcUser } from "@axa-fr/react-oidc";

function UserProfile() {
  const { oidcUser } = useOidcUser();

  return (
    <div>
      <h1>Welcome, {oidcUser.name}</h1>
      <p>Email: {oidcUser.email}</p>
    </div>
  );
}
```

### Accessing Tokens

```jsx
import { useOidc } from "@axa-fr/react-oidc";

function TokenInfo() {
  const { accessToken, refreshToken } = useOidc();

  console.log("Access Token:", accessToken);
  console.log("Refresh Token:", refreshToken);
}
```

### Making Authenticated API Calls

The app uses the `useAxiosInterceptors` hook in `App.jsx` to automatically inject tokens into all Axios requests:

**How it works:**

```jsx
// src/hooks/useAxiosInterceptors.js
import { useOidcAccessToken } from "@axa-fr/react-oidc";

export function useAxiosInterceptors() {
  const { accessToken } = useOidcAccessToken();

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use((config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });

    return () => axios.interceptors.request.eject(requestInterceptor);
  }, [accessToken]);
}
```

**Usage in App.jsx:**

```jsx
import { useAxiosInterceptors } from "./hooks/useAxiosInterceptors";

function App() {
  useAxiosInterceptors(); // This enables automatic token injection
  // ...
}
```

**Making API calls:**

Once the hook is active, all Axios requests will automatically include the Bearer token:

```jsx
import axios from "axios";

async function fetchProtectedData() {
  // Token is automatically added by the interceptor
  const response = await axios.get("http://localhost:8080/api/protected");
  return response.data;
}
```

---

## 📦 Tech Stack

### Core Dependencies

| Package                                                       | Version | Purpose                    |
| ------------------------------------------------------------- | ------- | -------------------------- |
| [@axa-fr/react-oidc](https://github.com/AxaFrance/react-oidc) | ^7.26.3 | OIDC/OAuth2 client library |
| [react](https://react.dev/)                                   | ^19.2.0 | UI framework               |
| [react-dom](https://react.dev/)                               | ^19.2.0 | React DOM renderer         |
| [react-router-dom](https://reactrouter.com/)                  | ^7.13.0 | Client-side routing        |
| [axios](https://axios-http.com/)                              | ^1.13.5 | HTTP client                |

### Dev Dependencies

| Package                                                               | Purpose                     |
| --------------------------------------------------------------------- | --------------------------- |
| [vite](https://vitejs.dev/)                                           | Build tool and dev server   |
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)   | React support for Vite      |
| [eslint](https://eslint.org/)                                         | Code linting                |
| [babel-plugin-react-compiler](https://react.dev/learn/react-compiler) | React compiler optimization |

---

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

---

## 🔒 Security Considerations

- ✅ Tokens are stored securely by the OIDC library
- ✅ Automatic token refresh before expiration
- ✅ Silent token renewal for seamless UX
- ✅ Protected routes require valid authentication
- ✅ CORS properly configured for your OIDC provider
- ✅ PKCE (Proof Key for Code Exchange) support

---

## 🐛 Troubleshooting

### Common Issues

**Issue: Redirect loop**

- Check that redirect URIs in your OIDC provider match exactly
- Verify Web Origins/Allowed Origins are configured in your provider

**Issue: Token not attached to requests**

- Ensure `useAxiosInterceptors()` is called in `App.jsx`
- Verify Axios instance is properly configured

**Issue: CORS errors**

- Add your app URL to Allowed Origins in your OIDC provider settings

**Issue: Authority URL not found**

- Verify your authority URL is correct and accessible
- Check that your OIDC provider's discovery endpoint is available (`.well-known/openid-configuration`)

---

## 📝 License

This project is licensed under the **MIT License**.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests

Please ensure all PRs include appropriate tests and documentation.

---

## 👤 Author

**Your Name**

- 🌐 GitHub: [@emronr](https://github.com/emronr)
- ✍️ Medium: [@emronr](https://medium.com/@emronr)
- 💼 LinkedIn: [@emre-onur](https://www.linkedin.com/in/emre-onur/)

---

<div align="center">
  <p>Made with ❤️ using React and OIDC</p>
  <p>© 2026 - Present</p>
</div>
