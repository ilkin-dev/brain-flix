function formatDate(timestamp) {
  const date = new Date(timestamp); // No need to multiply by 1000 for milliseconds

  // Extract day, month, and year
  const day = date.getDate().toString().padStart(2, '0'); // Ensure two digits (e.g., 01, 02, ..., 31)
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Ensure two digits (e.g., 01, 02, ..., 12)
  const year = date.getFullYear();

  // Format the date as "day/month/year"
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

export default formatDate;