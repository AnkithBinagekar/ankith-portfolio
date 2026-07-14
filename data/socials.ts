export interface SocialLink {
  name: string;
  url: string;
}

export const socials = {
  email: "ankithbinagekar2002@gmail.com",
  location: "Vasco da Gama, Goa, India",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/AnkithBinagekar",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ankithbinagekar",
    },
  ] as SocialLink[],
};