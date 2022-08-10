import { useEffect, useState } from 'react'

export function useContentData() {
  const [data, setData] = useState();

  useEffect(() => {
    const res = fetch('https://suthiuipgrzglbzvsbjv.supabase.co/rest/v1/HomePageHero?select=*', {
      method: 'GET',
      headers: new Headers({
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1dGhpdWlwZ3J6Z2xienZzYmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkxMzM5NzgsImV4cCI6MTk3NDcwOTk3OH0.GHJWvPeiZszF-ky5rOqA5ewWeIK9J08WWwB4Wh2qGnA',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1dGhpdWlwZ3J6Z2xienZzYmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkxMzM5NzgsImV4cCI6MTk3NDcwOTk3OH0.GHJWvPeiZszF-ky5rOqA5ewWeIK9J08WWwB4Wh2qGnA'
      })
    });

    res.then(res => res.json()).then(data => setData(data[0].statementData));
  }, []);

  if (data) {
    return data;
  }
  return {
    title: '',
    subtitle: '',
    caption: '',
  };
}