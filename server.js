import express from 'express'

import articles from'./router.js'

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/article", articles)

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})