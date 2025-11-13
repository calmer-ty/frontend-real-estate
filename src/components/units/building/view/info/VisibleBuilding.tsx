import InfoDetails from "./details";
import NoDataMessage from "@/src/components/commons/noDataMessage";
import { Chip } from "@mui/material";

import { formatPrice } from "@/src/commons/libraries/utils/priceFormatter";

import * as S from "./styles";

import type { IFirestore, IGeocodeData } from "@/src/commons/types";
import type { Dispatch, SetStateAction } from "react";
interface IVisibleBuildingProps {
  matchingData: IFirestore[];
  visibleMarkerData: IGeocodeData[];
  selectedData: IGeocodeData | undefined;
  setSelectedData: Dispatch<SetStateAction<IGeocodeData | undefined>>;
  buildingType: string;
  mapMode: boolean;
}

export default function VisibleBuilding({ visibleMarkerData, matchingData, selectedData, setSelectedData, buildingType, mapMode }: IVisibleBuildingProps): JSX.Element {
  // visibleData를 순회하면서 matchingData와 대조하여 동일한 데이터만 걸러냅니다.
  const matchingMarkerData = visibleMarkerData.filter((visibleData) => {
    return matchingData.some((matchingData) => visibleData.geocode?.jibunAddress === matchingData.address || visibleData.geocode?.roadAddress === matchingData.address);
  });

  const onClickInfo = (el: IGeocodeData): void => {
    setSelectedData(el); // 선택된 el을 상태에 저장
  };

  return (
    // 해당 영역 지도에 데이터가 있는 리스트
    <>
      {matchingMarkerData.length !== 0 ? (
        <>
          {selectedData !== undefined ? (
            // 마커 리스트 아이템을 선택할 때 보이는 건물 정보
            <InfoDetails matchingData={matchingData} selectedData={selectedData} buildingType={buildingType} setSelectedData={setSelectedData} mapMode={mapMode} />
          ) : (
            <S.List>
              <Chip label="매물 목록" size="medium" variant="filled" color="primary" style={{ margin: "1rem 1rem 0.5rem" }} />
              <ul>
                {matchingMarkerData.map((visData, index) => {
                  const name =
                    visData.data?.aptNm?.trim() !== ""
                      ? visData.data.aptNm
                      : visData.data?.offiNm?.trim() !== ""
                      ? visData.data.offiNm
                      : visData.data?.mhouseNm?.trim() !== ""
                      ? visData.data.mhouseNm
                      : "";
                  return (
                    <li
                      key={`${visData.data?.aptNm}_${index}`}
                      onClick={() => {
                        onClickInfo(visData);
                      }}
                    >
                      <h3>매매 {formatPrice(Number(visData.data?.dealAmount))}</h3>
                      <p>
                        {name}
                        <br />
                        {visData.data?.excluUseAr}m² {visData.data?.floor}층
                      </p>
                    </li>
                  );
                })}
              </ul>
            </S.List>
          )}
        </>
      ) : (
        <NoDataMessage>
          <p>조건에 맞는 방이 없습니다.</p>
          <p>위치를 조정해보세요.</p>
        </NoDataMessage>
      )}
    </>
  );
}
