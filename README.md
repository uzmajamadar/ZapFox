
# ⚡ ZapFox

**ZapFox** is a modern, scalable SaaS automation platform built for agencies, businesses, and startups to **build, automate, and manage multi-tenant websites and cross-platform workflows** with ease.

> 🧠 Inspired by platforms like Zapier and Integromat — but built with developers and non-tech users in mind.

---
## 📸 Screenshots

![ZapFox LandingPage](https://github.com/user-attachments/assets/5b04b6c6-4290-4482-b75c-2c1158285110)
![ZapFox LandingPage](https://github.com/user-attachments/assets/34413516-6b2b-4bf2-b59b-7aadef636870)
<h2 align="center">Landing Page</h2>

![Setting](https://github.com/user-attachments/assets/70a8304b-809b-42f7-bf68-1a0c4b0a919d)
<h2 align="center">Setting</h2>


![Dashboard](https://github.com/user-attachments/assets/3845935a-2ddf-46cb-9225-c8ad6a5e6da2)
<h2 align="center">Dashboard</h2>


![Connection](https://github.com/user-attachments/assets/532e0e86-f94d-49c6-8389-aa5e502fc1eb)
![Connection](https://github.com/user-attachments/assets/3e52bd66-9580-4bd9-a23a-646dc7cbfbc8)
<h2 align="center">Connection</h2>


![Workflow](https://github.com/user-attachments/assets/22ea4fd4-1245-4aad-81ee-2c26b924e130)
<h2 align="center">Workflow</h2>


## 🚀 Key Features


- 🧩 **Drag-and-drop Workflow Builder** – Intuitive interface using React Flow
- 🌐 **Multivendor B2B2B SaaS Support** – Agencies & sub-accounts with role-based access
- 🔄 **Real-time Workflow Automation** – Event-based triggers & instant execution
- 🏗️ **Unlimited Funnel Hosting** – Deploy as many workflows & sites as you want
- 👥 **User Authentication** – Powered by Clerk (OAuth 2.0)
- 💳 **Stripe Connect Integration** – Subscriptions, add-ons, custom checkouts
- 📦 **Media Storage** – Upload files and manage storage in one place
- 📊 **Custom Dashboards & Analytics**
- 🔔 **Real-time Notifications**
- 🌙 **Light & Dark Mode Toggle**
- 🗂️ **Project Management** – Kanban board, metrics & task notifications

---

## 🛠️ Tech Stack

| Layer           | Tools & Libraries                          |
|----------------|---------------------------------------------|
| **Frontend**   | Next.js 14, TailwindCSS, React Flow, Framer Motion |
| **Backend**    | Node.js, Prisma ORM                         |
| **Database**   | PostgreSQL                                  |
| **Authentication** | Clerk.js (OAuth 2.0)                    |
| **UI Components** | shadcn/ui                                |
| **Validation** | Zod                                         |
| **CI/CD**      | GitHub Actions + Vercel                     |

---


---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/zapfox.git
cd zapfox
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the example file and add your secrets:

```bash
cp .env.example .env
```

Fill in the required values:

```env
DATABASE_URL=your-postgres-db-url
CLERK_PUBLISHABLE_KEY=your-clerk-pk
CLERK_SECRET_KEY=your-clerk-sk
STRIPE_SECRET_KEY=your-stripe-sk
STRIPE_WEBHOOK_SECRET=your-webhook-sk
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔗 API Integrations

- ✅ Google Drive – File storage & sync
- ✅ Slack – Automated messaging & notifications
- ✅ Discord – Server notifications
- ✅ Notion – Task & database automation

> Supports **100+ API calls per user per minute** with real-time triggers.

---

## 🔍 Testing

Uses **Jest** for unit and integration tests.

```bash
npm run test
```

---

## 🧠 Future Enhancements

- 🌐 Integrations with Trello, Asana, Salesforce, WhatsApp Business
- 🤖 AI-Powered Workflow Suggestions
- 📈 Advanced Workflow Analytics
- 🌍 Multilingual UI
- 👨‍👩‍👧 Collaborative Workflow Editing
---

