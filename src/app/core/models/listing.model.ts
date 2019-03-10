import { RouteItem } from "./route-item.model";

export class Listing {

    constructor(
      public id: number,
      public title: string,
      public pace: string,
      public date: string,
      public time: string,
      public route: RouteItem,
    ) {  }
  
  }