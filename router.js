import express from "express";
const router = express.Router();

const data = [
  {
    id: 1,
    name: "Air Force 1 '07",
    category: "f",
    brand: "Nike",
    price: 1290.99,
    content:
    
      "On a associé l'indémodable coloris blanc à du cuir qui change temporairement de couleur sous les rayons UV. On a aussi ajouté des empiècements en daim premium pleine fleur qui ne changent pas de couleur avec le soleil, pour jouer sur les textures, de jour comme de nuit.",
    stock: 10,
    online: true,
    size: ["EU 35", "EU 36", "EU 37", "EU 38", "EU 39"],
    avis: {
      stars: 4,
      nb: 11,
    },
  },

  {
    id: 2,
    name: "Nike Air Max 90 Futura",
    category: "f",
    brand: "Nike",
    price: 169.99,
    content: "Chaussure pour femme",
    stock: 7,
    online: true,
    avis: {
      stars: 4,
      nb: 267,
    },
    size: ["EU 35", "EU 36", "EU 37", "EU 38", "EU 39"],
  },
];

router.get("/all", (req, res) => {
  res.status(201).json(data);
});
router.post("/add", (req, res) => {
  const newArticle = {
    id: 3,
    name: "Jordan One",
    category: "Sport",
    brand: "Jordan",
    price: 90,
    content: "Chaussure pour homme",
    stock: 7,
    online: true,
    avis: {
      stars: 4,
      nb: 267,
    },
    size: ["EU 45", "EU 46", "EU 47", "EU 48", "EU 49"],
  };

  data.push(newArticle);
  res.status(201).json(data);
});

router.put("/put/:id", (req, res, next) => {
  const { id } = req.params;
  const { price } = req.body;
  const { name } = req.body;

  console.log(req.body);
  const checkParams = data.some((article) => article.id == id);

  try {
    if (checkParams) {
      const result = data.filter((article) => {
        if (article.id == id) {
          article.price = price;
          article.name = name;
        }
        return article;
      });
      res.status(200).json({
        message: "The article has been updated",
        data: result,
      });
    }
    if (!checkParams) res.status(404).json({ message: "Article not found !" });
  } catch (error) {
    next(error);
  }

  res.status(200).json(req.body);
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const checkParams = data.some((article) => article.id == id);
  try {
    if (checkParams) {
      const result = [...data].filter((article) => article.id != id);
      res.status(200).json({
        message: "the article has been deleted",
        data: result,
      });
    }
    if (checkParams) res.status(404).json({ message: " article not found" });
  } catch (error) {
    next(error);
  }
});

export default router;

