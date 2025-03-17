import bcrypt from "bcrypt";

// Generate and hash a random 6-digit verification code
export const generateHashedCode = async () => {
  const rawCode = Math.floor(100000 + Math.random() * 900000).toString();
  const hashedCode = await bcrypt.hash(rawCode, 10); // Hash the code
  const expiresIn = new Date(Date.now() + 10 * 60 * 1000);

  return { rawCode, hashedCode, expiresIn };
};

// Compare user input with the hashed verification code
export const compareCode = async (inputCode, hashedCode) => {
  return await bcrypt.compare(inputCode, hashedCode);
};
