export interface AboutHeroInterface {
    titleEN?: string;
    titleES?: string;
    captionEN?: string;
    captionES?: string;
    imagePath: string;
}

export interface AboutMetricContent {
    id:         number;
    created_at: string;
    titleEN:    string;
    titleES:    string;
    captionEN:  string;
    captionES:  string;
}

export interface AboutMetric {
    id:            number;
    created_at?:    string;
    prefix:        string;
    descriptionEN: string;
    descriptionES: string;
    value:         number;
    isVisible:     boolean;
}
export interface AboutCompanyValue {
    id:         number;
    created_at?: string;
    misionEN:   string;
    misionES:   string;
    visionES:   string;
    visionEN:   string;
    itemsEN:    string[];
    itemsES:    string[];
    imagePath:  string;
}

export interface AboutCoComment {
    id:         number;
    created_at: string;
    captionES:  string;
    captionEN:  string;
    coName:     string;
    chargeEN:   string;
    isVisible:  boolean;
    chargeES:   string;
}


export interface AboutCustomers {
    id:          number;
    created_at:  string;
    titleEN:     string;
    titleES:     string;
    captionES:   string;
    captionEN:   string;
    customersImagePaths: string[];
}
