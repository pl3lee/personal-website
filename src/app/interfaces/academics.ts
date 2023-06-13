
export interface AcademicsInterface {
    academics: AcademicInterface[];
}

export interface AcademicInterface {
    name: string;
    description: string;
    location: string;
    date: string;
    major: string;
    minor: string;
    cgpa: string;
    mav: string;
    url: string;
    img: string;
}
