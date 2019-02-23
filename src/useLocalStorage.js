import { useState, useEffect } from 'react';

function useLocalStorage(props) {
  const [storedValue, updateStoredValue] = useState(props.initValue || null);

  const fetchItems = async () => {
    const storedValue = window.localStorage.getItem(props.storeAs);
    if (storedValue) {
      console.log("%c data from localstorage", "background: #222; color: #bada55");
      updateStoredValue(JSON.parse(storedValue));
      props.onChange(JSON.parse(storedValue));
    } else {
      const url = props.url;
      const response = await fetch(url);
      const newVal = await response.json();
      updateStoredValue(newVal);
      window.localStorage.setItem(props.storeAs, JSON.stringify(newVal));
      console.log("%c data from api", "background: #222; color: #bada55");
      props.onChange(newVal);
    }
  }


  const subscribe = () => {
    try {
      const source = new EventSource('http://localhost:5000/events', { withCredentials: true });
      source.onmessage = (event) => {
        if (event.data) {
          console.log("%c removing localstorage", "background: #222; color: red");
          window.localStorage.removeItem(props.storeAs);
        }
      };
      source.onopen = () => console.log('open');
      source.onerror = (e) => {
        if (e.readyState === EventSource.CONNECTING) {
          console.log('event: CONNECTING');
        } else if (e.readyState === EventSource.OPEN) {
          console.log('event: OPEN');
        } else if (e.readyState === EventSource.CLOSING) {
          console.log('event: CLOSING');
        } else if (e.readyState === EventSource.CLOSED) {
          console.log('event: CLOSED');
        }
      };
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchItems();
    subscribe();
  }, []);

  return storedValue;
};

export default useLocalStorage;