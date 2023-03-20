export interface ImageModel {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
}

export class Image implements ImageModel {
    id!: string;
    name!: string;
    url!: string;
    width!: number;
    height!: number;
    box_count!: number;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

    static deserialize(images: ImageModel[]): Image[] {
        let result: Image[] = [];
        images.forEach((value, index) => (result[index] = new Image().deserialize(value)));
        return result;
    }
}
