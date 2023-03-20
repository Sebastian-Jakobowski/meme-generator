import { Injectable } from '@angular/core';
import { ImageModel } from 'src/app/models/image-model';
import  axios  from 'axios'
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor() { }

  getImages(): Promise<ImageModel[]>{
    return new Promise<ImageModel[]>(((resolve, reject) => {
      axios.get(`${environment.api.imgflip}/get_memes`, {
      }).then((axiosResponse) => {
        resolve(axiosResponse.data.data.memes as ImageModel[])
      }).catch((reason: any) => {
        reject(reason);
      })
    }))
  }
}
