import { RouteItem } from "./route-item.model";
import { Moment } from 'moment';
export class Listing {

    constructor(
      public id: number,
      public type: string,
      public title: string,
      public pace: string,
      public date: Moment,
      public time: string,
      public info: string,
      public route: RouteItem,
      public creator: string,
      public creator_photo: String,
    ) {  }
  
  }