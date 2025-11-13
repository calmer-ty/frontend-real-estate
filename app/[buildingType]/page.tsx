import BuildingView from "@/src/components/units/building/view";

import type { IBuildingPromiseParams } from "@/src/commons/types";

export default function BuildingsPage({ params }: IBuildingPromiseParams): JSX.Element {
  return <BuildingView params={params} />;
}
