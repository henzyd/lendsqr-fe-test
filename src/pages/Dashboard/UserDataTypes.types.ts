type Education = {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
};

type Guarantor = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
};

type Profile = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
};

type Socials = {
  facebook: string;
  instagram: string;
  twitter: string;
};

export type userDataArrType = [
  {
    accountBalance: string;
    accountNumber: string;
    createdAt: string;
    education: Education;
    email: string;
    guarantor: Guarantor;
    id: string;
    lastActiveDate: string;
    orgName: string;
    phoneNumber: string;
    profile: Profile;
    socials: Socials;
    userName: string;
  }
];

export type UserDataType = {
  accountBalance: string;
  accountNumber: string;
  createdAt: string;
  education: Education;
  email: string;
  guarantor: Guarantor;
  id: string;
  lastActiveDate: string;
  orgName: string;
  phoneNumber: string;
  profile: Profile;
  socials: Socials;
  userName: string;
};
