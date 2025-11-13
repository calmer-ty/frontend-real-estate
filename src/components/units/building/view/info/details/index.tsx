import DetailsList from "./List";

import CloseButton from "@/src/components/commons/button/close";
import { Chip } from "@mui/material";

import { formatPrice } from "@/src/commons/libraries/utils/priceFormatter";

import * as S from "./styles";

import type { Dispatch, SetStateAction } from "react";
import type { IFirestore, IGeocodeData } from "@/src/commons/types";
import { DEFAULT_STRING_VALUE } from "@/src/commons/constants";
interface IInfoDetailsProps {
  selectedData: IGeocodeData;
  setSelectedData: Dispatch<SetStateAction<IGeocodeData | undefined>>;
  matchingData: IFirestore[];
  buildingType: string;
  mapMode: boolean;
}

export default function InfoDetails({ selectedData, setSelectedData, matchingData, buildingType, mapMode }: IInfoDetailsProps): JSX.Element {
  const onClickClose = (): void => {
    setSelectedData(undefined);
  };

  const buildingName =
    buildingType === "apartment"
      ? selectedData.data?.aptNm
      : buildingType === "officetel"
      ? selectedData.data?.offiNm
      : buildingType === "familyHousing"
      ? selectedData.data?.mhouseNm
      : DEFAULT_STRING_VALUE;

  return (
    <>
      {selectedData != null && (
        <>
          <S.Container>
            <CloseButton onClickClose={onClickClose} />
            <S.InfoWrap>
              <h2>{buildingName}</h2>
              <S.TextWrap>
                <Chip label="연식" size="medium" variant="outlined" />
                <span>{selectedData.data?.buildYear}</span>
              </S.TextWrap>
              <S.TextWrap>
                <Chip label="지번" size="medium" variant="outlined" />
                <span>{selectedData.geocode?.jibunAddress}</span>
              </S.TextWrap>
              <S.TextWrap>
                <Chip label="도로명" size="medium" variant="outlined" />
                <span>{selectedData.geocode?.roadAddress}</span>
              </S.TextWrap>
            </S.InfoWrap>

            <S.InfoWrap>
              <h3>최근 실거래가</h3>
              <S.SelectedContent>
                <strong>매매 {formatPrice(Number(selectedData.data?.dealAmount))}</strong>
                <p>
                  {selectedData.data?.dealYear}.{selectedData.data?.dealMonth}.{selectedData.data?.dealDay}・{selectedData.data?.floor}층・{selectedData.data?.excluUseAr}m²
                </p>
              </S.SelectedContent>
            </S.InfoWrap>
          </S.Container>

          {!mapMode && <DetailsList selectedData={selectedData} matchingData={matchingData} />}
        </>
      )}
    </>
  );
}
