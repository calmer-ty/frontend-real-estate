import { regionApi } from "./regionApi";
import { getCachedRegionData, setRegionCache } from "./regionCache";

import { CITIES } from "@/src/commons/constants/regionData";
import type { IRegionItemFiltered } from "@/src/commons/types";

import pLimit from "p-limit";
const limit = pLimit(10);

// 특정 도시의 지역 데이터를 가져오는 함수
const fetchRegionData = async (city: string): Promise<IRegionItemFiltered[]> => {
  const cacheKey = `region_${city}`;
  const cachedData = getCachedRegionData(cacheKey);

  if (cachedData !== undefined) {
    return cachedData;
  }

  try {
    const response = await regionApi(city);
    setRegionCache(cacheKey, response);

    return response;
  } catch (error) {
    console.error("[fetchRegionData] error:", error);
    return [];
  }
};

// 지역 데이터를 가져오는 함수
export const getRegionData = async (): Promise<IRegionItemFiltered[]> => {
  try {
    const promise = CITIES.map((city) => limit(() => fetchRegionData(city))); // 각 도시에 대해 데이터를 가져오는 Promise 배열을 생성합니다
    const regionData = await Promise.all(promise); // Promise.all을 사용해 모든 데이터를 병렬로 가져옵니다

    // 지역 코드와 위치 이름을 그룹화하여 배열로 반환
    const regionDataList = regionData.flat().map((item) => ({
      city: item.city,
      district: item.district,
      regionCode: item.regionCode,
    }));

    return regionDataList.flat(); // 도시별 지역 코드 그룹화된 객체 반환
  } catch (error) {
    console.error("[fetchRegionData] error:", error);
    return [];
  }
};
