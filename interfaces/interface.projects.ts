export interface IProject {
    duration:    Duration;
    orderState?:  string[];
    _id?:         string;
    projectName: string;
    description: string;
    price:       string;
    orderId?:string;
    serviceType: string;
    mediaData?:   MediaDatum[];
    created_on?:  Date;
    updated_on?:  Date;
    createdBy?: string;
    __v?:         number;
}

export interface Duration {
    startDate: Date;
    endDate:   Date;
}

export interface MediaDatum {
    link: string;
    _id:  string;
    fileSize:string;
    fileName:string;
    fileType:string;
}
