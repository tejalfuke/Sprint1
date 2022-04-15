import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookappointmentService {

  constructor(private http: HttpClient) { }

  doctorDetails=[{
    id:1,
    doctorName:"Dr.Narendra varma",
    doctorDetails:"Dermotologist",
    ConsultanceFee:500,
    doctorImg: "C:\capgemini\Project\doctorAppointment\src\assets\img\doctor1img.jpg"
     },
     {
      id:2,
      doctorName:"Dr.Anjali Kumari",
      doctorDetails:"Gynocologist",
      ConsultanceFee:1000,
      doctorImg:"C:\capgemini\Project\doctorAppointment\src\assets\img\doctor2img.png"
     },
     {
      id:3,
      doctorName:"Dr.Abhijeet Singh",
      doctorDetails:"cardiologist",
      ConsultanceFee:500,
      doctorImg:"C:\capgemini\Project\doctorAppointment\src\assets\img\doctor3img.jpg"
     },
     {
      id:4,
      doctorName:"Dr.Meena Pandey",
      doctorDetails:"Dentist",
      ConsultanceFee:1000,
      doctorImg:"https://stock.adobe.com/in/search?k=indian%20doctors"
     }
    ]


  getDoctorDetails(){
    const headers=new HttpHeaders()
    .set('control-type','application/json')
    .set('access-control-allow-origin','*');

    const param=new HttpParams()
    .set('name','pen')
    .set('pageNo',5);
    return this.http.get("https://localhost:44354/api/DoctorDetails/GetAll",{headers:headers});
  }
  getDoctorBySpecialization(specialization:string){


      const headers=new HttpHeaders()
      .set('control-type','application/json')
      .set('access-control-allow-origin','*');

      return this.http.get(`https://localhost:44354/api/DoctorDetails/GetBySpecialization/${specialization}`,{headers:headers});

     }
    }




