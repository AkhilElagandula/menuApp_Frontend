import { Component, OnInit } from '@angular/core';
import { ImageService } from './services/image.service';
import { LoaderService } from './loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'foodApp';
  constructor(private imageService: ImageService, private aes: LoaderService) {}
  public formData = new FormData();
  public selectedFile: File | any = null;
  public imageSrc: string = '';
  public transId = 'I250256760';
  ngOnInit(): void {
    let aes_id = this.aes.encryptUsingAES256(this.transId);
    console.log(aes_id);
  }
  
  onSelectFile(event: any) {
    this.selectedFile = event.target.files[event.target.files.length - 1] as File;
  }

  performUpload() {
    this.formData.set('file', this.selectedFile, this.selectedFile.name);
    this.imageService.uploadImage(this.formData, 'akhilelagandula5@gmail.com').subscribe(
      res => {
        let response = JSON.parse(res);
        console.log(response.data.image);
        this.imageSrc = response.data.image
      }
    )
  }

  getImage() {
    this.imageService.getImage().subscribe(
      res => {
        console.log(res);
      }
    )
  }
}
