export interface UserStore {
  isAuth: boolean;
  customer: Customer | null,
  token: string | null,
}


export interface Customer {
  ContactNo: string
  ProfilePicture: string
  City: string
  PostalCode: string
  Gender: string
  IsActive: boolean
  UserType: string
  _id: string
  FirstName: string
  LastName: string
  Email: string
  Password: string
  createdAt: string
  updatedAt: string
  __v: number
}