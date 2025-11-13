import type { IAssetForm, IFirestore, IGeocode, IGeocodeData } from "@/src/commons/types";
import type { Dispatch, SetStateAction } from "react";

export interface INaverMapsProps {
  buildingType: string;
  geocode: IGeocode | undefined;
  allGeocodeData: IGeocodeData[];
  allGeocodeDataLoading: boolean;
  matchingData: IFirestore[];
  setSelectedMarkerData: Dispatch<SetStateAction<IGeocodeData | undefined>>;
  setVisibleMarkerData: Dispatch<SetStateAction<IGeocodeData[]>>;
  setRegionName: Dispatch<SetStateAction<string | undefined>>;
  setRegionCode: Dispatch<SetStateAction<string | undefined>>;
  mapMode: boolean;
  setMapMode: Dispatch<SetStateAction<boolean>>;
  asset: IAssetForm | undefined;
  setAsset: Dispatch<SetStateAction<IAssetForm | undefined>>;
}

export interface IMarkerIconContentParams {
  geocodeData: IGeocodeData;
  matchingData: IFirestore[];
  mapMode: boolean;
  totalAsset: number;
}

export interface ICreateMarkerParams {
  geocodeData: IGeocodeData;
  matchingData: IFirestore[];
  setSelectedMarkerData: (data: IGeocodeData) => void;
  mapMode: boolean;
  totalAsset: number;
}
export interface IClusterIcon {
  content: string;
  size: any;
  anchor: any;
}
