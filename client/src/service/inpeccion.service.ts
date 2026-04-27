import axios from "axios";
import { API_BASE } from "../utils/const";


export interface RowData {
  [key: string]: string | number | boolean;
}

export type InspectionZone = "Multired" | "Yum";

export const buildInspectionApiUrl = (inspection: string, zone: InspectionZone) => {
  if (inspection === "motocicleta" || inspection === "seguimiento_login") {
    return `${API_BASE}/${inspection}`;
  }
  return `${API_BASE}/${inspection}/${zone}`;
};

export const getInspections = async (inspection: string, zone: InspectionZone): Promise<RowData[]> => {
  const response = await axios.get(buildInspectionApiUrl(inspection, zone));
  return response.data?.datos ?? [];
};
