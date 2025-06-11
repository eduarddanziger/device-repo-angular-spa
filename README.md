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

## Development environment

### Starting ASP.NET Core Web API Server

- Checkout a repo [audio-device-repo-server](https://github.com/eduarddanziger/audio-device-repo-server/) and install dotnet tools

- Start via Terminal using the following command:

```powershell or bash
cd DeviceListServer
dotnet run --launch-profile http
```

### Installation
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Roll up repository client from the source code and compile:
```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
ng serve

```
