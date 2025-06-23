# Notion Data Dashboard
Built by: *Gabe Ramirez*

![SampleImage](https://github.com/user-attachments/assets/933241e5-81a5-45ea-9bf2-432643b3e6d0)


## TLDR;

A full-stack data visualization dashboard. This app fetches structured data from the Notion API and converts it into interactive visualizations. 

I learned to work with and apply the following libraries and technologies:
- React (configured w/ Vite)
- Node.js + Express.js
- Notion API Calls
- [React Router](https://reactrouter.com/) (for navigation)
- [Tailwind](https://tailwind.build/classes) (styling)
- [Recharts](https://recharts.org/en-US/examples) (React components library for data visualization)
- [React-Icons](https://react-icons.github.io/react-icons/icons/hi/) (React icons library)

I had a lot of fun working on this project! 😄

---

##  Tech Stack

| Layer       | Tools Used                         |
|-------------|------------------------------------|
| Frontend    | React, React Router DOM, Recharts, Tailwind CSS |
| Backend     | Express.js, Node.js                |
| Visualization | Recharts                         |
| Styling     | Tailwind CSS                       |
| Data Source | Notion API (via custom Express route) |

---

## 🔍 API Route

| Endpoint | Method | Description                      |
|----------|--------|----------------------------------|
| `/api` | `GET`  | Fetches dummy data used for testing |
| `/api/notion-data` | `GET`  | Fetches structured data from Notion |

---

## Next Steps (Ideas for Improvements)

- Add filtering/sorting for athlete data
- Add authentication or user accounts
- Create a dashboard layout with dynamic widgets
- Hook up live Notion API access instead of static mock data

---

## License

MIT License © Gabriel Ramirez

