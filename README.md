
# ⚡ ZapFox

**ZapFox** is a modern, scalable SaaS automation platform built for agencies, businesses, and startups to **build, automate, and manage multi-tenant websites and cross-platform workflows** with ease.

> 🧠 Inspired by platforms like Zapier and Integromat — but built with developers and non-tech users in mind.

---
## 📸 Screenshots

![ZapFox LandingPage](https://github.com/user-attachments/assets/5b04b6c6-4290-4482-b75c-2c1158285110)
![ZapFox LandingPage](https://github.com/user-attachments/assets/34413516-6b2b-4bf2-b59b-7aadef636870)


![User Sign up](https://github.com/user-attachments/assets/faa60f06-03c4-4a45-a766-6c0ebc1c4948)


![Setting](https://github.com/user-attachments/assets/7775b701-8f9e-4103-a7d4-7aef4fbe3467)



![Connection](https://github.com/user-attachments/assets/532e0e86-f94d-49c6-8389-aa5e502fc1eb)
![Connection](https://github.com/user-attachments/assets/3e52bd66-9580-4bd9-a23a-646dc7cbfbc8)

![Workflow](https://github.com/user-attachments/assets/22ea4fd4-1245-4aad-81ee-2c26b924e130)

![WhatsApp Image 2025-07-11 at 17 03 56_08f21cd1](https://github.com/user-attachments/assets/59698e77-c64f-4139-bc16-b022751e4e77)

![zapfox(orm)](https://github.com/user-attachments/assets/59402ded-dd0f-484e-8c11-3ddb8b6212b6)
![zapfox(user)](https://github.com/user-attachments/assets/82d49427-dde5-405c-ac90-fdda3c947576)


![WhatsApp Image 2025-07-11 at 17 03 56_7c73c7a5](https://github.com/user-attachments/assets/c3593a49-c34b-42ab-8236-f50373744dcc)



![WhatsApp Image 2025-07-11 at 17 03 56_4439dad7](https://github.com/user-attachments/assets/b6cb8736-a028-491b-90eb-2691af8698fb)


## 🚀 Key Features
![WhatsApp Image 2025-07-11 at 17 03 56_08f21cd1](https://github.com/user-attachments/assets/6c4d9938-4529-4d6c-b077-7384b1a2ba4a)

![Zapfox(architecture)](https://github.com/user-attachments/assets/8d021bcb-fda6-49c9-a06f-e3b8de185133)


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

