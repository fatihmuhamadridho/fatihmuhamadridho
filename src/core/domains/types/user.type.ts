export type UserQueryParams = {
  u?: string; // username
  al?: string; // en-US | id-ID, ini niatnya mao ditaro di header sih as accept-language
};

export type UserProfileWebResponseItem = [
  // obj:data
  string, // id
  string, // fullname
  [
    // obj:detail
    string, // lang:role
    string[], // lang:short_description
    string[], // lang:long_description
    [
      // array:social_media
      string, // icon
      string, // url
    ][],
  ],
];

export type UserProfileWebResponseDTO = [
  boolean, // status
  UserProfileWebResponseItem,
];
