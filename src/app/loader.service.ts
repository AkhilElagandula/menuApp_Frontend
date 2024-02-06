import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading$ = new Subject<Boolean>;
  constructor() { }

  show(): void {
    this.isLoading$.next(true);
  }

  hide(): void {
    this.isLoading$.next(false);
  }

  public key :any ='8080808080808088';  // CryptoJS.enc.Utf8.parse('80808080808080808080808080808080');
  public iv :any ='8080808080808088'; // CryptoJS.enc.Utf8.parse('8080808080808080');
  encryptUsingAES256(data: any) {
    let _key = CryptoJS.enc.Utf8.parse(this.key);
    let _iv = CryptoJS.enc.Utf8.parse(this.key);
    try{
      let encrypted = CryptoJS.AES.encrypt(
        data, _key, {  //JSON.stringify(data), _key, {
          keySize: 16,
          iv: _iv,
          mode: CryptoJS.mode.CBC, //ECB
          padding: CryptoJS.pad.Pkcs7
        });
        console.log(encrypted.toString());
      //return encrypted.toString();
    }
    catch(e)
    {
      console.log(e);
    }
    // let tokenFromUI = "8080808080808080";
    // let _key = CryptoJS.enc.Utf8.parse(tokenFromUI);
    // let _iv = CryptoJS.enc.Utf8.parse(tokenFromUI);
    // var text2 = data;
    // var decryptedValue = CryptoJS.AES.encrypt(text2, _key, {
    //   keySize: 256 / 8,
    //   iv: _iv,
    //   padding: CryptoJS.pad.Pkcs7,
    //   mode: CryptoJS.mode.CBC

    // })
    // var decryptedstring = decryptedValue.toString();
    // return decryptedstring;
  }
  
}
