# React & Next.js Interview Questions (4 Years Experience)

## React Fundamentals
1. What is React and how does it differ from vanilla JavaScript?
2. What is JSX and how does it get compiled?
3. What is the Virtual DOM and how does reconciliation work?
4. What is the difference between a functional component and a class component?
5. What are props and how do they differ from state?
6. What is one-way data binding in React?
7. What is the difference between `React.createElement` and JSX?
8. What are React fragments and why are they useful?
9. What is the difference between a controlled and uncontrolled component?
10. What is the children prop and how do you use it for composition?

## React Hooks
11. What are React Hooks and why were they introduced?
12. Explain `useState` — how does it work internally?
13. Explain `useEffect` — what is the dependency array and cleanup function?
14. What is the difference between `useEffect` and `useLayoutEffect`?
15. What is `useRef` and when would you use it?
16. What is `useMemo` and when should you use it?
17. What is `useCallback` and how does it differ from `useMemo`?
18. What is `useReducer` and when would you prefer it over `useState`?
19. What is `useContext` and how does it work?
20. What is `useId` and why was it added in React 18?
21. What is `useTransition` and how does it improve UX?
22. What is `useDeferredValue` and when would you use it?
23. What is `useImperativeHandle` and when is it appropriate?
24. What are the rules of Hooks? Why can't you call Hooks conditionally?
25. How do you create a custom Hook? Give a real-world example.

## Component Patterns
26. What are Higher-Order Components (HOC)? Give an example.
27. What is the Render Props pattern?
28. How do custom Hooks replace HOCs and Render Props?
29. What is the Compound Component pattern?
30. What is the Container/Presentational pattern? Is it still relevant?
31. What is the Provider pattern in React?
32. How do you implement a modal/dialog using portals?
33. What are controlled vs uncontrolled components for form handling?
34. What is the Slot pattern in React?
35. How do you implement a headless component?

## State Management
36. When do you need external state management vs React's built-in state?
37. What is prop drilling and how do you solve it?
38. How does Context API work? What are its limitations?
39. What is Redux and how does the data flow work (actions, reducers, store)?
40. What is Redux Toolkit and how does it simplify Redux?
41. What is Zustand and how does it differ from Redux?
42. What is Jotai and how does atomic state management work?
43. What is React Query / TanStack Query and how does it manage server state?
44. What is the difference between client state and server state?
45. How do you handle global state that persists across page refreshes?

## React Performance
46. What causes unnecessary re-renders in React?
47. How does `React.memo` work and when should you use it?
48. What is the difference between `useMemo` and `React.memo`?
49. How do you use React DevTools Profiler to identify performance issues?
50. What is code splitting and how do you implement it with `React.lazy`?
51. What is `Suspense` and how does it work with lazy loading?
52. How does windowing/virtualization work (react-window, react-virtuoso)?
53. What is the key prop and why does it matter for performance?
54. How do you optimize large lists in React?
55. What is automatic batching in React 18?

## React Router
56. How does client-side routing work in React?
57. What is the difference between `BrowserRouter` and `HashRouter`?
58. How do you implement nested routes?
59. How do you handle protected/private routes?
60. What are route loaders and actions in React Router v6?
61. How do you implement route-based code splitting?
62. What is the difference between `useNavigate`, `useParams`, and `useSearchParams`?
63. How do you handle 404 pages in React Router?
64. What are layout routes and outlet components?
65. How do you pass data between routes?

## Forms & Validation
66. How do you handle forms in React (controlled vs uncontrolled)?
67. What is React Hook Form and why is it popular?
68. How does Formik compare to React Hook Form?
69. What is Zod and how do you use it for form validation?
70. How do you handle complex multi-step forms?
71. How do you implement real-time form validation?
72. How do you handle file inputs in React?
73. What is the `useFormStatus` Hook in React 19?
74. How do you handle form submission with loading states and error handling?
75. How do you implement debounced search input?

## Testing React
76. How do you test React components with React Testing Library?
77. What is the difference between `render`, `screen`, and `fireEvent`?
78. How do you test custom Hooks?
79. How do you mock API calls in React tests?
80. What is snapshot testing and when is it useful?
81. How do you test components that use Context or Redux?
82. What is the difference between unit testing and integration testing in React?
83. How do you test async components (loading, error, success states)?
84. How do you test user interactions (clicks, typing, form submission)?
85. What is end-to-end testing with Playwright/Cypress for React apps?

