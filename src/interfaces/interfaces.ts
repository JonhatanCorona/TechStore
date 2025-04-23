export interface ICategory {
    id: number;
    name: string;
}

export interface IProducts {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image?: string;
    categoryId: number;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: string
}

export interface ILoginFormData {
    email: string;
    password: string;
};

export interface ILoginFormDto {
    token: string;
    user: IUser;
};

export interface IUserDto {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}
