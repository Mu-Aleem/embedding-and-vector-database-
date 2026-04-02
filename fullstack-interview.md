# Full Stack Interview Questions (4 Years Experience)

## Architecture & System Design
1. How do you decide between SSR (Next.js) and SPA (React + API) for a project?
2. How do you structure a full stack project (monorepo vs separate repos)?
3. What is the BFF (Backend for Frontend) pattern?
4. How do you handle shared types/validation between frontend and backend?
5. What is domain-driven design (DDD)?
6. How do you design a real-time notification system?
7. How do you handle optimistic UI updates?
8. What is CQRS (Command Query Responsibility Segregation)?
9. How would you design a chat application (like WhatsApp Web)?
10. How do you handle multi-tenancy in a SaaS application?

## API Communication
11. How does the frontend communicate with the backend (REST, GraphQL, tRPC, WebSockets)?
12. What is the difference between REST and GraphQL? When would you choose one over the other?
13. What is tRPC and how does it provide end-to-end type safety?
14. How do you handle API error responses on the frontend?
15. What is an API gateway and when do you need one?
16. How do you handle file uploads from frontend to backend?
17. What is server-sent events (SSE) and when would you use it over WebSockets?
18. How do you implement real-time features (polling, WebSockets, SSE)?
19. How do you handle API request cancellation (AbortController)?
20. What is request/response compression and how do you implement it?

## State Management
21. How do you decide what state goes on the client vs the server?
22. What is the difference between server state and client state?
23. Explain React Query / TanStack Query and how it manages server state.
24. When would you use Redux vs Context API vs Zustand?
25. How do you handle form state and validation (React Hook Form, Zod, Yup)?
26. What is stale-while-revalidate caching strategy?
27. How do you sync state between multiple browser tabs?
28. What is the difference between local state, global state, and URL state?
29. How do you handle offline state and data sync?
30. What is eventual consistency and how do you handle it in the UI?

## Authentication Full Flow
31. How do you implement a complete auth flow (signup, login, logout, password reset)?
32. Where do you store JWT tokens (localStorage vs httpOnly cookies)?
33. How do you handle token refresh on the frontend?
34. How do you protect routes on both frontend and backend?
35. How do you implement social login (Google, GitHub OAuth)?
36. What is the difference between session-based and token-based auth in a full stack app?
37. How do you handle role-based UI rendering?
38. How do you implement "remember me" functionality?
39. How do you handle auth state across multiple tabs?
40. What is PKCE flow and why is it used for SPAs?

## Database & ORM
41. How do you choose between PostgreSQL, MongoDB, and MySQL for a project?
42. What is Prisma and how does it compare to Sequelize and TypeORM?
43. How do you handle database schema changes in production?
44. What is the N+1 query problem and how do you solve it?
45. How do you implement soft deletes?
46. How do you handle relationships (one-to-one, one-to-many, many-to-many) in an ORM?
47. What is database seeding and when do you use it?
48. How do you implement full-text search in a database?
49. How do you handle optimistic locking vs pessimistic locking?
50. What are database views and materialized views?

## DevOps & Deployment
51. How do you deploy a full stack app (Vercel, Railway, AWS, DigitalOcean)?
52. What is Docker Compose and how do you use it for local development?
53. How do you set up environment variables for different environments (dev, staging, prod)?
54. What is a reverse proxy and how does Nginx fit in a full stack setup?
55. How do you handle CORS issues between frontend and backend on different domains?

## Testing
56. What is the testing pyramid (unit, integration, e2e)?
57. How do you test API endpoints (Jest, Supertest)?
58. How do you test React components (React Testing Library)?
59. What is end-to-end testing (Playwright, Cypress)?
60. How do you mock API calls in frontend tests?

## Performance
61. How do you identify and fix performance bottlenecks across the full stack?
62. What is lazy loading and how do you apply it on frontend and backend?
63. How do you implement infinite scrolling with backend pagination?
64. What is CDN and how does it improve performance?
65. How do you handle image optimization in a full stack app?

