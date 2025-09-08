# Audio Device Repository Client, Angular Edition

Visualizes an audio devices repository by means of Angular. The backend ASP.Net Core Server resides in a repository [audio-device-repo-server](https://github.com/eduarddanziger/audio-device-repo-server/).


## Features

- **Device Dashboard**: View all collected audio devices
- **Device Monitoring**: Track input and output volumes
- **Responsive Design**: Material Design-based UI that works across desktop and mobile devices

## Technology Stack

- **Framework**: Angular 20.0.0
- **UI Components**: Angular Material 20.0.2
- **Styling**: SCSS with Material theming
- **Build Tools**: Angular CLI 20.0.1

## Requirements

- Node.js: 20.19.x or 22.12.x (Angular CLI v20 requires >=20.19 or >=22.12)
- npm: 10+

A `.nvmrc` file is included to pin Node.js 22.12.0.

## Development environment

### Starting ASP.NET Core Web API Server

- Checkout a repo [audio-device-repo-server](https://github.com/eduarddanziger/audio-device-repo-server/) and install dotnet tools

- Start via Terminal using the following command:

```powershell or bash
cd DeviceListServer
dotnet run --launch-profile http
```

### Setup & Installation

If you see an error like "The Angular CLI requires a minimum Node.js version of v20.19 or v22.12", upgrade Node first.

```bash
# Install nvm if you don't have it
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# Restart your terminal so that nvm is available, then:
cd device-repo-angular-spa
nvm install 22.12.0
nvm use
node -v  # should be v22.12.0
npm -v   # should be 10+
```

Install dependencies and run:

```bash
# From project root
git clone [repository-url]
cd device-repo-angular-spa
npm ci
npm start  # or: npx ng serve
```
