import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        // Set up the request body
                        const requestBody = new URLSearchParams();
                        requestBody.append('user_id', '4');

                        const response = await axios.post(
                              'http://localhost/storrre_api/domains/domain_user/products/get_products.php',
                              requestBody.toString(), // Convert the body to a string
                              {
                                    headers: {
                                          'Content-Type': 'application/x-www-form-urlencoded'
                                    }
                              }
                        );

                        if (response.data.status === 'success') {
                              setProducts(response.data.data);
                        } else {
                              throw new Error('Failed to fetch data');
                        }
                  } catch (error) {
                        console.error('Error fetching data:', error);
                  } finally {
                        setLoading(false);
                  }
            };

            fetchData();
      }, []);

      if (loading) {
            return <div>Loading...</div>;
      }

      return (
            <div>
                  <h1>Products</h1>
                  <ul>
                        {products.map(product => (
                              <li key={product.id}>
                                    <h2>{product.name}</h2>
                                    <p>{product.descriptions_short}</p>
                                    <p>Price: ${product.price}</p>
                                    <p>Discount: {product.discount}%</p>
                              </li>
                        ))}
                  </ul>
            </div>
      );
}

export default MyComponent;
