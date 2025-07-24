export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};




export type TCard = {
    id: number;
    name: string;
    image: string;
}


export type TImage = {
    url: string;
    alt: string;
    description: string;
    
}
