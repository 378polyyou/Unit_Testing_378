import { RowDataPacket } from "mysql2"; // Import type for rows returned from queries
import { promisePool } from "../config/db"; // Import the promisePool from config
import { Product } from "../model/product"; // Import the Product model
import { Request, Response } from "express"; // Import Request and Response from express

const selectAll = async (): Promise<Product[] | null> => {
  try {
    const [rows]: [RowDataPacket[], any] = await promisePool.query(
      "SELECT * FROM product"
    );
    return rows as Product[]; // Type assertion to match Product[]
  } catch (err) {
    console.error("Database query error:", err);
    return null; // Return null or handle the error as needed
  }
};

export default { selectAll };
