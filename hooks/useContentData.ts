import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { HeroSection } from 'utils/types/homeContent.interface';
import axios, { AxiosPromise } from 'axios'

export function useContentData({ apiUrl }: { apiUrl: string }) {
  const [data, setData] = useState<HeroSection>({} as HeroSection);
  const router = useRouter();

  useEffect(() => {
    const res: AxiosPromise = axios({
      method: 'get',
      url: apiUrl,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        'apikey': process.env.NEXT_PUBLIC_API_KEY || '',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN || ''}`
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
  }, [router.locale, apiUrl]);


  return data;
}