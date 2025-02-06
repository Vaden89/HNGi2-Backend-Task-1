import express from "express";
import cors from "cors"; // Import CORS middleware
import { isPrime } from "./utils/isPrime.js";
import { isPerfect } from "./utils/isPerfect.js";
import { digitSum } from "./utils/digitSum.js";
import { FactService } from "./services/fact.service.js";
import { getProperties } from "./utils/properties.js";

const app = express();
const PORT = process.env.PORT || 3000; // Default to port 3000 if not provided

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Fix express.json() usage

app.get("/api/classify-number", async (req, res) => {
  const number = Number(req.query.number);

  if (isNaN(number)) {
    return res.status(400).json({
      number: "alphabet",
      error: true,
    });
  }

  if (number < 0) {
    return res.status(400).json({
      number: "alphabet",
      error: true,
    });
  }

  try {
    res.status(200).json({
      number: number,
      is_prime: isPrime(number),
      is_perfect: isPerfect(number),
      properties: getProperties(number),
      digit_sum: digitSum(number),
      fun_fact: await FactService.getFunFact(number),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
