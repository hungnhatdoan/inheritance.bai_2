import { Poi2d } from "./poi2d";
export class Poi3d extends Poi2d {
    private z : number;
    constructor(x : number, y : number, z : number) {
        super(x, y);
        this.z = z;
    }
    public getZ() : number {
        return this.z;
    }
    public setZ(z : number) : void {
        this.z = z;
    }
    public getXYZ() : object {
        return {
            x : super.getX(),
            y : super.getY(),
            z : this.z
        };
    }
}