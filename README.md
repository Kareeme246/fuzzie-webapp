# Fuzzie Web Application Project

Welcome to my web app project! This repository is a showcase of my experience with various newer web technologies. 
**This project is meant solely for learning purposes and is not intended to be used as a fully functioning SaaS product.** 
It is based off of the following video: but includes some major and minor deviations and functionality extensions based on my taste.

## 🚀 Project Overview

This app was built using modern web technologies, with the goal of demonstrating my ability to solve real-world problems with full-stack development. 
The project is not currently deployed, but you can watch a complete walkthrough of the app in the video below.

Feature Video Walkthrough: 

https://github.com/user-attachments/assets/21019282-341b-47e5-a56d-5c5617a988fa


## 🛠 Technologies Used

1. **[Next.js](https://nextjs.org/)** - Framework for the base app and routing.
2. **[Prisma](https://www.prisma.io/)** & **[NeonDB](https://neon.tech/)** - ORM and database for efficient data management.
3. **[UploadCare](https://uploadcare.com/)** - For profile picture and document uploads.
4. **[Clerk](https://clerk.dev/)** - Manages authentication and user session handling.
5. **[ngrok](https://ngrok.com/)** - Used to expose the local server and handle webhooks with a public endpoint.
6. **[React Flow](https://reactflow.dev/)** - Node-based editor for visualizing workflows.
7. **[uuid](https://www.npmjs.com/package/uuid)** - Generates unique IDs for React Flow nodes.
8. **[Zustand](https://zustand-demo.pmnd.rs/)** - State management tool for the app.
9. **[axios](https://axios-http.com/)** - Handles external API calls.
10. **[Google APIs](https://developers.google.com/)** - Used for various Google Cloud services.
11. **[Notion API](https://developers.notion.com/)** - Integrates with Notion for managing content.
13. **[Slack Developer API](https://api.slack.com/)** - For Slack app and integration support.
14. **[Discord Developer API](https://discord.com/developers/docs/intro)** - Adds Discord bot features and integrations.
15. **[Notion Developer API](https://developers.notion.com/)** - Manages content and database interactions with Notion.
16. **[Stripe API](https://stripe.com/docs/api)** - Integration for handling payments within the application.

## 🔑 Key Features

- **Authentication**: Secure user sign-up and login using Clerk.
- **Node-based Editor**: Visualize workflows with React Flow and easily manage them with UUIDs.
- **File Upload**: Upload and manage profile pictures and other documents through UploadCare.
- **API Integration**: Data fetched via Notion, Google Cloud APIs, Slack API, Discord API, and Stripe API, some managed through axios.
- **Database Management**: Prisma with Neondb for seamless database interactions.
- **Payment Integration**: Stripe API is used to handle payments.
- **Webhook Management**: Webhooks for APIs using ngrok to expose local servers publicly.

## 📂 Project Structure

- `/app` - Handles routing and page components.
- `/components` - Reusable components across the app.
- `/hooks` - Zustand state management and custom hooks.
- `/lib` - Utility functions, constants, and type definitions
- `/prisma` - Manages database schema
- `/providers` - Providers for data management
- `/public` - Image/SVG assets


## 📝 Setup Instructions

### Important Notes:
- **This project is intended for learning purposes only and is not a fully functioning SaaS product**.
- This project is not intended to be run locally as certain APIs require a public endpoint. You will need **ngrok** (or similar tool) to create a public endpoint for these APIs to interact with the app.
- The `.env` file is not included and thus this project is insuitable for local setup.
