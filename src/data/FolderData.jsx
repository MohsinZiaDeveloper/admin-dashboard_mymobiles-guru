const explorer = {
  name: "root",
  isFolder: "true",
  items: [
    {
      name: "public",
      isFolder: "true",
      items: [
        {
          name: "public nested 1 ",
          isFolder: "true",
          items: [
            {
              name: "public 01",
              isFolder: "true",
              items: [
                {
                  name: "root 001",
                  isFolder: "false",
                },
              ],
            },
          ],
        },
        {
          name: "public 1",
          isFolder: "true",
          items: [
            {
              name: "root sub 1",
              isFolder: "false",
            },
          ],
        },
      ],
    },
    {
      name: "src",
      isFolder: "true",
      items: [
        {
          name: "sub src",
          isFolder: "true",
          items: [
            {
              name: "src 001",
              isFolder: "false",
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
      isFolder: "false",
    },
  ],
};

export default explorer;
