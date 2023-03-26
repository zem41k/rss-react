export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IUser {
  id?: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  country?: string;
  gender: string;
  photo?: string;
  agreement?: boolean;
}