## Error Handling & Logging
66. How do you implement a global error handling strategy across frontend and backend?
67. What is structured logging and why is it important?
68. How do you track errors in production (Sentry, LogRocket)?
69. How do you handle network failures gracefully on the frontend?
70. How do you implement retry logic with exponential backoff?

## Security
71. How do you prevent XSS in a full stack app (frontend sanitization + backend validation)?
72. How do you implement Content Security Policy (CSP) headers?
73. How do you handle sensitive data in environment variables across frontend and backend?
74. What is input validation and where should it happen (frontend, backend, or both)?
75. How do you secure file uploads (file type validation, size limits, malware scanning)?
76. How do you prevent clickjacking and what is X-Frame-Options?
77. How do you implement rate limiting on both API and login routes?
78. What is OWASP Top 10 and which vulnerabilities have you dealt with?
79. How do you handle secrets management in production (Vault, AWS Secrets Manager)?
80. How do you audit and log user actions for compliance?

## Caching Strategies
81. What are the different caching layers in a full stack app (browser, CDN, API, database)?
82. How do you implement HTTP caching headers (Cache-Control, ETag, Last-Modified)?
83. When would you use Redis vs in-memory caching?
84. How do you invalidate cache when data changes?
85. What is stale-while-revalidate and how does it work at the HTTP level?

## Webhooks & Events
86. What are webhooks and how do you implement them?
87. How do you handle webhook retries and idempotency?
88. What is the pub/sub pattern and when do you use it?
89. How do you implement event-driven architecture in a full stack app?
90. How do you handle background jobs (Bull, BullMQ, Agenda)?

## TypeScript
91. How does TypeScript improve a full stack project?
92. How do you share types between frontend and backend?
93. What is the difference between `interface` and `type` in TypeScript?
94. What are generics and how do you use them in API responses?
95. How do you type API request and response objects?
96. What is `unknown` vs `any` vs `never` in TypeScript?
97. How do you handle strict null checks in a large codebase?
98. What are utility types (Partial, Required, Pick, Omit, Record)?
99. How do you type middleware in Express with TypeScript?
100. What is declaration merging and module augmentation?

## Microservices & Distributed Systems
101. How do microservices communicate (REST, gRPC, message queues)?
102. What is service discovery and why is it needed?
103. How do you handle distributed transactions (Saga pattern)?
104. What is circuit breaker pattern and when do you use it?
105. How do you handle data consistency across microservices?

## CI/CD & DevOps
106. How do you set up a CI/CD pipeline for a full stack app?
107. What is the difference between blue-green deployment and canary deployment?
108. How do you implement database migrations in a CI/CD pipeline?
109. What is infrastructure as code (Terraform, Pulumi)?
110. How do you handle rollbacks when a deployment fails?

## Monitoring & Observability
111. What is the difference between monitoring, logging, and tracing?
112. How do you implement health check endpoints?
113. What is distributed tracing and how does it help debug issues?
114. How do you set up alerts for critical errors in production?
115. What are SLAs, SLOs, and SLIs?

## Scenario-Based Questions
116. A page loads slowly — how do you debug it across frontend and backend?
117. Users report data inconsistency — how do you investigate?
118. Your API is getting rate-limited by a third-party service — how do you handle it?
119. How would you migrate a monolithic app to microservices?
120. How do you handle breaking API changes without disrupting the frontend?
121. Your database query is taking 10 seconds — walk through your optimization process.
122. A user reports they can see another user's data — how do you investigate and fix it?
123. Your app crashes under high traffic — what steps do you take?
124. You need to add a new feature that requires changes in frontend, backend, and database — what is your workflow?
125. A third-party API you depend on goes down — how does your app handle it?
126. How would you build a multi-language (i18n) support for an existing app?
127. Your team is debating between REST and GraphQL for a new project — how do you decide?
128. How do you handle data migration when switching from MongoDB to PostgreSQL?
129. A client reports that the app works in Chrome but not Safari — how do you debug?
130. How would you implement a feature flag system?
