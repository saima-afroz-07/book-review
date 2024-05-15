import mongoose from 'mongoose';

class Database {
    public static async init(): Promise<void> {
        const connection_string: string = process.env.MONGODB_URL as string;
        // try {
            mongoose.connect(connection_string)
            .then(() => 
                console.log('Connected to MongoDB...'))
            .catch((err: any) => 
                console.error("Coudn't connect MongoDB....", err));
      }
}

export default Database