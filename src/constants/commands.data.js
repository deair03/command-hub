export const commands = [
{
    id: 1,
    title: "docker run",
    description: "Run a command in a new container",
    command: "docker run -it --rm ubuntu /bin/bash"

},
{
    id: 2,
    title: "docker build",
    description: "Build an image from a Dockerfile",
    command: "docker build -t my-app"

},
{
    id: 3,
    title: "docker push",
    description: "Push an image to a registry",
    command: "docker push my-app:latest"

},
{
    id: 4,
    title: "docker pull",
    description: "Pull an image from a registry",
    command: "docker pull my-app:latest"

},
{
    id: 5,
    title: "docker stop",
    description: "Stop one or more running containers",
    command: "docker stop my-container"

},
{
    id:6,
    title: "docker rm",
    description: "Remove one or more containers",
    command: "docker rm my-container"

},
{
    id: 7,
    title: "Create React App",
    description: "Create a new React application",
    command: "npx create-react-app my-app"
  },
  {
    id: 8,
    title: "Start Development Server",
    description: "Start the React development server",
    command: "npm start"
  },
  {
    id: 9,
    title: "Build for Production",
    description: "Build the app for production",
    command: "npm run build"
  },
  {
    id: 10,
    title: "Test",
    description: "Run tests using Jest",
    command: "npm test"
  },
  {
    id: 11,
    title: "Eject",
    description: "Eject the app from create-react-app",
    command: "npm run eject"
  },
  {
    id: 12,
    title: "Create Angular App",
    description: "Create a new Angular application",
    command: "ng new my-app"
  },
  {
    id: 13,
    title: "Serve",
    description: "Serve the application",
    command: "ng serve"
  },
  {
    id: 14,
    title: "Build",
    description: "Build the project",
    command: "ng build"
  },
  {
    id: 15,
    title: "Generate Component",
    description: "Generate a new component",
    command: "ng generate component my-component"
  },
  {
    id: 16,
    title: "Run Tests",
    description: "Run unit tests",
    command: "ng test"
  }
]

