import { useEffect, useState } from "react";

export const useHeaderBgOnScroll = () => {
  // const [scrollY, setScrollY] = useState(0);

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollY(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // return scrollY;

  const [headerBgOnScroll, setHeaderBgOnScroll] = useState<boolean>(false);

	const changeHeaderBg = () => {
		window.scrollY >= 100 ? setHeaderBgOnScroll(true) : setHeaderBgOnScroll(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', changeHeaderBg);
		return () => window.removeEventListener('scroll', changeHeaderBg);
	}, []);

  return headerBgOnScroll;
}