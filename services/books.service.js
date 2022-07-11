import ApiCall from "../interceptor/app.interceptor";

const BASE_URL = "http://localhost:3000/";

class BooksService {
  static getAvailableBooks = () => {
    return ApiCall.call({ url: `${BASE_URL}availableBooks` });
  };

  static getHomepage = () => {
    return ApiCall.call({ url: `${BASE_URL}homepage` });
  };

  static getBookDetails = ({ id }) => {
    return ApiCall.call({ url: `${BASE_URL}books/${id}` });
  };
}

export default BooksService;
