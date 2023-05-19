export interface IProject {
    duration:    Duration;
    orderState:  string[];
    _id:         string;
    projectName: string;
    description: string;
    price:       string;
    serviceType: string[];
    mediaData:   MediaDatum[];
    created_on:  Date;
    updated_on:  Date;
    __v:         number;
}

export interface Duration {
    startDate: Date;
    endDate:   Date;
}

export interface MediaDatum {
    link: string;
    _id:  string;
}
