export class RouteItem {
    athlete: {
        id: number;
        username: String;
        firstname: String;
        lastname: String;
        created_at: String;
        profile_medium: String;
    }
    created_at: String;
    description: String;
    distance: Number;
    elevation_gain: Number;
    estimated_moving_time: Number;
    id: Number;
    map: {
        id: String;
        summary_polyline: String;
        resource_state: Number;
        polyline: any;
    }
    name: String;
    'private': Boolean;
    resource_state: Number;
    starred: Boolean;
    sub_type: Number;
    timestamp: Number;
    type: Number;
    updated_at: String;
}
