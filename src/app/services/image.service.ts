import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_CONSTANT } from 'src/constants/urlConstants';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpLCient: HttpClient) { }

  public uploadImage(formData: FormData, email: String): Observable<any> {
    const file = formData.get('file') as File;
    const url = URL_CONSTANT.IMAGE_UPLOAD + `/upload/${email}?file=${file.name}`;
    return this.httpLCient.post(url, formData, {responseType: 'text'});
  }

  getImage() {
    return this.httpLCient.get(URL_CONSTANT.IMAGE_UPLOAD+'/getImage/'+'Screenshot_20231124-170615_WhatsApp.jpg');
  }
}
