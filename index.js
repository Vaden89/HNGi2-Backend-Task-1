import express from "express";
import cors from "cors"; // Import CORS middleware
import { isPrime } from "./utils/isPrime.js";
import { isPerfect } from "./utils/isPerfect.js";
import { digitSum } from "./utils/digitSum.js";
import { FactService } from "./services/fact.service.js";
import { getProperties } from "./utils/properties.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/api/classify-number", async (req, res) => {
  const { number: numberStr } = req.query;

  if (!numberStr || numberStr.trim() === "") {
    return res.status(400).json({
      number: "alphabet",
      error: true,
    });
  }

  const number = Number(numberStr);

  if (!number) {
    return res.status(400).json({
      number: "alphabet",
      error: true,
    });
  }

  try {
    res.status(200).json({
      number: number,
      is_prime: isPrime(number),
      is_perfect: isPerfect(Math.abs(number)),
      properties: getProperties(Math.abs(number)),
      digit_sum: digitSum(Math.abs(number)),
      fun_fact: await FactService.getFunFact(number),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
