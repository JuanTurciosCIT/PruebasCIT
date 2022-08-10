import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios'

export function useContentData() {
  const [data, setData] = useState({
    title: '',
    subtitle: '',
    caption: ''
  });
  const router = useRouter();

  useEffect(() => {
    const res = axios({
      method: 'get',
      url: 'https://suthiuipgrzglbzvsbjv.supabase.co/rest/v1/HomePageHero?select=*',
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1dGhpdWlwZ3J6Z2xienZzYmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkxMzM5NzgsImV4cCI6MTk3NDcwOTk3OH0.GHJWvPeiZszF-ky5rOqA5ewWeIK9J08WWwB4Wh2qGnA',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1dGhpdWlwZ3J6Z2xienZzYmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkxMzM5NzgsImV4cCI6MTk3NDcwOTk3OH0.GHJWvPeiZszF-ky5rOqA5ewWeIK9J08WWwB4Wh2qGnA'
      }
    });
    
    res.then(res => res.data[0]).then(data => setData(router.locale === 'es' ? {
      title: data.titleES,
      subtitle: data.subtitleES,
      caption: data.captionES,
    } : {
      title: data.titleEN,
      subtitle: data.subtitleEN,
      caption: data.captionEN,
    }));
  }, [router.locale]);


  return data;
}