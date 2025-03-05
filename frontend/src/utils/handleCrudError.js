import { toast } from "react-toastify";

export default function handleCrudError(error) {
  let errorMessage = "Something went wrong, please try again.";

  if (error.response) {
    // Server response errors (4xx, 5xx)
    const { data, status, statusText } = error.response;
    errorMessage = data?.error || `Error ${status}: ${statusText}`;
  } else if (error.request) {
    // Network errors (No response received)
    errorMessage = "No response from the server, please check your connection.";
  } else if (error.message) {
    // Other unexpected errors
    errorMessage = error.message;
  }

  toast.error(errorMessage);
  return errorMessage;
}
