export type UserQueryParams = {
  u?: string; // username
  al?: string; // en-US | id-ID, ini niatnya mao ditaro di header sih as accept-language
};

export type UserProfileWebResponseDTO = [
  boolean, // status
  [
    // obj:data
    string, // id
    string, // fullname
    [
      // obj:detail
      string, // role
      string, // short_description
      string, // long_description
      [
        // array:social_media
        string, // icon
        string, // url
      ][],
    ],
  ],
];
