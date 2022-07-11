import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import BooksService from "../../services/books.service";
import { BasketContext } from "../../contexts/basket.context";
import styles from "../../styles/BookDetails.module.scss";

const BookDetailView = () => {
  const { addItemToBasket } = useContext(BasketContext);
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const [bookDetails, setBookDetails] = useState();

  useEffect(() => {
    BooksService.getBookDetails({ id }).then((res) => setBookDetails(res));
  }, []);

  const goBack = () => router.back();

  const addBookToBasket = () => addItemToBasket(bookDetails);

  if (!bookDetails) return null;

  const { title, author, cover, metaTitle, metaDescription } = bookDetails;

  return (
    <div className={styles.bookDetailView}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <span onClick={goBack} className={styles.link}>
        {"<"} Go Back
      </span>
      <div className={styles.bookDetails}>
        <h1 style={styles.title}>{title}</h1>
        <h5 style={styles.author}>{author}</h5>
        <div className={styles.cover_addButton}>
          <Image src={cover} alt={title} width={150} height={200} />
          <button className={styles.button} onClick={addBookToBasket}>
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailView;
