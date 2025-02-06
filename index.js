import express from "express";
import { isPrime } from "./utils/isPrime.js";
import { isPerfect } from "./utils/isPerfect.js";
import { digitSum } from "./utils/digitSum.js";
import { FactService } from "./services/fact.service.js";
import { getProperties } from "./utils/properties.js";
const app = express(express.json());
const PORT = process.env.PORT;

app.get("/api/classify-number", async (req, res) => {
  const number = Number(req.query.number);

  if (!number) {
    res.status(400).json({
      number: "alphabet",
      error: true,
    });
    return;
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
