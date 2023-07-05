export class Bucket {
    private quantity:number = 0;
    private capacity:number = 0;

    constructor(capacity:number) {
        // verify capacity is positive integer
        if (capacity < 0 || !Number.isInteger(capacity)) {
            throw new Error('The capacity must be a positive integer value.')
        }

        this.capacity = capacity;
    }

    // get quantity
    public get currentQuantity():number {
        return this.quantity;
    }

    // get capacity
    public get bucketCapacity():number {
        return this.capacity
    }

    // get available space
    public get availableSpace():number {
        return this.capacity - this.quantity;
    }

    // fill bucket
    public fill():void {
        this.quantity = this.capacity;
    }

    // to empty bucket
    public toEmpty ():void {
        this.quantity = 0;
    }

    // verify bucket is empty
    public isEmpty ():boolean {
        return this.quantity === 0;
    }

    // set new Quantity
    public addQuantity (newQuantity:number):void {
        // verify quantity to add no exceeds the bucket's capacity
        if (this.quantity + newQuantity > this.capacity) {
            throw new Error("The quantity you are trying to add exceeds the bucket's capacity.");
        }
        
        // add new quantity
        this.quantity += newQuantity;
    }

    // verify bucket is full
    public isFull ():boolean {
        return this.quantity === this.capacity;
    }

    // to transfer bucket quantity
    public transferToBucket (bucketToTransfer:Bucket, quantityToTransfer:number):void {

        // Verify that the amount to be transferred is not greater than the quantity that the bucket holds
        if (quantityToTransfer > this.quantity) {
            throw new Error('The quantity to be transferred is greater than the current amount than this bucket.');
        }

        // verify that the quantity to be transferred is not greater than the current amount in the bucket
        if (bucketToTransfer.isFull()) {
            throw new Error('The bucket to which you want to transfer this amount is already full.');
        }
        
        // transfer quantity to bucket to transfer
        bucketToTransfer.addQuantity(quantityToTransfer);

        // subtract the amount transferred
        this.quantity = this.quantity - quantityToTransfer;
    }
}