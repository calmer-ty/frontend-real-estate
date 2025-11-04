"use client";

import { useEffect } from "react";

import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import Link from "next/link";

import * as S from "./styles";

export const motionLinks = [
  {
    href: "/apartment/",
    className: "link-1",
    title: "아파트",
    desc: "매물을 실거래가 정보와 함께 지도에서 확인해보세요!",
  },
  {
    href: "/officetel/",
    className: "link-2",
    title: "오피스텔",
    desc: "편리한 교통과 다양한 오피스텔 매물을 실거래가로 알아보세요.",
  },
  {
    href: "/familyHousing/",
    className: "link-3",
    title: "빌라",
    desc: "저렴한 가격대의 빌라 매물을 위치와 실거래가로 비교해보세요.",
  },
  {
    href: "https://apply.lh.or.kr/lhapply/main.do#gnrlPop/",
    className: "link-4",
    title: "청약",
    desc: "최신 아파트 청약 일정과 조건을 빠르게 확인하세요!",
    target: "_blank",
  },
  {
    href: "https://www.reby24.com/",
    className: "link-5",
    title: "분양",
    desc: "신규 아파트 및 오피스텔 분양 정보를 한눈에 찾아보세요.",
    target: "_blank",
  },
];

export default function Home(): JSX.Element {
  const router = useRouter();
  const isSmall = useMediaQuery("(max-width:480px)");

  useEffect(() => {
    if (isSmall) {
      router.push("/apartment");
    }
  }, [router, isSmall]);

  const MLink = motion(Link);

  return (
    <S.Primary>
      <div className="inner">
        <div className="row-item">
          {motionLinks.slice(0, 3).map(({ href, className, title, desc, target }) => (
            <MLink
              key={title}
              href={href}
              className={`p-6 bg-white rounded-xl shadow-md ${className}`}
              aria-label="juicy_fish"
              target={target}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-600 break-all">{desc}</p>
            </MLink>
          ))}
        </div>
        <div className="row-item">
          {motionLinks.slice(3, 5).map(({ href, className, title, desc, target }) => (
            <MLink
              key={title}
              href={href}
              className={`p-6 bg-white rounded-xl shadow-md ${className}`}
              aria-label="juicy_fish"
              target={target}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-600 break-all">{desc}</p>
            </MLink>
          ))}
        </div>
      </div>
    </S.Primary>
  );
}
