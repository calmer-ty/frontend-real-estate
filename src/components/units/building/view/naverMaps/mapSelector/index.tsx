import { memo } from "react";

import ApartmentIcon from "@mui/icons-material/Apartment";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";

import * as S from "./styles";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useRouter } from "next/navigation";

const buildingMenu = [
  { type: "apartment", title: "아파트", icon: <ApartmentIcon fontSize="medium" color="primary" /> },
  { type: "officetel", title: "오피스텔", icon: <HomeWorkIcon fontSize="medium" color="primary" /> },
  { type: "familyHousing", title: "빌라", icon: <OtherHousesIcon fontSize="medium" color="primary" /> },
];

function MapSelector({ buildingType }: { buildingType: string }): JSX.Element {
  const router = useRouter();

  return (
    <S.MapSelector>
      <FormControl fullWidth>
        <Select
          labelId="buildingType-select-label"
          id="buildingType-select"
          value={buildingType}
          onChange={(e) => {
            const type = e.target.value;
            router.push(`/${type}`);
          }}
        >
          <MenuItem value="" disabled>
            <em>건물 유형</em>
          </MenuItem>
          {buildingMenu.map((building) => (
            <MenuItem key={building.type} value={building.type}>
              {building.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </S.MapSelector>
  );
}

export default memo(MapSelector);
