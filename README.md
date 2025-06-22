
# ⚡ ZapFox

**ZapFox** is a modern, scalable SaaS automation platform built for agencies, businesses, and startups to **build, automate, and manage multi-tenant websites and cross-platform workflows** with ease.

> 🧠 Inspired by platforms like Zapier and Integromat — but built with developers and non-tech users in mind.

---
## 📸 Screenshots

> Screenshots are available inside the `public/` folder  
Example files: `p1.png`, `p2.png`, etc.

Use the following Markdown to preview them in the README:

```md
![Landing Page]((https://github.com/uzmajamadar/ZapFox/blob/8121f3faae64ecb42fbafc682fed09c2f6c104a6/Screenshot%202025-06-22%20133134.png))
![Landing Page]([./public/p2.png](https://github.com/uzmajamadar/ZapFox/blob/8121f3faae64ecb42fbafc682fed09c2f6c104a6/Screenshot%202025-06-22%20134059.png))

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

## 🧪 Live Demo

**Not deployed yet.**  
➡️ Want a live demo on [Vercel](https://vercel.com/)? Let us know!

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

## 📦 Deployment

Recommended: **Vercel**

Also supports: Netlify, Cloudflare Pages, Docker

### One-click Deploy (Coming soon...)

---

## 🧠 Future Enhancements

- 🌐 Integrations with Trello, Asana, Salesforce, WhatsApp Business
- 🤖 AI-Powered Workflow Suggestions
- 📈 Advanced Workflow Analytics
- 🌍 Multilingual UI
- 👨‍👩‍👧 Collaborative Workflow Editing

---

## 📜 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more details.

---

## 🙌 Contributing

Contributions are welcome!  
Please open an issue or submit a pull request.

---

## 📫 Contact

For feature requests or deployment help:  
**Email:** yourname@example.com  
**LinkedIn:** [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)
