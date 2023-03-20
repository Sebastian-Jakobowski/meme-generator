import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image-model';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit{
  images: Image[] | undefined;

  constructor(private imageService: ImageService){
  }

  ngOnInit(): void {
    this.showImages();
  }

  showImages(): void {
    this.imageService.getImages().then((images) => {
      this.images = Image.deserialize(images);
    })
    .catch((reason) => console.log(reason));
  }

}
