/* eslint-disable */
import { useEffect, useState } from 'react';
import Loader from './Loader';
import Error from './Error';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch data
  const fetchData = async () => {
    const request = await fetch(
      'https://api.api-ninjas.com/v1/quotes?category=age',
      {
        method: 'Get',
        contentType: 'application/json',
        headers: { 'X-Api-Key': 'cwd7G46iynGqOEQ1g+zBbw==5ezDbVZRFlCVb0uD' },
      }
    );
    const response = await request.json();
    // Error
    if (response.error) {
      setLoading(false);
      setError(response);
    } else {
      // normal
      setLoading(false);
      setError(false);
      setQuote(response[0]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [setQuote, setLoading]);

  if (loading) {
    return <Loader />;
  } else if (error) {
    return <Error error={error} />;
  } else if (quote) {
    return (
      <div className='quote-container'>
        <div className='quote-content'>{quote.quote}</div>
        <div className='quote-bottom-row'>
          <button className='quote-category'>{quote.category}</button>
          <div className='quote-author'>{quote.author}</div>
        </div>
      </div>
    );
  }
};

export default Quote;