## Next.js Fundamentals
86. What is Next.js and why would you use it over plain React?
87. What is the difference between the App Router and Pages Router?
88. What are Server Components and Client Components in Next.js?
89. When do you use `"use client"` and `"use server"` directives?
90. What is the `app` directory structure in Next.js 13+?
91. What are `layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`, and `not-found.tsx`?
92. How does file-based routing work in Next.js?
93. What are dynamic routes (`[slug]`) and catch-all routes (`[...slug]`)?
94. What is the `next.config.js` file and what can you configure in it?
95. What is Turbopack and how does it compare to Webpack?

## Next.js Rendering Strategies
96. What is SSR (Server-Side Rendering) and how does `getServerSideProps` work?
97. What is SSG (Static Site Generation) and how does `getStaticProps` work?
98. What is ISR (Incremental Static Regeneration) and how does `revalidate` work?
99. What is CSR (Client-Side Rendering) and when should you still use it in Next.js?
100. How does streaming SSR work in Next.js with Suspense?
101. What is PPR (Partial Prerendering) in Next.js?
102. How do you choose between SSR, SSG, ISR, and CSR for a specific page?
103. What is `generateStaticParams` and how does it replace `getStaticPaths`?
104. How does caching work in Next.js (request memoization, data cache, full route cache)?
105. What is the difference between static and dynamic rendering in the App Router?

## Next.js Data Fetching
106. How do you fetch data in Server Components?
107. How does the `fetch` API work differently in Next.js (caching, revalidation)?
108. What are Server Actions and how do you use them for mutations?
109. How do you handle loading and error states with Suspense boundaries?
110. What is `unstable_cache` and when would you use it?
111. How do you implement optimistic updates with Server Actions?
112. How do you fetch data on the client side in Next.js?
113. What is parallel data fetching and how do you implement it?
114. How do you handle pagination with Next.js (offset, cursor, infinite scroll)?
115. What is `revalidatePath` and `revalidateTag`?

## Next.js API & Backend
116. How do you create API routes in Next.js (route handlers)?
117. What is the difference between `pages/api` and `app/api` route handlers?
118. How do you handle authentication in Next.js (NextAuth.js / Auth.js)?
119. How do you implement middleware in Next.js?
120. How do you connect to a database from Next.js (Prisma, Drizzle)?
121. How do you handle CORS in Next.js API routes?
122. How do you implement rate limiting in Next.js?
123. What are Edge Functions and when would you use them over Node.js runtime?
124. How do you handle webhooks in Next.js?
125. How do you implement file uploads in Next.js?

## Next.js Performance & SEO
126. How do you optimize images with `next/image`?
127. How do you optimize fonts with `next/font`?
128. How does `next/link` prefetching work?
129. How do you implement metadata and SEO with `generateMetadata`?
130. What is the `next/script` component and how do you optimize third-party scripts?
131. How do you implement Open Graph and Twitter cards in Next.js?
132. How do you create a sitemap and robots.txt in Next.js?
133. How do you implement structured data (JSON-LD) for SEO?
134. How do you analyze bundle size in Next.js (`@next/bundle-analyzer`)?
135. How do you implement lazy loading for components and images?

## Next.js Advanced
136. How do you implement internationalization (i18n) in Next.js?
137. How do you handle environment variables in Next.js (`NEXT_PUBLIC_` prefix)?
138. How do you implement a custom 404 and 500 error page?
139. What are parallel routes and intercepting routes in the App Router?
140. How do you implement route groups in Next.js?
141. How do you deploy Next.js (Vercel, self-hosted, Docker)?
142. How do you implement A/B testing in Next.js with middleware?
143. How do you handle multi-tenancy in Next.js?
144. What is the `instrumentation.ts` file and how do you use it for monitoring?
145. How do you implement a progressive web app (PWA) with Next.js?

## Scenario-Based Questions
146. Your Next.js page loads slowly — how do you diagnose and fix it?
147. You need to show real-time data on a Next.js page — what approach do you take?
148. A client wants both a marketing site (static) and a dashboard (dynamic) — how do you structure it in Next.js?
149. Your Server Component needs to use `useState` — what do you do?
150. You have a form that submits data and needs to update the UI — Server Actions or API route?
