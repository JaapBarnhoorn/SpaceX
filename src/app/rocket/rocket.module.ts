// JAAP: in modules folder zetten
// JAAP: interface hoort niet in een module thuis, losse interfaces/types folder met rocket.interface.ts of rocket.types.ts
export interface Rocket {
  rocket: {
    rocket_name: string;
    second_stage: string;
  };
  flight_id: string;
  rocket_name: string;
  payload_type: string;
  launch_year: number;
  flight_number: number;
  rocket_type: string;
  land_success: boolean;
  launch_success: boolean;
  customers: string;
  nationality: string;
  manufacturer: string;
}
